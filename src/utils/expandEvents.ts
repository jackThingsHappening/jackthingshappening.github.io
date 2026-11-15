function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseTimeToMinutes(time: string | undefined): number {
  if (!time) return Infinity;
  const match = time.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (!match) return Infinity;
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3].toLowerCase();
  if (period === 'pm' && hours !== 12) hours += 12;
  if (period === 'am' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export function sortEvents(events: any[]): any[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.pubDate + 'T00:00:00').getTime();
    const dateB = new Date(b.pubDate + 'T00:00:00').getTime();
    if (dateA !== dateB) return dateA - dateB;

    const aRecurring = a.recurring ? 1 : 0;
    const bRecurring = b.recurring ? 1 : 0;
    if (aRecurring !== bRecurring) return aRecurring - bRecurring;

    return parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time);
  });
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
          url: slug ? `${baseUrl}/${detail.date}/${slug}` : baseUrl,
          type: 'event',
          recurring: true,
        });
      }
    } else if (fm.eventDates?.length) {
      for (const date of fm.eventDates) {
        expanded.push({ ...fm, pubDate: date, url: baseUrl, type: 'event', recurring: true });
      }
    } else {
      expanded.push({ ...fm, url: baseUrl, type: 'event' });
    }
  }

  return expanded;
}
