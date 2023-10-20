it("loads splash page", () => {
  const page = cy.visit("/");
  page
    .get("title")
    .should("have.text", "Benefit Newsfeed | (FR) Benefit Newsfeed");
});

it("can navigate to home page in english", () => {
  const page = cy.visit("/");
  page.get("a").contains("English").click();
  page.url().should("equal", Cypress.config().baseUrl + "/en");
});

it("can navigate to home page in french", () => {
  const page = cy.visit("/");
  page.get("a").contains("Français").click();
  page.url().should("equal", Cypress.config().baseUrl + "/fr");
});
