type Subscription<S> = (state: S) => void

export abstract class Ploc<S> {
  private internalState: S
  private listeners: Subscription<S>[] = []

  constructor(initialState: S) {
    this.internalState = initialState
  }

  public get state(): S {
    return this.internalState
  }

  changeState(state: S): void {
    this.internalState = state

    if (this.listeners.length > 0) {
      this.listeners.forEach((listener) => listener(state))
    }
  }

  subscribe(listener: Subscription<S>): void {
    this.listeners.push(listener)
  }

  unsubscribe(listener: Subscription<S>): void {
    const index = this.listeners.indexOf(listener)

    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }
}
