---
to: "test/e2e/integration/<%= name %>-spec.js"
---
import MessageList from '../../../components/<%= dir!=='' ? dir + '/' : '/' %><%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue'
const mountVue = require('../../..')

// common utils for MessageList
const getItems = () => cy.get('ul li')

/* eslint-env mocha */
describe('Global components', () => {
	// two different components, each gets "numbers" list
	// into its property "messages"
	const template = `
    <div>
      <message-list :messages="numbers"/>
      <a-list :messages="numbers"/>
    </div>
  `
	// our top level data
	const data = () => ({
		numbers: ['uno', 'dos']
	})
	// register same component globally under different names
	const components = {
		'message-list': MessageList,
		'a-list': MessageList
	}
	// extend Vue with global components
	const extensions = {
		components
	}
	beforeEach(mountVue({
		template,
		data
	}, {
		extensions
	}))

	it('registers global component', () => {
		cy
			.window()
			.its('Vue')
			.invoke('component', 'message-list')
			// returns component constructor
			// so we can compare with our component's constructor (Ctor)
			.should('equal', MessageList._Ctor[0])
	})

	it('shows two items at the start in both lists', () => {
		getItems().should('have.length', 4)
	})
})
