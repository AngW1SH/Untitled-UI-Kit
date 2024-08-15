import { formatValue } from "./useControls";

describe("formatValue function", () => {
  it("replaces all #-symbols with numbers", () => {
    const value = "123456789";
    const pattern = "#########";

    const result = formatValue(value, pattern);

    expect(result).toBe("123456789");
  });

  it("leaves non-numeric symbols unchanged", () => {
    const value = "123456789";
    const pattern = "+ ###-###-###";

    const result = formatValue(value, pattern);
    expect(result).toBe("+ 123-456-789");
  });

  it("trims extra numbers in value", () => {
    const value = "123456789";
    const pattern = "+ ###";

    const result = formatValue(value, pattern);
    expect(result).toBe("+ 123");
  });

  it("trims extra symbols in pattern", () => {
    const value = "1234";
    const pattern = "+ ###-###";

    const result = formatValue(value, pattern);
    expect(result).toBe("+ 123-4");
  });

  it("doesn't trim extra non-numeric symbols to the right", () => {
    const value = "123";
    const pattern = "+ (###)-###";

    const result = formatValue(value, pattern);
    expect(result).toBe("+ (123)-");
  });

  it("trims extra non-numeric symbols if the value is empty", () => {
    const value = "";
    const pattern = "+ (###)-###";

    const result = formatValue(value, pattern);
    expect(result).toBe("");
  });
});
