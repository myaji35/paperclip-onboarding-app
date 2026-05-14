import { describe, expect, it } from "vitest";
import { greeting } from "./greeting.js";

describe("greeting", () => {
  it("formats a friendly message", () => {
    expect(greeting("world")).toBe("Hello, world!");
  });
});
