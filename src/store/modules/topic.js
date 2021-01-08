import { getData } from "../../api/Topic";
export default {
    state: {
        getData: {},
        TopicMain: []
    },
    actions: {
        async getTopicData({ commit }) {
            let topicData = await getData();
            commit('SETTOPICDATA', topicData)
        }
    },
    mutations: {
        SETTOPICDATA(state, topicData) {
            state.getData = topicData;
            state.TopicMain = topicData.TopicMain
        },
        SETTOPICMAIN(state, data) {
            state.TopicMain.unshift(data)
        }
    },
    getters: {
        TopicLeft(state) {
            return state.getData.TopicLeft
        },
        TopicRight(state) {
            return state.getData.TopicRight
        }
    }
}