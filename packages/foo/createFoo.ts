import { Wrapper } from '@allen0118/core';

export class Foo extends Wrapper {
  constructor(options) {
    console.log('options: ', options);
    super();
    console.log('Foo');
  }

  install(app) {
    app.provide('foo', this)
    console.log('Foo installed!', app)
  }

}
export function createFoo(options) {
  return new Foo(options);
}