export class HomePage {
  constructor(page) {
    this.page = page;

    this.achieveHeader = this.page.getByRole("heading", {
      name: "What do you want to achieve?",
    });
    this.topInsightsHeader = this.page.getByRole("heading", {
      name: "Top insights",
    });
    this.careersButton = this.page.getByRole("link", { name: "Careers" });
  }

  async goto() {
    await this.page.goto("/");
  }
}
