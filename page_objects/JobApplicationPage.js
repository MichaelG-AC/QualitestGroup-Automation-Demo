import { faker } from "@faker-js/faker";

export class JobApplicationPage {
  constructor(page) {
    this.page = page;

    this.firstNameField = this.page.getByRole("textbox", {
      name: "First Name",
    });
    this.lastNameField = this.page.getByRole("textbox", { name: "Last Name" });
    this.emailField = this.page.getByRole("textbox", { name: "Email" });
    this.phoneNumberField = this.page.getByRole("textbox", {
      name: "Primary Phone",
    });
    this.howDidYouHearField = this.page.getByRole("combobox", {
      name: "How did you hear about this job?",
    });
    this.applyButton = this.page.getByRole("button", { name: "Apply" });
    this.saveButton = this.page.getByRole("button", { name: "Save" });
    this.viewProfileButton = this.page.getByRole("button", {
      name: "View Profile",
    });
    this.expandAllSectionsButton = this.page.getByRole("button", {
      name: "Expand all sections",
    });

    this.loginEmailField = this.page.getByRole("textbox", {
      name: "Email Address:",
    });
    this.passwordField = this.page.getByRole("textbox", { name: "Password:" });
    this.signInButton = this.page.getByRole("button", { name: "Sign In" });
    this.alreadyAUserButton = this.page.getByRole("link", {
      name: "Please sign in",
    });
  }

  async login() {
    if (await this.alreadyAUserButton.isVisible()) {
      await this.alreadyAUserButton.click();
    }
    await this.loginEmailField.click();
    await this.loginEmailField.fill(process.env.EMAIL);
    await this.passwordField.click();
    await this.passwordField.fill(process.env.PASSWORD);
    await this.signInButton.click();
  }

  async fillInJobApp() {
    if (!(await this.expandAllSectionsButton.isVisible())) {
      await this.expandAllSectionsButton.click();
      await this.firstNameField.click();
      await this.firstNameField.fill(faker.person.firstName());
    }

    await this.lastNameField.click();
    await this.lastNameField.fill(faker.person.lastName());

    await this.emailField.click();
    await this.emailField.fill(faker.internet.email());

    await this.phoneNumberField.click();
    await this.phoneNumberField.fill(faker.phone.number());

    await this.howDidYouHearField.click();
    await this.page.getByRole("option", { name: "Agency" }).click();
  }
}
