import { test, expect } from "@playwright/test";

test.describe("Website Home Page", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
  })
  test.only("Navigation Page", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
  })
  test("Hidden Elements", async ({ page }) => {
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#show-textbox").click();
    await expect(page.locator("#displayed-text")).toBeVisible();
  })

  test("Alert Pop-Up/Dialog", async ({ page }) => {
    await page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.pause();
  })

  test.only("Handle Hover Action", async ({ page }) => {
    await page.locator("#mousehover").hover();
  })

  test("Handle the Screenshot Action", async ({ page }) => {
    //await expect(page.locator("#displayed-text")).toBeVisible();
    //await page.locator("#hide-textbox").click()
    //await page.screenshot({ path: "screenshot.png" });
    await page.locator("#displayed-text").screenshot({path: "partialscreenshot.png"})
    //await expect(page.locator("#displayed-text")).toBeHidden();
  })
})