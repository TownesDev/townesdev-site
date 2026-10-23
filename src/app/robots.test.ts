import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots", () => {
  it("blocks crawling during the greenfield foundation phase", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    });
  });
});
