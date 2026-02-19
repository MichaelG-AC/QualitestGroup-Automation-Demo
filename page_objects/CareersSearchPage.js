import { log } from "node:console";

export class CareersSearchPage {
  constructor(page) {
    this.page = page;

    this.searchByKeywordField = this.page.getByRole("textbox", {
      name: "Search by Keyword",
    });
    this.searchByLocationField = this.page.getByRole("textbox", {
      name: "Search by Location",
    });
    this.searchJobsButton = this.page.getByRole("button", {
      name: "Search Jobs",
    });
    this.jobTitleButton = this.page.getByRole("button", { name: "Job Title" });
    this.zeroPositionsMessage = this.page.getByText(
      "There are currently no open positions matching",
    );
  }

  async searchForAJobByKeyword(job) {
    await this.searchByKeywordField.fill(job);
    await this.searchJobsButton.click();
  }

  async searchForAJobByLocation(location) {
    await this.searchByLocationField.fill(location);
    await this.searchJobsButton.click();
  }
}
