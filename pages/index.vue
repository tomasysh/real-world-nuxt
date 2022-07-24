<template>
  <div>
    <h1>Events</h1>
    <EventCard 
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';

export default {
  head() {
    return {
      title: 'Event Listing',
    }
  },
  components: {
    EventCard
  },
  async fetch({ store, error}) {
    try {
      await store.dispatch('events/fetchEvents');
    } catch(e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },
  // asyncData({ $axios, error }) {
  //   return $axios.get('http://localhost:3000/events')
  //     .then((res) => {
  //       return {
  //         events: res.data
  //       }
  //     })
  //     .catch((e) => {
  //       error({ 
  //         statusCode: 503, 
  //         message: 'Unable to fetch events at this time. Please try again.'
  //       })
  //     });
  // }
  // computed: mapState({
  //   events: state => state.events.events
  // })
  computed: {
    ...mapState('events', ['events'])
  }
}
</script>
