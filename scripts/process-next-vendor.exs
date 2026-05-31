#!/usr/bin/env elixir

defmodule EventQueue do
  @csv_path Path.expand(Path.join([__DIR__, "..", "event-vendors.csv"]))
  @project_root Path.dirname(@csv_path)
  @claude_bin "/opt/homebrew/bin/claude"

  def run do
    {headers, rows} = read_csv()

    case find_next(rows) do
      nil ->
        msg = "All vendors finished — add new rows or reset finished to false to start a new cycle."
        IO.puts(msg)
        notify(msg)

      {idx, vendor} ->
        process(vendor, rows, idx, headers)
    end
  end

  defp read_csv do
    [header_line | data_lines] =
      @csv_path
      |> File.read!()
      |> String.split("\n", trim: true)

    headers = String.split(header_line, ",")

    rows =
      Enum.map(data_lines, fn line ->
        values = String.split(line, ",", parts: length(headers))
        Enum.zip(headers, values) |> Map.new()
      end)

    {headers, rows}
  end

  defp find_next(rows) do
    rows
    |> Enum.with_index()
    |> Enum.find(fn {row, _i} ->
      String.downcase(row["finished"] || "false") != "true"
    end)
    |> case do
      nil -> nil
      {row, idx} -> {idx, row}
    end
  end

  defp process(vendor, rows, idx, headers) do
    slug = vendor["slug"]
    name = vendor["name"]

    IO.puts("→ Processing #{name} (#{slug})")

    with :ok <- ensure_config(vendor) do
      {output, code} =
        System.cmd(@claude_bin, ["--print", "/new-events #{slug}"],
          cd: @project_root,
          stderr_to_stdout: true
        )

      IO.puts(output)

      if code == 0 do
        updated = List.update_at(rows, idx, &Map.put(&1, "finished", "true"))
        write_csv(headers, updated)
        IO.puts("✓ #{name} marked finished.")
      else
        IO.puts("ERROR: claude exited #{code} for #{slug}")
        System.halt(code)
      end
    end
  end

  defp ensure_config(vendor) do
    slug = vendor["slug"]
    config_path = Path.join([@project_root, ".claude", "event-sources", "#{slug}.json"])

    if File.exists?(config_path) do
      :ok
    else
      build_config(vendor, config_path)
    end
  end

  defp build_config(%{"type" => "calendar"} = vendor, config_path) do
    slug = vendor["slug"]
    name = vendor["name"]
    url = vendor["url"] || ""

    File.write!(config_path, calendar_config_json(slug, name, url))
    IO.puts("  Created config: #{config_path}")
    :ok
  end

  defp json_escape(str) do
    str
    |> String.replace("\\", "\\\\")
    |> String.replace("\"", "\\\"")
  end

  defp calendar_config_json(slug, name, url) do
    s = &json_escape/1

    """
    {
      "name": "#{s.(name)}",
      "type": "calendar",
      "url": "#{s.(url)}",
      "outputDir": "src/pages/chattanooga/events",
      "slugPrefix": "#{s.(slug)}",
      "defaultFrontmatter": {
        "venue": "#{s.(name)}",
        "address": "",
        "iconPath": "/images/icons-new/events.png",
        "eventLink": "#{s.(url)}",
        "tags": [{"type": "event", "tag": "#{s.(slug)}"}],
        "layout": "../../../layouts/BlogPostLayout.astro"
      }
    }
    """
  end

  defp build_config(%{"type" => type}, config_path) do
    IO.puts("""
    ERROR: type '#{type}' requires a manual config — auto-generation only supports 'calendar'.
    Create the config file manually at: #{config_path}
    """)

    System.halt(1)
  end

  defp build_config(vendor, config_path) do
    IO.puts("""
    ERROR: no type set for #{vendor["slug"]}.
    Add a 'type' column value (calendar/recurring/mixed) to event-vendors.csv,
    or create the config manually at: #{config_path}
    """)

    System.halt(1)
  end

  defp write_csv(headers, rows) do
    lines =
      Enum.map(rows, fn row ->
        Enum.map_join(headers, ",", &(row[&1] || ""))
      end)

    content = Enum.join([Enum.join(headers, ",") | lines], "\n") <> "\n"
    File.write!(@csv_path, content)
  end

  defp notify(message) do
    System.cmd("osascript", [
      "-e",
      ~s(display notification "#{message}" with title "Things Happening")
    ])
  end
end

EventQueue.run()
