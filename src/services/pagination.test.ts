import { describe, expect, it } from "vitest"
import { getPageNumbers } from "./pagination"

describe("getPageNumbers", () => {
  it("should return correct page navigation for a normal case", () => {
    const result = getPageNumbers({
      totalItems: 50,
      currentPage: 3,
      perPage: 10,
    })
    expect(result).toHaveLength(5)
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: false },
      { text: "<", page: 2, isDisabled: false },
      { text: "", page: 3, isDisabled: true },
      { text: ">", page: 4, isDisabled: false },
      { text: ">>", page: 5, isDisabled: false },
    ])
  })

  it("should disable previous navigation on the first page", () => {
    const result = getPageNumbers({
      totalItems: 50,
      currentPage: 1,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: true },
      { text: "<", page: 1, isDisabled: true },
      { text: "", page: 1, isDisabled: true },
      { text: ">", page: 2, isDisabled: false },
      { text: ">>", page: 5, isDisabled: false },
    ])
  })

  it("should disable next navigation on the last page", () => {
    const result = getPageNumbers({
      totalItems: 50,
      currentPage: 5,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: false },
      { text: "<", page: 4, isDisabled: false },
      { text: "", page: 5, isDisabled: true },
      { text: ">", page: 5, isDisabled: true },
      { text: ">>", page: 5, isDisabled: true },
    ])
  })

  it("should handle a single page scenario", () => {
    const result = getPageNumbers({
      totalItems: 10,
      currentPage: 1,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: true },
      { text: "<", page: 1, isDisabled: true },
      { text: "", page: 1, isDisabled: true },
      { text: ">", page: 1, isDisabled: true },
      { text: ">>", page: 1, isDisabled: true },
    ])
  })

  it("should handle zero totalItems", () => {
    const result = getPageNumbers({
      totalItems: 0,
      currentPage: 1,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: true },
      { text: "<", page: 1, isDisabled: true },
      { text: "", page: 1, isDisabled: true },
      { text: ">", page: 1, isDisabled: true },
      { text: ">>", page: 1, isDisabled: true },
    ])
  })

  it("should handle perPage larger than totalItems", () => {
    const result = getPageNumbers({
      totalItems: 5,
      currentPage: 1,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: true },
      { text: "<", page: 1, isDisabled: true },
      { text: "", page: 1, isDisabled: true },
      { text: ">", page: 1, isDisabled: true },
      { text: ">>", page: 1, isDisabled: true },
    ])
  })

  it("should handle large perPage with multiple pages", () => {
    const result = getPageNumbers({
      totalItems: 100,
      currentPage: 2,
      perPage: 20,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: false },
      { text: "<", page: 1, isDisabled: false },
      { text: "", page: 2, isDisabled: true },
      { text: ">", page: 3, isDisabled: false },
      { text: ">>", page: 5, isDisabled: false },
    ])
  })

  it("should handle currentPage out of bounds (greater than lastPage)", () => {
    const result = getPageNumbers({
      totalItems: 30,
      currentPage: 10,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: false },
      { text: "<", page: 2, isDisabled: false },
      { text: "", page: 3, isDisabled: true }, // Adjusted to lastPage
      { text: ">", page: 3, isDisabled: true },
      { text: ">>", page: 3, isDisabled: true },
    ])
  })

  it("should handle currentPage less than 1", () => {
    const result = getPageNumbers({
      totalItems: 30,
      currentPage: 0,
      perPage: 10,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: true },
      { text: "<", page: 1, isDisabled: true },
      { text: "", page: 1, isDisabled: true },
      { text: ">", page: 2, isDisabled: false },
      { text: ">>", page: 3, isDisabled: false },
    ])
  })

  it("should handle 76", () => {
    const result = getPageNumbers({
      totalItems: 76,
      currentPage: 3,
      perPage: 32,
    })
    expect(result).toEqual([
      { text: "<<", page: 1, isDisabled: false },
      { text: "<", page: 2, isDisabled: false },
      { text: "", page: 3, isDisabled: true },
      { text: ">", page: 3, isDisabled: true },
      { text: ">>", page: 3, isDisabled: true },
    ])
  })
})
