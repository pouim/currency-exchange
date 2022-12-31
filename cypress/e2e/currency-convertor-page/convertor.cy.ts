describe("test convertor section", () => {
  it("ui test", () => {
    cy.visit("/").wait(500);

    cy.get('[data-test="currency-convertor-tab"]').should("have.length", 1);
    cy.get('[data-test="conversion-history-tab"]').should("have.length", 1);

    cy.get('[data-test="currency-convertor-page"]').should("have.length", 1);
    cy.get('[data-test="convertor-page-title"]').contains("I want to convert");

    cy.get('[data-test="amount-field"]').should("have.length", 1);
    cy.get('[data-test="from-field"]').should("have.length", 1);
    cy.get('[data-test="to-field"]').should("have.length", 1);
    cy.get('[data-test="toggle-currencies-button"]').should("have.length", 1);
    cy.get('[data-test="convert-button"]').should("have.length", 1);
    cy.get('[data-test="conversion-result-wrapper"]')
      .should("have.length", 1)
      .contains("No Data");
  });

  it("should convert amount of 3500 from usd to eur and show the result", () => {
    cy.intercept("GET", "/symbols", {
      fixture: "symbols.json",
    }).as("allValidSymbols");

    cy.intercept("GET", "/convert?from=USD&to=EUR&amount=3500&places=6", {
      fixture: "convert-3500-usd-eur.json",
    }).as("conversionResponse");

    cy.visit("/");
    
    // convert the currencies
    cy.convert("USD", "EUR", 3500);

    // test the conversion result
    cy.get('[data-test="conversion-result-info"]').contains(
      "3500 USD = 3282.495234 EUR"
    );

    cy.get('[data-test="conversion-rate-from-info"]').contains(
      "1 USD = 0.937856"
    );

    cy.get('[data-test="conversion-rate-to-info"]').contains(
      "1 EUR = 1.066262 USD"
    );
  });

  it("test toggle currency button", () => {
    cy.visit("/");

    cy.get('[data-test="from-field"]')
      .type("USD")
      .type("{downarrow}")
      .type("{enter}");

    cy.get('[data-test="to-field"]')
      .type("EUR")
      .type("{downarrow}")
      .type("{enter}");

    cy.get('[data-test="toggle-currencies-button"]').click();

    cy.get('[data-test="from-field-input"]')
      .find("input")
      .should("have.value", "EUR");
    cy.get('[data-test="to-field-input"]')
      .find("input")
      .should("have.value", "USD");

    cy.get('[data-test="toggle-currencies-button"]').click();

    cy.get('[data-test="from-field-input"]')
      .find("input")
      .should("have.value", "USD");
    cy.get('[data-test="to-field-input"]')
      .find("input")
      .should("have.value", "EUR");
  });
});
