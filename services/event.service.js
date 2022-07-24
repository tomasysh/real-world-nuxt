import { http } from './httpClient';

export default {
    getEvents() {
        return http.get('/events');
    },
    getEvent(id) {
        return http.get(`/events/${ id }`);
    }
}