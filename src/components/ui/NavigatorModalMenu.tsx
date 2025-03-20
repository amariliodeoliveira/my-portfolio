"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import NavigatorModalLink from "./NavigatorModalLink";
import { navigationLinks, socialMediaLinks } from "@/data/links";

export default function NavigatorModalMenu() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const filteredNavigationLinks = navigationLinks.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSocialMediaLinks = socialMediaLinks.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {query &&
      filteredNavigationLinks.length === 0 &&
      filteredSocialMediaLinks.length === 0 ? (
        <p className="p-4 text-sm opacity-60">No results found.</p>
      ) : (
        <>
          {filteredNavigationLinks.length > 0 && (
            <>
              <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">
                Navigate to
              </h3>
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
              <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">
                Social medias
              </h3>
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
