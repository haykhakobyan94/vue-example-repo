export const actions = {
    login({ commit, dispatch }, { email, password }) {
        const params = new URLSearchParams()
        params.append('email', email)
        params.append('password', password)
        this.$axios.setHeader('Content-Type', 'application/x-www-form-urlencoded')
        return this.$auth.loginWith('local', { data: params })
    },

    async logout() {
        await this.$auth.logout()
    }
}
