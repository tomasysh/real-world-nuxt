import eventService from "~/services/event.service";

export default {
    fetchEvents({ commit }) {
        return eventService.getEvents().then((res) => {
            commit('SET_EVENTS', res.data);
        })
    },
    fetchEvent({ commit }, id ) {
        return eventService.getEvent(id).then((res) => {
            commit('SET_EVENT', res.data)
        })
    }
}