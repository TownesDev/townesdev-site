import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { metadata } from "./layout";
import Home from "./page";
import { HOLDING_MESSAGE, PORTFOLIO_URL, SITE_NAME } from "@/lib/site";

describe("TownesDev foundation page", () => {
  it("renders only the approved holding content and portfolio link", () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain(`<h1 id="site-title"`);
    expect(html).toContain(SITE_NAME);
    expect(html).toContain(HOLDING_MESSAGE);
    expect(html).toContain(`href="${PORTFOLIO_URL}"`);
    expect(html).toContain("View Donovan Townes");

    for (const forbidden of [
      "<form",
      "<input",
      "<button",
      "pricing",
      "checkout",
      "sign up",
      "tester",
      "mailto:",
      "tel:",
      "$",
    ]) {
      expect(html.toLowerCase()).not.toContain(forbidden);
    }
  });

  it("publishes temporary noindex and nofollow metadata", () => {
    expect(metadata.title).toBe(SITE_NAME);
    expect(metadata.description).toBe(HOLDING_MESSAGE);
    expect(metadata.robots).toMatchObject({
      index: false,
      follow: false,
      nocache: true,
    });
  });
});
