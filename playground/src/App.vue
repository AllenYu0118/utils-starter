<script setup lang="ts">
import Foo from './Foo.vue'
import { Wrapper } from '@allen0118/core'
import { barObject } from '@allen0118/bar'

const wrapper = new Wrapper()
wrapper.use(barObject, { name: 'Allen' })

</script>

<template>
  <h1>Playground</h1>
  <Foo />

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
