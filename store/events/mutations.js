export default {
    SET_EVENTS(state, events) {
        state.events = [...events];
    },
    SET_EVENT(state, event) {
        state.event = { ...event };
    }
}