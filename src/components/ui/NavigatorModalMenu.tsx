"use client";

import { navigationLinks, socialMediaLinks } from "@/data/links";

import NavigatorModalLink from "./NavigatorModalLink";
import NavigatorModalLinkCopyUrl from "./NavigatorModalLinkCopyUrl";

type NavigatorModalMenuProps = {
  query: string;
};

export default function NavigatorModalMenu({ query }: NavigatorModalMenuProps) {
  const filteredNavigationLinks = navigationLinks.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSocialMediaLinks = socialMediaLinks.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  const showCopyUrl = "Copy URL".toLowerCase().includes(query.toLowerCase());

  const noResults =
    query && filteredNavigationLinks.length === 0 && filteredSocialMediaLinks.length === 0 && !showCopyUrl;

  return (
    <>
      {noResults ? (
        <p className="p-4 text-sm opacity-60">No results found.</p>
      ) : (
        <>
          {(showCopyUrl || !query) && (
            <>
              <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">General</h3>
              <ul className="list *:list-item">
                <li>
                  <NavigatorModalLinkCopyUrl query={query} label="Copy URL" />
                </li>
              </ul>
            </>
          )}

          {filteredNavigationLinks.length > 0 && (
            <>
              <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">Navigate to</h3>
              <ul className="list *:list-item">
                {filteredNavigationLinks.map((link, index) => (
                  <li key={index}>
                    <NavigatorModalLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      kbd={link.kbd}
                      modalId="navigation_modal"
                    />
                  </li>
                ))}
              </ul>
            </>
          )}

          {filteredSocialMediaLinks.length > 0 && (
            <>
              <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">Social medias</h3>
              <ul className="list *:list-item">
                {filteredSocialMediaLinks.map((link, index) => (
                  <li key={index}>
                    <NavigatorModalLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      kbd={link.kbd}
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
