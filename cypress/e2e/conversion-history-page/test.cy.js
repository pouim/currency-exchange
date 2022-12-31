describe("test conversion history section", () => {
  it("test the logic", () => {
    cy.intercept("GET", "/symbols", {
      fixture: "symbols.json",
    }).as("allValidSymbols");

    cy.intercept("GET", "/convert?from=USD&to=EUR&amount=3500&places=6", {
      fixture: "convert-3500-usd-eur.json",
    }).as("conversionResponse");

    cy.visit("/").wait(500);

    // go to conversion history page
    cy.get('[data-test="conversion-history-tab"]').click();

    // should show empty state
    cy.get('[data-test="conversion-history-table-empty-state"]').should(
      "have.length",
      1
    );

    // go back to currency convertor page
    cy.get('[data-test="currency-convertor-tab"]').click();

    // execute 3 conversion
    cy.convert("USD", "EUR", 3500);
    cy.convert("USD", "EUR", 1500);
    cy.convert("USD", "EUR", 200);

    // go to conversion history page
    cy.get('[data-test="conversion-history-tab"]').click();

    //it should be 3 items added to the table
    cy.get('[data-test="conversion-history-table-row"]').should(
      "have.length",
      3
    );

    // delete the first element
    cy.get('[data-test="conversion-history-table-row"]')
      .eq(0)
      .find('[data-test="delete-action-button"]')
      .click();

    //it should be 2 items left
    cy.get('[data-test="conversion-history-table-row"]').should(
      "have.length",
      2
    );

    // click on view button on next item
    cy.get('[data-test="conversion-history-table-row"]')
      .eq(0)
      .find('[data-test="view-action-button"]')
      .click();

    // check url query params
    cy.location().then((location) => {
      expect(location.search).to.equal(
        "?fromSymbol=USD&toSymbol=EUR&amount=1500"
      );
    });

    // check the inputs
    cy.get('[data-test="from-field"]')
      .find("input")
      .should("have.value", "USD");
    cy.get('[data-test="to-field"]').find("input").should("have.value", "EUR");
  });
});
