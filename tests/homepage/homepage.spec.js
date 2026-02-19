import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";

test.describe("Home Page Tests", () => {
  test("Users are able to load the home page", async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await expect(homePage.achieveHeader).toBeVisible();
    await expect(homePage.topInsightsHeader).toBeVisible();
  });
});
