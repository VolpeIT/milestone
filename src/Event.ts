type EventFunction<T> = (param: T) => void

export class Event<T> {
  #listeners: EventFunction<T>[] = []

  invoke = (param: T) => {
    this.#listeners.forEach(listener => listener(param))
  }

  listen = (fn: EventFunction<T>) => {
    this.#listeners.push(fn)
  }

  remove = (fn: EventFunction<T>) => {
    this.#listeners = 
      this.#listeners.filter(func => func !== fn)
  }
}




