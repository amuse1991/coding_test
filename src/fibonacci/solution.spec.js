import { fiboRecursion } from "./solution";

test("fibonacci sequence", () => {
  it("with recursion", () => {
    const input = 10;
    const sol = fiboRecursion(input);
    expect(sol).toBe(55);
  });
});
