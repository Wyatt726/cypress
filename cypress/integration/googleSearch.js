describe("Google Search", () => {

    const searchResults = [];
    
   
  it("loads Search page", () => {
        cy.visit("https://google.com");
    });

    it ("Search", () => {
      cy.get('input[name="q"]').invoke('val', 'North Carolina Surfing');
      cy.get('.FPdoLc > center > .gNO89b')
        .click()
      cy.wait(300)
    });

    it("get all search results", () => {
        cy.get("#search").find("a").each($a => searchResults.push($a));
    });
    console.log(searchResults);

    it("run ten pages", () => {
    for(let n = 0; n < 9; n ++){
        cy.get('[style="display:block;margin-left:53px"]')
         .click()
     };
    });
});
