const { expect, test } = require("@playwright/test");

test.describe("Amazon Site Page ", () => {

  test("Add to Cart", async ({ page }) => {
    //  const pagePromise = context.waitForEvent("page");
    await page.goto("https://www.amazon.in/");
    const searchBox = await page.getByPlaceholder("Search Amazon.in");
    await searchBox.fill("iphone 14");
    await searchBox.press("Enter");
    const product = await page.locator(".a-section img.s-image").nth(1);
    await product.click();
    const pagePromise = await page.waitForEvent("popup");
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    const addToCartButton = await newPage.getByRole("button", {
      name: "Add to Cart",
    });
    await addToCartButton.click();
    await newPage.pause();
  });
})
