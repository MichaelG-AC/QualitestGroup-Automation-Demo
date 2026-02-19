export class CareersPage {
  constructor(page) {
    this.page = page;

    this.careersButton = this.page
      .getByLabel("Sub Menu")
      .getByRole("link", { name: "Careers" });
    this.exploreJobsButton = this.page.getByRole("link", {
      name: "Explore jobs",
    });
  }

  async gotoCareersSearch() {
    await this.page.goto("/");
    await this.careersButton.click();
    await this.exploreJobsButton.click();
  }
}
