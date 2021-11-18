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
        },
        removeFromFavorit(state,favoritItem){
            state.favorit = state.favorit.filter( i => i.id !== favoritItem.id);
        }
    },
    actions: {
        addToFavorit({commit},favoritItem){
            commit('addToFavorit', favoritItem);
        },
        removeFromFavorit({commit, dispatch},favoritItem){
            commit('removeFromFavorit',favoritItem);
            dispatch('changeFavorit',favoritItem);
        },
    }
}