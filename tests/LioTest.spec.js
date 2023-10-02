const { test, expect } = require("@playwright/test");

test.describe("Amazon Site", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.amazon.in/")
  })
  test("Automation Testing", async ({ page }) => {
    await page.locator('[placeholder="Search Amazon.in"]').fill("IPHONE 14");
    await page.locator('[type="submit"]').click();
    await page.locator("[src='https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UY218_.jpg']").nth(2).click();
    //await page.waitForEvent("popup");
    //await page.locator(".a-icon a-icon-cart").click();
    await page.pause(4000);
  
    

  })

})
