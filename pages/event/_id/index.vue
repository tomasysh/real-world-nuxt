<template>
    <div>
        <h1>{{ event.title }}</h1>
    </div>
</template>

<script>
import eventService from '@/services/event.service';

export default {
  head() {
    return {
      title: `{ this.event.title }`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you need to know about event #${ this.event.title }`
        }
      ]
    }
  },
  async asyncData({ error, params }) {
    try {
      const { data } = await eventService.getEvent(params.id);
      return {
        event: data
      }
    } catch(e) {
      error({
        statusCode: 503,
        message: `Unable to fetch events #${ params.id }`
      })
    }
  },
}
</script>