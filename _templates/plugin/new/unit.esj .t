---
to: "tests/e2e/specs<%= dir!=='' ? dir + '/' : '/' %><%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.js"
---
import {
	<%= h.changeCase.pascal(name) %>
} from '../../plugins/<%= h.changeCase.pascal(name) %>'
const mountVue = require('../../..')

/* eslint-env mocha */
describe('Custom plugin <%= h.changeCase.pascal(name) %>', () => {
	const use = [<%= h.changeCase.pascal(name) %>]

	// extend Vue with plugins
	const extensions = {
		use
	}
	beforeEach(mountVue({}, {
		extensions
	}))

	it('registers global method on Vue instance', () => {
		cy.window().its('Vue').its('aPluginMethod').should('be.a', 'function')
	})

	it('can call this global function', () => {
		cy.window().its('Vue').invoke('aPluginMethod').should('equal', 'foo')
	})
})
