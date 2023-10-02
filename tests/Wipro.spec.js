const { test, expect } = require("@playwright/test");

test.describe("Automation Testing in Playwright", async () => {
  // test.beforeEach(async ({page }) => {
  //   //await page.goto("https://www.demoblaze.com/");
  // })
  test("Page Navigation", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.goto("https://www.demoblaze.com/");
    await page.goBack();
    await page.goForward();
    await page.pause(4000);
  })
  test("Page Title", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

  })
  test("Validate the URL", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await expect(page.url()).toContain("amazon");
  })
  test("Login Page", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").type("rahulshettyacademy");
    await page.locator('input[type = "password"]').fill("learning");
    await page.locator('input[type="submit"]').click();

    // Below next 2 lines apply when user enters wrong credentials
    // console.log(await page.locator("[style*='block']").textContent());
    // await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    // Select item from group of items
    //await page.waitForLoadState("networkidle");
    //await page.locator(".card-body a").first().textContent();
    //await page.locator(".card-body a").nth(1).textContent();
    //await page.locator(".card-body a").allTextContents();
    //await page.pause(5000);



  })
  test("ADD TO CART", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("iphone 14").click();
    //page.getByRole('button',{ value : 'Go' }).click()



  })
  test("Static Dropdown", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("select.form-control").selectOption("Consultant");
    await page.pause();
    //Or
    // const dropdown = page.locator("select.form-control");
    // await dropdown.selectOption("Consultant");
    // await page.pause();

  })
  test("Radio Button", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.pause();

  })
  test("CheckBox", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await page.pause();

  })
  test("Blanking Link", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    const documentLink = page.locator("[href*='documents-request']");
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
  });
  
})