import { cssBundleHref } from "@remix-run/css-bundle";
import React, { ElementType } from "react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./Styles/body.css";
import styles1 from "./Styles/Hero_new.css";
import styles2 from "./Styles/Navbar.css";
import styles3 from "./Styles/Products.css";

import logo from "./images/logo_small.webp";

export const links: LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles },
    {rel: 'stylesheet', href: styles1 },
    {rel: 'stylesheet', href: styles2 },
    {rel: 'stylesheet', href: styles3 },
    {
      rel: "icon",
      href: logo,
      type: "image/png",
    },
  ]
};

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    overflow?: string;
  }
}

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" integrity="sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=" crossOrigin="anonymous" defer></script>
      </head>
      <body className="preload" overflow="hidden">
        <div id="root">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
