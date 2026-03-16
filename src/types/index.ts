export interface Job {
  startDate: string;
  endDate: string | null;
  company: string;
  link?: string;
  role: string;
  description: string;
}
