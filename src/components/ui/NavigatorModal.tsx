import React from "react";

import NavigatorModalSearch from "./NavigatorModalSearch";
import NavigatorModalLink from "./NavigatorModalLink";

export default async function NavigatorModal(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <dialog id="navigation_modal" className="modal">
      <div className="modal-box p-0 bg-base-300/40 backdrop-blur-3xl overflow-hidden">
        <NavigatorModalSearch />

        <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">
          Navigate to
        </h3>
        <ul className="list *:list-item">
          <li>
            <NavigatorModalLink
              href="/"
              label="Home"
              icon="line-md:home-md"
              kbd="h"
              modalId="navigation_modal"
            />
          </li>

          <li>
            <NavigatorModalLink
              href="/about-me"
              label="About Me"
              icon="line-md:account"
              kbd="a"
              modalId="navigation_modal"
            />
          </li>

          <li>
            <NavigatorModalLink
              href="/setup"
              label="Setup"
              icon="line-md:computer"
              kbd="s"
              modalId="navigation_modal"
            />
          </li>
        </ul>

        <h3 className="uppercase p-4 pb-2 text-xs opacity-60 tracking-wide">
          Social medias
        </h3>
        <ul className="list *:list-item">
          <li>
            <NavigatorModalLink
              href="https://www.linkedin.com/in/amariliodeoliveira/"
              label="LinkedIn"
              icon="line-md:linkedin"
              kbd="l"
              modalId="navigation_modal"
            />
          </li>

          <li>
            <NavigatorModalLink
              href="https://github.com/amariliodeoliveira/"
              label="GitHub"
              icon="line-md:github-loop"
              kbd="g"
              modalId="navigation_modal"
            />
          </li>
        </ul>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
