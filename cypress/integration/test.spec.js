/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Get content', () => {
    cy.get('.content')
  })

  it('test favorites', function () {
    cy.get('[data-row-key="0"] > :nth-child(5) > .ant-btn > a').click()
    cy.get('.fav-button > svg').click()
    cy.get('.back-button').click()
    cy.get('.ant-menu > :nth-child(4) > a').click()
    cy.get('.ant-table-row > :nth-child(1) > a').click()
    cy.get('.fav-button > svg').click()
    cy.get('.back-button').click()
    cy.get(':nth-child(2) > .nuxt-link-active').click()
  })

  it('test filters planet', function () {
    cy.get(
      ':nth-child(2) > .ant-select-selection > .ant-select-selection__rendered'
    ).click()
    cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
    cy.get(
      '.ant-select-focused > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value'
    ).click()
    cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
  })

  it('test filters moons', function () {
    cy.get(
      ':nth-child(3) > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value'
    ).click()
    cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
    cy.get(
      '.ant-select-focused > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value'
    ).click()
    cy.get('.ant-select-dropdown-menu > :nth-child(3)').click()
    cy.get(
      '.ant-select-focused > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection-selected-value'
    ).click()
    cy.get('.ant-select-dropdown-menu > :nth-child(1)').click()
  })
})
