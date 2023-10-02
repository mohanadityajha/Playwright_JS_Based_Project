const { expect, test } = require("@playwright/test");

test('UI Controls', async ({ page }) => {
  // Login Page
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await page.locator("#username").type("rahulshetty");
  await page.locator("#password").fill("learning")
  await page.locator("input[type='submit']").click();

  // Static Select DropDown
  await page.locator("select.form-control").selectOption("consult");

  // Radio Button
  await page.locator(".radiotextsty").last().click();
  await page.locator(".btn.btn-success").click();
  // Assertion
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  // Or
  console.log(await page.locator(".radiotextsty").last().isChecked());
  // Check-Box
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  // Link is blanking or not
  await expect(page.locator('[href*="documents-request"]')).toHaveAttribute("class", "blinkingText");
  //await page.pause();
})

test.only('Child Window Handle', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  const documentLink = page.locator("[href*='documents-request']");
  await expect(documentLink).toHaveAttribute("class", "blinkingText");
  await documentLink.click();

  // Wait for the new page to be created
  const newPage = await context.waitForEvent('page');

  // const [newPage] = await Promise.all([
  //   context.waitForEvent("page"), documentLink.click()
  // ])
  const text = await newPage.locator(".im-para.red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split("")[0];
  console.log(domain);
  await page.pause();
  await page.locator("#username").type("domain");
  console.log(await page.locator("#username").textContent());








})



