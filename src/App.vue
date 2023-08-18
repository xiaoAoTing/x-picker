<script setup>
import { ref, reactive } from 'vue';

let list = ref([1, 2, 3]);
let show = ref(true);
let events = []

Object.assign(window, {
  setXpickerOptions(opts) {
    list.value.splice(0, list.value.length, ...opts);
  },
  setXpickerVisible(visible) {
    show.value = visible;
  },
  setXpickerOn(fn) {
    if (typeof fn !== 'function') {
      console.log('give a function, please.')
      return
    }

    events.push(fn)
  },
  setXpickerUnbind(fn) {
    if (fn) {
      const index = events.indexOf(fn);
      if (index !== -1) {
        events.splice(index, 1);
      }
    } else {
      events = [];
    }
  }
})

function confirm() {
  events.forEach(e => {
    typeof e === 'function' && e();
  })
}
</script>

<template>
  <div>
    <x-picker :list="list" v-model="show" @confirm="confirm"></x-picker>
    <!-- <button @click="xPickerValue = true">Show Picker ～</button> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
