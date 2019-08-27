import { EventListener } from "./EventListener";

export class EventManager {

  private _map: Map<string, EventListener[]> = new Map();

  public notify(eventType: string) {
    const listeners: EventListener[] = this._map.get(eventType);
    listeners.forEach(l => l.update());
  }

  public subscribe(eventType: string, el: EventListener) {
    let listeners: EventListener[] = this._map.get(eventType);
    if (!listeners || listeners.length == 0) {
      listeners = [];
    }
    listeners.push(el);
    this._map.set(eventType, listeners);
  }
}