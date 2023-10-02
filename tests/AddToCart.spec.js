const { test, expect } = require("@playwright/test");

test.describe("Automation Testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.amazon.in/");
  })
  test("Add To Cart", async ({ page }) => {
    // await page.goto("https://www.amazon.in");
    // page.locator('input[placeholder = "Search Amazon.in"]').fill("IPHONE 14")
    // page.locator('input[type = "submit"]').click();
    // const page1Promise = page.waitForEvent('popup');
    // const page1 = await page1Promise;

    await page.goto('https://www.amazon.in/');
    const searchBox = page.getByPlaceholder('Search Amazon.in');
    await searchBox.click();
    await searchBox.fill('iphone 14');
    await searchBox.press('Enter');

    const productImages = await page.locator('div > span > a > div > img')
    productImages.nth(2).click();
    //await page.locator([target = "_blank"]).nth(2).click();
    //await page.getByLink(".a-size-medium a-color-base a-text-normal").click()
    //await page.getByRole('link', {class : "a-size-medium a-color-base a-text-normal" }).click();
  })
})