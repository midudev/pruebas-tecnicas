const PUBLIC_API_URL = "http://localhost:3000"

import { describe, test, expect } from "vitest"

describe("/api/items/{itemId}", () => {
  test("returns the product with the specified id", async () => {
    const itemId = 1
    const res = await fetch(`${PUBLIC_API_URL}/api/items/${itemId}`)

    // Parse the JSON data from the response
    const data = await res.json()

    // Check the type of each property of the product
    expect(typeof data.id).toBe("number")
    expect(typeof data.title).toBe("string")
    expect(typeof data.description).toBe("string")
    expect(typeof data.price).toBe("number")
    expect(typeof data.discountPercentage).toBe("number")
    expect(typeof data.rating).toBe("number")
    expect(typeof data.stock).toBe("number")
    expect(typeof data.brand).toBe("string")
    expect(typeof data.category).toBe("string")
    expect(typeof data.thumbnail).toBe("string")
    expect(
      Array.isArray(data.images) && typeof data.images[0] === "string"
    ).toBeTruthy()
  })
})
