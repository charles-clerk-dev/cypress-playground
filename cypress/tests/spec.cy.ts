describe("template spec", () => {
  it("passes SignUp", () => {
    cy.signUp();
  });
  it("passes SignIn", () => {
    cy.signIn();
  });
});
