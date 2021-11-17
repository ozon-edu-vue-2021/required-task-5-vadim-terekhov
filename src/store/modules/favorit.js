export default {
    state: {
        favorit: [],
    },
    getters: {
        getFavorit(state){
            return state.favorit;
        }
    },
    mutations: {
        addToFavorit(state,favoritItem){
            state.favorit.push(favoritItem);
        }
    },
    actions: {
        addToFavorit({commit},favoritItem){
            commit('addToFavorit', favoritItem);
        },
    }
}