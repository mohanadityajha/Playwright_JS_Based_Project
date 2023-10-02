const { test, expect, request } = require("@playwright/test")
const loginPayload = { "userEmail": "anshika@gmail.com", "userPassword": "Iamking@000" }

let token;

test.beforeAll(async () => {

  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
    data: loginPayload
  });
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  const token = loginResponseJson.token;
});


test("Login API Test Page", async ({ page }) => {
  page.addInitScript(value => {
    window.localStorage.setItem("token", value);
  }, token)
  const email = "";
  const productName = "Zara Coat 4";
  await page.goto("https://rahulshettyacademy.com/client/");
});

