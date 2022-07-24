<template>
    <div id="app">
        <NavBar />
        <nuxt />
    </div>
</template>

<script>
import NavBar from '~/components/Navbar.vue';

export default {
    components: {
        NavBar
    },
    head() {
        return {
            titleTemplate: '%s - Real World Events',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Where you can find all the events taking place in your neighborhood'
                }
            ]
        }
    }
}
</script>
