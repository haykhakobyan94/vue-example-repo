// import Vue from 'vue'
// const VueTouch = require('vue-touch')
// Vue.use(VueTouch, { name: 'v-touch' })

import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
    swipeTolerance: 20
})