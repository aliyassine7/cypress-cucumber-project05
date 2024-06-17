class PaginationPage {
  /*Locators*/
  
  getHeading(heading) {
    // return cy.get('.is-size-3')
    switch (heading) {
      case "Pagination":
        return cy.get('.is-size-3')
      case "World City Populations 2022":
        return cy.get('#sub_heading')
      default:
        throw new Error(`Invalid heading!!`)
    }
  }

  getParagraph() {
    return cy.get('#content')
  }

  getButton(button) {
    switch (button) {
      case "Previous":
        return cy.get('#previous')
      case "Next":
        return cy.get('#next')
      default:
        throw new Error(`Invalid Button!!`)
    }
  }

  getContent() {
    return cy.get('#content')
  }

  getCityImage(city) { 
    // Selects the image by alt attribute 
    return cy.get(`img[alt="${city}"]`)
  }; 

  /*Methods*/
  clickNextUntilDisabled(button) {
    const clickNext = () => {
      this.getButton(button).then($nextButton => {
        if (!$nextButton.is(':disabled')) {
          this.getButton(button).click();
          clickNext();
        }
      });
    };

    clickNext();
  }
}

export default PaginationPage;