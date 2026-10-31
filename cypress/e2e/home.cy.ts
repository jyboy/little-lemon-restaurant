describe('The Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('sets the page title', () => {
    cy.title().should('eq', 'Little Lemon Restaurant');
  });

  it('shows a white focus outline on dark backgrounds', () => {
    cy.get('footer a').first().focus();
    cy.get('footer a')
      .first()
      .should('have.css', 'outline-color', 'rgb(255, 255, 255)');
    cy.get('header a').first().focus();
    cy.get('header a')
      .first()
      .should('have.css', 'outline-color', 'rgb(73, 94, 87)');
  });

  it('renders Header and Footer', () => {
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('renders the Main sections', () => {
    cy.get('section').should('have.length', 4);
  });

  it('renders logo and illustrations', () => {
    cy.get('[data-testid="header-logo"]')
      .invoke('prop', 'naturalWidth')
      .should('be.greaterThan', 0);
    cy.get('[data-testid="hero-illustration"]')
      .invoke('prop', 'naturalWidth')
      .should('be.greaterThan', 0);
  });

  it('navigates to Table Reservation from Hero', () => {
    cy.get('[data-testid="reserve"]').click();
    cy.url().should('include', '/table-reservation');
    cy.title().should('eq', 'Table Reservation | Little Lemon Restaurant');
    cy.get('[data-testid="reservation"]').should('have.attr', 'aria-current', 'page');
  });

  it('navigates to Table Reservation from Navbar', () => {
    cy.get('[data-testid="reservation"]').click();
    cy.url().should('include', '/table-reservation');
    cy.title().should('eq', 'Table Reservation | Little Lemon Restaurant');
    cy.get('[data-testid="reservation"]').should('have.attr', 'aria-current', 'page');
  });

  it('navigates to under-construction pages from Navbar', () => {
    cy.get('[data-testid="menu"]').click();
    cy.url().should('include', '/menu');
    cy.title().should('eq', 'Under Construction | Little Lemon Restaurant');
    cy.get('[data-testid="menu"]').should('have.attr', 'aria-current', 'page');

    cy.get('[data-testid="orderOnline"]').click();
    cy.url().should('include', '/order-online');
    cy.get('[data-testid="orderOnline"]').should('have.attr', 'aria-current', 'page');

    cy.get('[data-testid="login"]').click();
    cy.url().should('include', '/login');
    cy.get('[data-testid="login"]').should('have.attr', 'aria-current', 'page');
  });
});
