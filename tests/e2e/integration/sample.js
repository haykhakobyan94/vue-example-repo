/* eslint-disable no-undef */
describe('Sample tests', () => {
	it('Посещение стартовой страницы', () => {
		cy.visit('/')
		cy.contains('Подписка на новостную рассылку')
	})

	it('Переход по ссылке - login', () => {
		cy.get('a.header__profile').click()
		cy.contains('Подписка на новостную рассылку')
	})
})
