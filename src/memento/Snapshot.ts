import { State } from "./State";

export class Snapshot {
  constructor(private _state: State) { }

  public getState(): State {
    return this._state;
  }
}