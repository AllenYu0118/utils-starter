import { Wrapper } from '@allen0118/core';

export class Foo extends Wrapper {
  constructor() {
    super();
    console.log('Foo');
  }

  install() {
    console.log('Foo installed!')
  }

}