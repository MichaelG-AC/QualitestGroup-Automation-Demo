import { test } from "@playwright/test";
import { CareersPage } from "../../page_objects/CareersPage";
import { CareersSearchPage } from "../../page_objects/CareersSearchPage";
import { JobPostingPage } from "../../page_objects/JobPostingPage";
import { JobApplicationPage } from "../../page_objects/JobApplicationPage";

export const extended = test.extend({
  careersPage: async ({ page }, use) => {
    await use(new CareersPage(page));
  },
  careersSearchPage: async ({ page }, use) => {
    await use(new CareersSearchPage(page));
  },
  jobPostingPage: async ({ page }, use) => {
    await use(new JobPostingPage(page));
  },
  jobApplicationPage: async ({ page }, use) => {
    await use(new JobApplicationPage(page));
  },
});
