import axios from "axios";

const state = {
  bookDataList: [],
};
const actions = {
  async GetBookData({ commit }) {
    const bookDataList = await axios({ baseURL: `/api/getDataList` });
    commit("GET_BOOK_DATA", bookDataList);
  },
};
const mutations = {
  GET_BOOK_DATA(state, bookDataList) {
    state.bookDataList = bookDataList.data.data.data;
  },
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
