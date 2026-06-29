import { calculateDiscount } from "./src/utils";

describe("App", () => {
  it("should return corect discount", () => {
    const discount = calculateDiscount(100, 10);
    expect(discount).toBe(10);
  });
});
