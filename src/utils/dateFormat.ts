const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(dateString: string | null): string {
  if (dateString === null) return "Moment";

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    throw new TypeError(`Invalid date string: ${dateString}`);
  }

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
