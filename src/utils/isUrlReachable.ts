const DEFAULT_TIMEOUT_MS = 5000;

/**
 * Server-side reachability check (HEAD request) so a broken external URL
 * (DNS failure, timeout, 4xx/5xx) can be swapped for a fallback UI instead
 * of silently failing inside an <iframe>.
 */
export async function isUrlReachable(
  url: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<boolean> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      cache: "no-store",
    });
    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
