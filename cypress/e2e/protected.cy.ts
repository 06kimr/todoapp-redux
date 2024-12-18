describe("protected", () => {
  it("로그인 전에는 로그인 페이지로 리다이렉트 되어야 한다.", () => {
    cy.visit("/protected");
    cy.url().should("include", "/login");
  });

  it("로그인 후에는 protected 페이지로 이동할 수 있어야 한다.", () => {
    cy.login({ username: "admin", password: "admin" });

    cy.url().should('include', '/')
    cy.findByRole('link', {name: 'admin'}).click();
    cy.url().should('include', '/protected')
  });
});
