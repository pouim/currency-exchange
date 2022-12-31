describe("test historical rate section", () => {
  beforeEach(() => {
    cy.clock(new Date("2022-12-30T00:00:00Z").getTime(), ["Date"]);
  });


  it("show historical rate in the table when select currencies", () => {
    cy.intercept("GET", "/symbols", {
      fixture: "symbols.json",
    }).as("allValidSymbols");

    cy.intercept(
      "GET",
      "/timeseries?start_date=2022-12-23&end_date=2022-12-30&base=USD&symbols=EUR",
      {
        fixture: "timeseries-usd-eur-7-days.json",
      }
    ).as("historicalRates7Days");

    cy.intercept(
      "GET",
      "/timeseries?start_date=2022-12-16&end_date=2022-12-30&base=USD&symbols=EUR",
      {
        fixture: "timeseries-usd-eur-14-days.json",
      }
    ).as("historicalRates14Days");

    cy.intercept(
      "GET",
      "/timeseries?start_date=2022-11-30&end_date=2022-12-30&base=USD&symbols=EUR",
      {
        fixture: "timeseries-usd-eur-30-days.json",
      }
    ).as("historicalRates30Days");

    cy.visit("/");

    cy.get('[data-test="historical-rate-table-empty-state"]').contains(
      "No Data!"
    );

    cy.get('[data-test="statistics-table-empty-state"]').contains("No Data!");

    cy.get('[data-test="from-field"]')
      .type("USD")
      .type("{downarrow}")
      .type("{enter}");

    cy.get('[data-test="to-field"]')
      .type("EUR")
      .type("{downarrow}")
      .type("{enter}");

    cy.get('[data-test="historical-table-body-row"]').should("have.length", 8);

    // test statistics
    cy.get('[data-test="lowest-rate"]').contains("0.937685");
    cy.get('[data-test="highest-rate"]').contains("0.941988");
    cy.get('[data-test="average-rate"]').contains("0.939272");

    cy.get('[data-test="duration-field"]').click();
    cy.get('[data-test="duration-list-item"]').eq(1).click();

    cy.get('[data-test="duration-field"]')
      .find("input")
      .should("have.value", "14");

    cy.get('[data-test="historical-table-body-row"]').should("have.length", 15);

    // test statistics
    cy.get('[data-test="lowest-rate"]').contains("0.937685");
    cy.get('[data-test="highest-rate"]').contains("0.944997");
    cy.get('[data-test="average-rate"]').contains("0.941105");

    cy.get('[data-test="duration-field"]').click();
    cy.get('[data-test="duration-list-item"]').eq(2).click();

    cy.get('[data-test="duration-field"]')
      .find("input")
      .should("have.value", "30");

    cy.get('[data-test="historical-table-body-row"]').should("have.length", 31);

    // test statistics
    cy.get('[data-test="lowest-rate"]').contains("0.936126");
    cy.get('[data-test="highest-rate"]').contains("0.960326");
    cy.get('[data-test="average-rate"]').contains("0.944940");
  });

  it("show historical rate in the chart mode when select currencies", () => {
    cy.intercept("GET", "/symbols", {
      fixture: "symbols.json",
    }).as("allValidSymbols");

    cy.intercept(
      "GET",
      "/timeseries?start_date=2022-12-23&end_date=2022-12-30&base=USD&symbols=EUR",
      {
        fixture: "timeseries-usd-eur-7-days.json",
      }
    ).as("historicalRates7Days");

    cy.visit("/");

    cy.get('[data-test="chart-mode-radio-button"]').click();

    cy.get('[data-test="history-chart-empty-state"]').contains("No Data!");

    cy.get('[data-test="from-field"]')
      .type("USD")
      .type("{downarrow}")
      .type("{enter}");

    cy.get('[data-test="to-field"]')
      .type("EUR")
      .type("{downarrow}")
      .type("{enter}");

    cy.get('[data-test="history-chart-empty-state"]').should('not.be', 'existed')
  });
});
