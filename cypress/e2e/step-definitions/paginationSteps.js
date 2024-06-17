import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PaginationPage from "../pages/PaginationPage";
const paginationPage = new PaginationPage()

Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
});

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	paginationPage.getHeading(heading).should('have.text', heading)
});

Then(/^the user should see the "([^"]*)" paragraph$/, (paragraph) => {
	paginationPage.getParagraph().should('have.text', paragraph)
});

Then(/^the user should see the "([^"]*)" button is disabled$/, (button) => {
	paginationPage.getButton(button).should('be.disabled')
});

Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
	paginationPage.getButton(button).should('be.enabled')
});

When(/^the user clicks on the "([^"]*)" button$/, (button) => {
	paginationPage.getButton(button).click()
});

When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (button) => {
	paginationPage.clickNextUntilDisabled(button); 
});

Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
  const cityInfo = dataTable.hashes();
  
  // Validate the city info
  paginationPage.getContent().should('contain', cityInfo.City);
  paginationPage.getContent().should('contain', cityInfo.Country);
  paginationPage.getContent().should('contain', cityInfo.Population);
  
  // Validate the image by alt text
  paginationPage.getCityImage(city).should('be.visible');
});

