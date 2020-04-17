---
to: "plugins/<%= h.changeCase.camel(name) %>.js"
---
<%= h.changeCase.pascal(name) %>.install = function(Vue, options) {
	// 1. add global method or property
	Vue.<%= h.changeCase.camel(name) %> = function() {

	}

	// 2. add a global asset
	Vue.directive('<%= h.changeCase.kebab(name) %>', {
		bind(el, binding, vnode, oldVnode) {

		}
	})

	// 3. inject some component options
	Vue.mixin({
		created() {

		}
	})

	// 4. add an instance method
	Vue.prototype.$<%= h.changeCase.camel(name) %> = function(methodOptions) {

	}
}
