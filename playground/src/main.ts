import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Wrapper } from '@allen0118/core'
import { Foo } from '@allen0118/foo'

const instance = new Wrapper().use(Foo, { name: 'foo'})
console.log('instance: ', instance);

createApp(App).mount('#app')
