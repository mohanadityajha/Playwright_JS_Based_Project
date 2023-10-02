import { test, expect } from "@playwright/test";

test.describe("Website of HomePage", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
  })
  test("Register the Page", async ({ page }) => {

    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("Adit");
    await page.locator("input[placeholder='Last Name']").type("Moh");
    await page.locator("input[type='email']").type("mohanadityajha@gmail.com");
    await page.locator("input[placeholder='enter your number']").fill("9711334048");
    //await page.locator(".custom-select.ng-valid.ng-touched.ng-dirty").selectOption("Engineer");
    await page.locator("input[type='radio']").first().check();
    await expect(page.locator("input[type='radio']").first()).toBeChecked();
    await page.locator("input[placeholder='Passsword']").fill("Aditya@2023");
    await page.locator("#confirmPassword").type("Aditya@2023");
    await page.locator("input[type='checkbox']").click();
    await expect(page.locator("input[type='checkbox']")).toBeChecked();
    page.locator("input[type='submit']");
  })
  test.only("Login Page After Register", async ({ page }) => {
    await page.locator("#userEmail").fill("mohanadityajha@gmail.com");
    await page.locator("input[placeholder='enter your passsword']").type("Aditya@2023");
    await page.locator("input[type='submit']").click();
    //await page.locator("input[href='/client/auth/password-new']").click();
    await page.getByRole('button', { name: " Cart" }).click();
    //await page.locator(".btn.btn-custom").click();
  })
})