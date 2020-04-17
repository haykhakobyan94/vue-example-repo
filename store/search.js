export const state = () => ({
    searchData: {
        news: [],
        perfumes: [],
        brands: []
    },
    showResults: false,
    errorMessage: {}
})

export const mutations = {
    searchData(state, value) {
        state.searchData = value
        state.showResults = true
        state.errorMessage = {}
    },
    unsetSearchData(state, value){
        state.searchData = {
            news: [],
            perfumes: [],
            brands: []
        }
        state.showResults = false
        state.errorMessage = {}
    },
    setErrorMessage(state, value){
        state.errorMessage = value
        state.showResults = true
    }
}

export const actions = {
    async search({ commit, state }, phrase) {
        await this.$axios.get(`/services/search?phrase=${phrase}&sections=perfumes,brands,articles,news`, { headers: { "Authorization": "Basic " + btoa("aromodev:aromodev") } })
            .then(response => {
                commit('searchData', response.data)
            })
            .catch(error => {
                commit('setErrorMessage', error.response.data)
            });
    }
}