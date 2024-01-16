import { describe, expect, test } from "vitest";
import { suma } from "./Pilot";

describe("testing Pilot Component to check if test-config is working", () => {
  test("Should return a number when the function is invoked", () => {
    const result = suma(2);
    expect(result).toBeTypeOf("number");
  });
});
