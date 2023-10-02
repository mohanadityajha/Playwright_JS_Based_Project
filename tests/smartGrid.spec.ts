import { test, expect } from "@playwright/test";


test.describe("Automation of Smart Grid Website", () => {
  
  test("Login Page of smart grid", async ({ page }) => {
    await page.goto("https://demo.kitchen.sgrids.io/auth/login");
    await page.locator("input[placeholder='Email']").fill("aditya.m@sgrids.io");
    await page.locator("input[placeholder='Password']").fill("Aditya@2023");
    //await page.getByRole('button', {name: /log in/i}).click();
    await page.locator(".login-card form>div.ant-row button.login-form-button").click()
    //span[class='ng-star-inserted']
    //span.ng-star-inserted
    //button[type='submit']

    // Once We lend on Home Page of smart grid then We focus on Left Logo and assert it
    const leftLogo = page.locator(".header-continer>div>ul.nav-left");
    await expect(leftLogo).toBeVisible();

    // Once We lend on Home Page of smart grid then We focus on Right Logo and and assert it
    const rightLogo = page.locator(".header-continer>div.nav-wrap ul.nav-right");
    await expect(rightLogo).toBeVisible();

    // Verify the Title of the Home Page
    const pageTitle = await expect(page).toHaveTitle("Smart Grid Analytics");

    // Check the URL and assert it 
     await page.goto("https://demo.kitchen.sgrids.io/cms/solar/portfolio/home");
     const urlText = expect(page.url()).toContain("portfolio");

    // Check the bell Icon in header of the page 
    const bellIcon = page.locator(".header-continer>div.nav-wrap>ul.nav-right >li.ng-star-inserted >nz-badge.ant-badge")
    await expect(bellIcon).toBeVisible();

    // Check the Solar Icon in the header and assert it 
    const solarIcon = page.locator(".header-continer>div.nav-wrap>ul.nav-right>li.plant-capacity");
    await expect(solarIcon).toBeVisible();

    // Check the ScreenShot Button 
    const screenShotIcon = page.locator(".header-continer>div.nav-wrap>ul.nav-right>li.ng-star-inserted>svg.main-header-icon");
    await expect(screenShotIcon).toBeVisible();


  });
  

    

    


  });
