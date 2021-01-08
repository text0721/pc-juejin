import axios from "axios"

const state = {
    navtag: []
};

const getters = {};

const actions = {
    async GetNavTag ( { commit }, id ) {
        let navtag = await axios( { baseURL: `/api/navtag?id=${ id }` } );
        commit( "GETNAVTAG", navtag )
    }
};

const mutations = {
    GETNAVTAG ( state, navtag ) {
        state.navtag = navtag.data
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};
