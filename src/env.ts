function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not defined`);
  }

  return value;
}

export const env = {
  siteTitle: requireEnv("NEXT_PUBLIC_SITE_TITLE"),
  siteDescription: requireEnv("NEXT_PUBLIC_SITE_DESCRIPTION"),
  siteUrl: requireEnv("NEXT_PUBLIC_SITE_URL"),

  siteAuthor: requireEnv("SITE_AUTHOR"),
};
