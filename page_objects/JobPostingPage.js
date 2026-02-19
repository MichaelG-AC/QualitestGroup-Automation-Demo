export class JobPostingPage {
  constructor(page) {
    this.page = page;

    this.applyNowButtonDropDown = this.page
      .getByRole("button", { name: "Apply now" })
      .first();
    this.applyNowMenuItem = this.page.getByRole("menuitem", {
      name: "Apply Now",
    });
    this.firstJobLink = this.page.locator(".jobTitle-link").first();

    this.emailAddressField = this.page.getByRole("textbox", {
      name: "Email Address:",
    });
    this.retypeEmailAddressField = this.page.getByRole("textbox", {
      name: "Retype Email Address:",
    });
    this.passwordField = this.page.getByRole("textbox", {
      name: "Choose Password:",
    });
    this.retypePasswordField = this.page.getByRole("textbox", {
      name: "Retype Password:",
    });
    this.firstNameField = this.page.getByRole("textbox", {
      name: "First Name:",
    });
    this.lastNameField = this.page.getByRole("textbox", {
      name: "Last Name:",
    });
    this.countryCodeField = this.page.getByRole("button", {
      name: "Country/Region Code:",
    });
    this.phoneNumberField = this.page.getByRole("button", {
      name: "Phone Number:",
    });
    this.howDidYouHearField = this.page.getByRole("button", {
      name: "How did you hear about this job?",
    });
    this.countryResidenceField = this.page.getByRole("button", {
      name: "Country/Region of Residence:",
    });
    this.jobNotificationCheckBox = this.page.getByRole("checkbox", {
      name: "Receive new job posting notifications",
    });
    this.hearMoreCheckBox = this.page.getByRole("checkbox", {
      name: "Hear more about career opportunities",
    });
    this.applyButton = this.page.getByRole("button", { name: "Apply" });
  }

  async gotoFirstJobPostingForm() {
    await this.firstJobLink.click();
  }

  async matchingKeyword(keyword) {
    return await this.page.getByText(keyword);
  }
}
