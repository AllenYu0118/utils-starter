import { inject } from 'vue-demi'

export function useFoo () {
  return inject('foo');
}