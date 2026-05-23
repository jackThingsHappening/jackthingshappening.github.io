function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function expandEvents(files: any[]): any[] {
  const expanded: any[] = [];

  for (const file of files) {
    const fm = file.frontmatter ?? file;
    const baseUrl = file.url ?? fm.url;

    if (fm.eventDatesDetails?.length) {
      for (const detail of fm.eventDatesDetails) {
        const slug = detail.eventTitle ? slugify(detail.eventTitle) : '';
        expanded.push({
          ...fm,
          pubDate: detail.date,
          eventTitle: detail.eventTitle,
          entranceCost: detail.entranceCost ?? fm.entranceCost,
          time: detail.time ?? fm.time,
          topDetails: detail.topDetails,
          url: `${baseUrl}/${detail.date}/${slug}`,
          type: 'event',
        });
      }
    } else if (fm.eventDates?.length) {
      for (const date of fm.eventDates) {
        expanded.push({ ...fm, pubDate: date, url: baseUrl, type: 'event' });
      }
    } else {
      expanded.push({ ...fm, url: baseUrl, type: 'event' });
    }
  }

  return expanded;
}
