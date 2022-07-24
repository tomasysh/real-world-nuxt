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
import EventCard from '@/components/EventCard.vue';
import eventService from '@/services/event.service';

export default {
  head() {
    return {
      title: 'Event Listing',
    }
  },
  components: {
    EventCard
  },
  async asyncData({ error}) {
    try {
      const { data } = await eventService.getEvents();
      return {
        events: data
      }
    } catch(e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  }
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
}
</script>
