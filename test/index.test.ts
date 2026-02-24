import { Test } from "../src/index";

describe("testing index file", () => {
  test("empty string should result in zero", () => {
    expect(new Test().add("")).toBe(0);
  });
});
