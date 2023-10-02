import { test, expect } from "@playwright/test";

const { describe, beforeEach } = test;

describe('Navigation the Pages', () => {
  beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
  })

  //await page.goto("https://rahulshettyacademy.com/AutomationPractice");
  test("navigation back and forth", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    //await page.pause();
  })
  test.only('Handle the Hidden Elements in web', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    const nameInputField = page.getByPlaceholder('Hide/Show Example');
    await nameInputField.type("manish")
    expect(await nameInputField.inputValue()).toEqual("manish");
  });
});

