const { expect, test } = require("@playwright/test");


  test.describe('Open the Client Application', () => {
    test('The Register of Client Application', async ({ page }) => {

      await page.goto("https://rahulshettyacademy.com/client");
      await page.locator(".btn1").click();
      await page.locator("#firstName").fill("ADITYA");
      await page.locator("#lastName").fill("MOHAN");
      await page.locator("#userEmail").type("mohanadityajha@gmail.com");
      await page.locator("#userMobile").type("9711334048");
      await page.locator("#userPassword").fill("Aditya@2023");
      await page.locator("#confirmPassword").type("Aditya@2023");
      await page.locator(".btn.btn-block.login-btn").click();

      test('The Login of Client Application', async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("mohanadityajha@gmail.com");
        await page.locator("#userPassword").type("Aditya2023");
        await page.locator("#login").click();
        await page.waitForLoadState("networkidle");
        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles);



    })
    
  })
  
  })


