import { CountrySettings } from "./PhonePattern.types";
import { applyFilters, formatValue, serializeValue } from "./useControls";

const settingsMock: CountrySettings = {
  code: "US",
  pattern: "+ ###-###-####",
  example: "+1 (123) 456 7890",
  filters: [],
};

const mockCommonFiltersGetter = jest.fn().mockReturnValue([]);
jest.mock("./PhonePattern.config", () => ({
  countrySettings: {},
  get commonFilters() {
    return mockCommonFiltersGetter();
  },
}));

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

describe("serializeValue function", () => {
  it("leaves all numbers", () => {
    const value = "123456789";

    const result = serializeValue(value);
    expect(result).toBe("123456789");
  });

  it("removes all non-numeric symbols", () => {
    const value = "+ (123)-456-789-abc";

    const result = serializeValue(value);
    expect(result).toBe("123456789");
  });
});

describe("applyFilters function", () => {
  it("applies common filters", () => {
    const filter1 = jest.fn((_: string, next: string) => next);
    const filter2 = jest.fn((_: string, next: string) => next);
    mockCommonFiltersGetter.mockReturnValueOnce([filter1, filter2]);

    applyFilters("123", "456", settingsMock);

    expect(filter1).toHaveBeenCalledTimes(1);
    expect(filter2).toHaveBeenCalledTimes(1);
  });

  it("applies country-specific filters", () => {
    const filter = jest.fn((_: string, next: string) => next);
    const settings = { ...settingsMock, filters: [filter] };

    applyFilters("123", "456", settings);

    expect(filter).toHaveBeenCalledTimes(1);
  });

  it("applies country-specific filters before common filters", () => {
    const countryFilter = jest.fn((_: string, next: string) => next);
    const commonFilter = jest.fn((_: string, next: string) => next);

    const settings = { ...settingsMock, filters: [countryFilter] };
    mockCommonFiltersGetter.mockReturnValueOnce([commonFilter]);

    applyFilters("123", "456", settings);

    expect(countryFilter.mock.invocationCallOrder[0]).toBeLessThan(
      commonFilter.mock.invocationCallOrder[0]
    );
  });

  it("applies filters in the array-order", () => {
    const countryFilter1 = jest.fn((_: string, next: string) => next);
    const countryFilter2 = jest.fn((_: string, next: string) => next);

    const settings = {
      ...settingsMock,
      filters: [countryFilter1, countryFilter2],
    };

    applyFilters("123", "456", settings);

    expect(countryFilter1.mock.invocationCallOrder[0]).toBeLessThan(
      countryFilter2.mock.invocationCallOrder[0]
    );

    const commonFilter1 = jest.fn((_: string, next: string) => next);
    const commonFilter2 = jest.fn((_: string, next: string) => next);

    mockCommonFiltersGetter.mockReturnValueOnce([commonFilter1, commonFilter2]);

    applyFilters("123", "456", settings);

    expect(commonFilter1.mock.invocationCallOrder[0]).toBeLessThan(
      commonFilter2.mock.invocationCallOrder[0]
    );
  });

  it("passes the result of a filter to the next filter", () => {
    const filter1 = jest.fn(() => "result1");
    const filter2 = jest.fn((_: string, next: string) => next);
    mockCommonFiltersGetter.mockReturnValueOnce([filter1, filter2]);

    applyFilters("123", "456", settingsMock);

    expect(filter2.mock.calls[0][1]).toBe("result1");

    const countryFilter = jest.fn(() => "countryResult");
    const commonFilter = jest.fn((_: string, next: string) => next);

    const settings = { ...settingsMock, filters: [countryFilter] };
    mockCommonFiltersGetter.mockReturnValueOnce([commonFilter]);

    applyFilters("123", "456", settings);

    expect(commonFilter.mock.calls[0][1]).toBe("countryResult");
  });
});
