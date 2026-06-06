import path from "path";
import { promises as fs } from "fs";
import { globby } from "globby";
import os from "os";
import grayMatter from "gray-matter";

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function stripHtml(content) {
  return content
    .replace(/import\s+\S+\s+from\s+['"][^'"]+['"]/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/[#*`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getRelativeSlug(filePath) {
  return filePath.split(/pages\//).pop().replace(/\.mdx$/, '');
}

(async function () {
  console.log("preparing index....");
  const srcDir = path.join(process.cwd(), "src");
  const publicDir = path.join(process.cwd(), "public");
  const contentDir = path.join(srcDir, "pages");
  let contentFilePattern = path.join(contentDir, "**", "*.mdx");

  if (os.platform().includes("win")) {
    contentFilePattern = contentFilePattern.replaceAll("\\", "/");
  }

  const indexFile = path.join(publicDir, "search-index.json");
  const contentFilePaths = await globby([contentFilePattern]);

  if (!contentFilePaths.length) return;

  const index = [];

  for (const filePath of contentFilePaths) {
    const file = await fs.readFile(filePath, "utf8");
    const {
      data: { title, description, seoDescription, venue, eventDates, eventDatesDetails, published },
      content,
    } = grayMatter(file);

    if (published === false) continue;
    if (!title) continue;

    const baseSlug = getRelativeSlug(filePath);
    const cleanBody = stripHtml(content);
    const desc = seoDescription || description || '';

    if (eventDatesDetails?.length) {
      for (const detail of eventDatesDetails) {
        const titleSlug = detail.eventTitle ? slugify(detail.eventTitle) : '';
        const slug = `${baseSlug}/${detail.date}/${titleSlug}`;
        index.push({
          slug,
          title: detail.eventTitle ? `${title}: ${detail.eventTitle}` : title,
          description: detail.topDetails?.text || desc,
          venue: venue || '',
          body: cleanBody,
        });
      }
    } else {
      // Single-date events and recurring eventDates events get one entry at the base URL
      index.push({
        slug: baseSlug,
        title,
        description: desc,
        venue: venue || '',
        body: cleanBody,
      });
    }
  }

  await fs.writeFile(indexFile, JSON.stringify(index));
  console.log(`Indexed ${index.length} documents from ${contentDir} to ${indexFile}`);
})();
