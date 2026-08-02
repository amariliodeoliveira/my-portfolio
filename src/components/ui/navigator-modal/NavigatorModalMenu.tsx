"use client";

import { navigationLinks } from "@/config/navigation";
import { socialLinks } from "@/config/social";

import NavigatorModalLink from "./NavigatorModalLink";
import NavigatorModalLinkCopyUrl from "./NavigatorModalLinkCopyUrl";
import NavigatorModalMenuSection from "./NavigatorModalMenuSection";

type NavigatorModalMenuProps = {
  query: string;
};

export default function NavigatorModalMenu({ query }: NavigatorModalMenuProps) {
  const normalizedQuery = query.toLowerCase();

  // Links with sublinks (e.g. "Portfolio") aren't real pages themselves —
  // list their sublinks instead so every entry here resolves to a real route.
  const navigableLinks = navigationLinks.flatMap(
    (link) => link.sublinks ?? [link],
  );

  const filteredNavigationLinks = navigableLinks.filter((link) =>
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
            <NavigatorModalMenuSection title="General">
              <li>
                <NavigatorModalLinkCopyUrl query={query} label="Copy URL" />
              </li>
            </NavigatorModalMenuSection>
          )}

          {filteredNavigationLinks.length > 0 && (
            <NavigatorModalMenuSection title="Navigate to">
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
            </NavigatorModalMenuSection>
          )}

          {filteredSocialLinks.length > 0 && (
            <NavigatorModalMenuSection title="Social medias">
              {filteredSocialLinks.map((link) => (
                <li key={link.href}>
                  <NavigatorModalLink
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    kbd={link.kbd ?? ""}
                    modalId="navigation_modal"
                    external
                  />
                </li>
              ))}
            </NavigatorModalMenuSection>
          )}
        </>
      )}
    </>
  );
}
