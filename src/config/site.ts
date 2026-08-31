const VERCEL_FALLBACK_URL = "https://my-portfolio-ebon-sigma-14.vercel.app";

function normalizeSiteUrl(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, "");
}

export function resolveSiteUrl(explicitUrl?: string): string {
  const siteUrl =
    explicitUrl ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    VERCEL_FALLBACK_URL;

  return normalizeSiteUrl(siteUrl);
}

export const SITE_URL = resolveSiteUrl();
