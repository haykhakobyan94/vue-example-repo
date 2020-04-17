---
to: "components/<%= dir!=='' ? dir + '/' : '/' %><%= h.changeCase.pascal(name) %>.vue"
---
<template>
	<div>
	</div>
</template>

<script>
export default {
	name: "<%= h.changeCase.pascal(name) %>",
	data() {
		return {
			text: "<%= h.changeCase.pascal(name) %> component"
		}
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>

</style>
