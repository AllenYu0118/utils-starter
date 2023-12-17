import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Wrapper } from '@allen0118/core'
import { createFoo } from '@allen0118/foo'

const foo = createFoo({ name: 'foo' })

const app = createApp(App)

const instance = app.use(foo)
console.log('instance: ', instance);

app.mount('#app')
