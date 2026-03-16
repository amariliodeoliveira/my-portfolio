"use client";

import { navigationLinks } from "@/config/navigation";
import { socialLinks } from "@/config/social";

import NavigatorModalLink from "./NavigatorModalLink";
import NavigatorModalLinkCopyUrl from "./NavigatorModalLinkCopyUrl";

type NavigatorModalMenuProps = {
  query: string;
};

export default function NavigatorModalMenu({ query }: NavigatorModalMenuProps) {
  const normalizedQuery = query.toLowerCase();

  const filteredNavigationLinks = navigationLinks.filter((link) =>
    link.label.toLowerCase().includes(normalizedQuery),
  );

  const filteredSocialLinks = socialLinks.filter((link) =>
    link.label.toLowerCase().includes(normalizedQuery),
  );

  const showCopyUrl = "copy url".includes(normalizedQuery);

  const noResults =
    query &&
    filteredNavigationLinks.length === 0 &&
    filteredSocialLinks.length === 0 &&
    !showCopyUrl;

  return (
    <>
      {noResults ? (
        <p className="p-4 text-sm opacity-60">No results found.</p>
      ) : (
        <>
          {(showCopyUrl || !query) && (
            <>
              <h3 className="p-4 pb-2 text-xs tracking-wide uppercase opacity-60">
                General
              </h3>

              <ul className="list *:list-item">
                <li>
                  <NavigatorModalLinkCopyUrl query={query} label="Copy URL" />
                </li>
              </ul>
            </>
          )}

          {filteredNavigationLinks.length > 0 && (
            <>
              <h3 className="p-4 pb-2 text-xs tracking-wide uppercase opacity-60">
                Navigate to
              </h3>

              <ul className="list *:list-item">
                {filteredNavigationLinks.map((link) => (
                  <li key={link.href}>
                    <NavigatorModalLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      kbd={link.kbd ?? ""}
                      modalId="navigation_modal"
                    />
                  </li>
                ))}
              </ul>
            </>
          )}

          {filteredSocialLinks.length > 0 && (
            <>
              <h3 className="p-4 pb-2 text-xs tracking-wide uppercase opacity-60">
                Social medias
              </h3>

              <ul className="list *:list-item">
                {filteredSocialLinks.map((link) => (
                  <li key={link.href}>
                    <NavigatorModalLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      kbd={link.kbd ?? ""}
                      modalId="navigation_modal"
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
}
