export default {
    state: {
        favorit: [],
    },
    getters: {
        Favorit(state){
            return state.favorit;
        }
    },
    mutations: {
        addToFavorit(state,favoritItem){
            state.favorit.push(favoritItem);
        },
        removeFromFavorit(state,favoritItemId){
            state.favorit = state.favorit.filter( i => i.id !== favoritItemId);
        }
    },
    actions: {
        addToFavorit({commit},favoritItem){
            commit('addToFavorit', favoritItem);
        },
        removeFromFavorit({commit, dispatch},favoritItemId){
            commit('removeFromFavorit',favoritItemId);
            dispatch('changeFavorit',favoritItemId);
        },
    }
}