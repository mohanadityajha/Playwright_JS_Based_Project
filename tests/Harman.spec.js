const { expect, test } = require("@playwright/test");

test.describe("Automation With Playwright", async () => {
  // test.beforeEach(async ({ page }) => {
  //   await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  // });

  test("Navigation Page", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.goBack();
    await page.goForward();
  });

  test("Validation URL", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    expect(page.url()).toContain("rahulshettyacademy");
  });

  test("Verify the Page Title", async ({ page }) => {
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  });

  test("Login Page", async ({ page }) => {
    await page.locator("[name='username']").fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("learning");
    await page.locator('[type="submit"]').click();
  });

  test("Verify the Radio Button", async ({ page }) => {
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.pause();
  });

  test("Verify the Check-Box Button", async ({ page }) => {
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    await page.pause();
  });

  test("Verify the Static DropDown", async ({ page }) => {
    await page.locator("select.form-control").selectOption("Consultant");
  });

  test("Blinking Link", async ({ page }) => {
    const documentLink = page.locator('[href*="documents-request"]');
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
  });

  test("Verify the Screenshot on locate and Entire page", async ({ page }) => {
    await page.screenshot({ path: "screenshot.png" });
    await page.locator('[type="submit"]').screenshot({ path: "screenshot.png" });
  });

  test("Verify the Dialog alert", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
  });

  test("Verify the Hover", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    await page.locator("#mousehover").hover();
  });

  test("Handle Child Window by Link", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    const documentLink = page.locator('[href*="documents-request"]');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      documentLink.click()
    ]);

    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);

    await newPage.close(); // Close the newly opened page to prevent resource leakage

    await page.locator("[name='username']").fill("domain");
    await page.pause();
    console.log(await page.locator("[name='username']").textContent());
    await page.pause();
  });

  test("Display Elements and Hidden Elements", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await expect(page.locator("#hide-textbox")).toBeHidden();
    await expect(page.locator("#show-textbox")).toBeVisible();
  });
  test("Dialog Alert Pop-Up", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    await page.locator("dialog", dialog => dialog.accept());
    await page.locator("#alertbtn").click();
    await page.locator("dialog", dialog => dialog.dismiss());
  });
  test("Handle Hover Action", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    await page.locator("#mousehover").hover();
  });
  test(" Handle Iframe", async () => {
    await page.frameLocator("")
    
  });
  test.only("Visual Testing", async ({page }) => {
    await page.goto("https://www.google.co.in/");
    expect(await page.screenshot()).toMatchSnapshot("landing.png");
  })
});






