import type { Job } from "@/types";

export function isCurrentJob(job: Job): boolean {
  return job.endDate === null;
}

export function getCurrentJob(jobs: readonly Job[]): Job | undefined {
  return jobs.find(isCurrentJob);
}

export function getJobEndTimestamp(job: Job): number {
  return job.endDate === null ? Infinity : new Date(job.endDate).getTime();
}
