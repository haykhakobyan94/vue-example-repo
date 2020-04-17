/* eslint-disable no-extra-boolean-cast */
export const state = () => ({
    counters: {
        "perfumes": null,
        "brands": null
    },
    loading: false
})

export const mutations = {
    counters(state, value) {
        state.counters = value;
    },
    loading(state, value) {
        state.loading = value;
    }
}

export const actions = {
    async getCounters({commit, state}) {

        if (!state.loading) {
            commit('loading', true);
            
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        "perfumes": 100,
                        "brands": 10202
                    });
                }, 1000);
            }).then((response) => {
                commit('counters', response);
            })
        }
    }
}
