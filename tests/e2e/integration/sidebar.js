/* eslint-disable no-undef */
describe('Тест открытия и  закрытия ', () => {

	context('Просмотр на Iphone-6', function() {
		beforeEach(function() {
			cy.viewport('iphone-6')
		})

		it('Открытие Sidebar', () => {
			cy.visit('/')

			cy.get('.header .hamburger').click()
			cy.wait(900)
		})

		it('Закрытие Sidebar', () => {
			cy.get('.overlay').click('right', { force: true })
			cy.wait(900)
		})

	})

	context('Просмотр на ipad-2', function() {
		beforeEach(function() {
			cy.viewport('ipad-2')
		})

		it('Открытие Sidebar', () => {
			cy.visit('/')

			cy.get('.header .hamburger').click()
			cy.wait(900)
		})

		it('Закрытие Sidebar', () => {
			cy.get('.overlay').click('right', { force: true })
			cy.wait(900)
		})

	})

})
