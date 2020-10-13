/// <reference types="cypress" />

context("Signup Module", () => {
  // Personal info
  context("Step: Personal info", () => {
    it("should display the form title", () => {
      cy.visit("localhost:3000/signup");
      cy.findByText(/Personal Info/i).should("exist");
    });

    it("should render the firstname and lastname fields", () => {
      cy.findByLabelText(/First name/i).as("firstName");
      cy.findByLabelText(/Last name/i).as("lastName");
      cy.get("@firstName").should("exist");
      cy.get("@firstName").should("have.attr", "type", "text");
      cy.get("@lastName").should("exist");
      cy.get("@lastName").should("have.attr", "type", "text");
    });

    it("shuold render two error messages when fields are empty", () => {
      cy.findByLabelText(/First name/i)
        .focus()
        .clear();
      cy.findByLabelText(/Last name/i)
        .focus()
        .clear();
      cy.get("body").click();
      cy.findByText(/firstName is a required field/i).should("exist");
      cy.findByText(/lastName is a required field/i).should("exist");
    });

    it("should disabled the next button", () => {
      cy.findByRole("button", { name: /Next/i }).should("be.disabled");
    });

    it("should type the fields, enable button and forward to the next page", () => {
      cy.findByLabelText(/First name/i).type("John");
      cy.findByText(/firstName is a required field/i).should("not.exist");
      cy.findByLabelText(/Last name/i).type("Doe");
      cy.findByText(/lastName is a required field/i).should("not.exist");
      cy.findByRole("button", { name: /Next/i }).click();
    });
  });
  // Security info
  context("Step: Security info", () => {
    it("should display the form title", () => {
      cy.findByText(/Security info/i).should("exist");
    });

    it("should render a button to visit previous page", () => {
      cy.findByRole("button", { name: /Previous/i }).as("previousBtn");
      cy.get("@previousBtn").click();
      cy.log("back to second step:");
      cy.findByRole("button", { name: /Next/i }).click();
    });

    it("should render the password an confirmation fields", () => {
      cy.findByLabelText("Password").as("password");
      cy.findByLabelText("Confirm Password").as("confirmPassword");
      cy.get("@password").should("exist");
      cy.get("@password").should("have.attr", "type", "password");
      cy.get("@confirmPassword").should("exist");
      cy.get("@confirmPassword").should("have.attr", "type", "password");
    });

    it("should render two error messages when fields are empty", () => {
      cy.findByLabelText("Password").focus().clear();
      cy.findByLabelText("Confirm Password").focus().clear();
      cy.get("body").click();
      cy.findByText("password is a required field").should("exist");
      cy.findByText("confirmPassword is a required field").should("exist");
    });

    it("should render an error message when password is less than 4 characters", () => {
      cy.findByLabelText("Password").type("123");
      cy.findByText("password must be at least 4 characters").should("exist");
    });

    it("should render an error message when password and confirm do not match", () => {
      cy.findByLabelText("Password").type("asdfgh");
      cy.findByLabelText("Confirm Password").type("123456");
      cy.findByText("Passwords must match").should("exist");
    });

    it("should disabled the next button", () => {
      cy.findByRole("button", { name: /Next/i }).should("be.disabled");
    });

    it("should type the fields, enable button and forward to the next page", () => {
      cy.findByLabelText("Password").clear().type("123456");
      cy.findByText("password is a required field").should("not.exist");
      cy.findByLabelText("Confirm Password").clear().type("123456");
      cy.findByText("confirmPassword is a required field").should("not.exist");
      cy.findByRole("button", { name: /Next/i }).click();
    });
  });
  // Address info
  context("Step: Address info", () => {
    it("should display the form title", () => {
      cy.findByText("Address Info").should("exist");
    });

    it("should render a button to visit previous page", () => {
      cy.findByRole("button", { name: /Previous/i }).as("previousBtn");
      cy.get("@previousBtn").click();
      cy.log("back to second step:");
      cy.findByRole("button", { name: /Next/i }).click();
    });

    it("should render the city and zipcode fields", () => {
      cy.findByLabelText("City").as("city");
      cy.findByLabelText("Zipcode").as("zipcode");
      cy.get("@city").should("exist");
      cy.get("@city").should("have.attr", "type", "text");
      cy.get("@zipcode").should("exist");
      cy.get("@zipcode").should("have.attr", "type", "text");
    });

    it("should render two error message when fields are empty", () => {
      cy.findByLabelText("City").focus().clear();
      cy.findByLabelText("Zipcode").focus().clear();
      cy.get("body").click();
      cy.findByText("city is a required field").should("exist");
      cy.findByText("It's an invalid format. Must be 5 or 9 digits").should(
        "exist"
      );
    });

    it("should render an error message when zipcode is invalid", () => {
      cy.findByLabelText("Zipcode").type("asdasdaasd123");
      cy.findByText("It's an invalid format. Must be 5 or 9 digits").should(
        "exist"
      );
    });

    it("should disabled the submit button", () => {
      cy.findByRole("button", { name: "Submit" }).should("be.disabled");
    });

    it("should type the fields, enable button and send form", () => {
      cy.findByLabelText("City").clear().type("Caracas");
      cy.findByText("city is a required field").should("not.exist");
      cy.findByLabelText("Zipcode").clear().type("28000");
      cy.findByText("It's an invalid format. Must be 5 or 9 digits").should(
        "not.exist"
      );
      cy.findByRole("button", { name: "Submit" })
        .click()
        .then(() => {
          cy.findByText("Registration successfully").should("exist");
        });
    });
  });
});
