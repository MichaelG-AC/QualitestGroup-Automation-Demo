import { expect } from "@playwright/test";
import { extended as test } from "../fixtures/fixtures";
import { JobApplicationPage } from "../../page_objects/JobApplicationPage";

test.describe("Career Page search tests", () => {
  test("Users are able to find open QA/Automation positions in the careers search page", async ({
    page,
    careersPage,
    careersSearchPage,
    jobPostingPage,
  }) => {
    await careersPage.gotoCareersSearch();
    await careersSearchPage.searchForAJobByKeyword("Automation");
    await jobPostingPage.gotoFirstJobPostingForm();

    await expect(page.getByText("Automation").first()).toBeVisible();
  });

  test.skip("Verify Users are able to fill in job application", async ({
    careersPage,
    careersSearchPage,
    jobPostingPage,
    jobApplicationPage,
  }) => {
    await careersPage.gotoCareersSearch();
    await careersSearchPage.searchForAJobByKeyword("Automation");
    await jobPostingPage.gotoFirstJobPostingForm();
    await jobPostingPage.gotoJobApplicationPage();
    await jobApplicationPage.login();
    await jobApplicationPage.fillInJobApp();

    await expect(jobApplicationPage.applyButton).toBeVisible();
  });
});
