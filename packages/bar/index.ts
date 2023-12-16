import { Wrapper } from '@allen0118/core';

export class Bar extends Wrapper {
  constructor() {
    super();
    console.log('Bar');
  }

  install () {
    console.log('installed!')
  }

}