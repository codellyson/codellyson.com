import { parseISO, format, formatISO } from "date-fns";

export function Date({ dateString }: { dateString: string }) {
  const date = formatISO(dateString);
  if(!dateString) return null;

  return <time dateTime={dateString}>{format(date, "LLL d, yyyy")}</time>;
}
