import Core from './core'

export class Wrapper extends Core {
  use<T extends Record<string, unknown>>(plugin: any, options: T) {
    if (!plugin.install || typeof plugin.install !== 'function') return
    plugin.install.call(this, options)
  }
}