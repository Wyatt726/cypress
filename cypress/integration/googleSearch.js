describe("Google Search", () => {
    it("loads Search page", () => {
        cy.visit("https://google.com");
    });

    it ("Search for 'North Carolina Surfing", () => {
      cy.get('input[name="q"]').type("North Carolina Surfing{enter}");
    });

    it("get all search results", () => {
        cy.get("#search a").invoke("attr", "href").then(href => console.log(href));
    
    });
    
    it("click next ten times", () => {
    for(let n = 0; n < 9; n ++){
        cy.get('[style="display:block;margin-left:53px"]')
          .click()
      };
    });
});
