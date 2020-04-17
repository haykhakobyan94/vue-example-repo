---
to: "tests/e2e/integration<%= dir!=='' ? dir + '/' : '/' %><%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.js"
---
/* eslint-disable no-undef */
describe('<%= h.changeCase.pascal(name) %>', () => {
	it('Посещение стартовой страницы', () => {
		cy.visit('/')
		cy.contains('Подписка на новостную рассылку')
	})

	it('Переход по ссылке - login', () => {
		cy.get('a.header__profile').click()
		cy.contains('Подписка на новостную рассылку')
	})
})
