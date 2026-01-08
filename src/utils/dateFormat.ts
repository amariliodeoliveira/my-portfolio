// utils/dateFormat.ts

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

  if (typeof dateString !== "string") {
    throw new Error(
      `Invalid date format: expected string or null, received ${typeof dateString}`,
    );
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
