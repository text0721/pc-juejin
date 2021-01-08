import axios from "axios";
// import {reqBookList} from "../../api/book"
const state = {
  bookDataList: [],
  // bookList:[]
 
};
const actions = {
  async GetBookData({ commit }) {
    const bookDataList = await axios({ baseURL: `/api/getDataList` });
    commit("GET_BOOK_DATA", bookDataList);
  },
 
  // async getBook({commit},data={}){
  //   const bookList=await reqBookList(data);
  //   commit("GET_BOOK",bookList)
  // }
};
const mutations = {
  GET_BOOK_DATA(state, bookDataList) {
    // console.log(bookDataList.data.data);
    state.bookDataList = bookDataList.data.data.data;
  },
 
  // GET_BOOK(state,bookList){
  //   state.bookList=bookList.data
  // }
};
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
