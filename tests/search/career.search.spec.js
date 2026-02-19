import { test, expect } from "@playwright/test";
import { CareersPage } from "../../page_objects/CareersPage";
import { CareersSearchPage } from "../../page_objects/CareersSearchPage";
import { JobPostingPage } from "../../page_objects/JobPostingPage";

test.describe("Career Page search tests", () => {
  test("Users are able to find open QA/Automation positions in the careers search page", async ({
    page,
  }) => {
    const careersPage = new CareersPage(page);
    const careersSearchPage = new CareersSearchPage(page);
    const jobPostingPage = new JobPostingPage(page);

    await careersPage.gotoCareersSearch();
    await careersSearchPage.searchForAJobByKeyword("Automation");
    await jobPostingPage.gotoFirstJobPostingForm();

    await expect(page.getByText("Automation").first()).toBeVisible();
  });
});
