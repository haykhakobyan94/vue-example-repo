<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'Logout',
    mounted() {
        this.logout()
    },
    methods: {
        async logout() {
            await this.$store.dispatch('users/logout')
        }
    }
}
</script>
