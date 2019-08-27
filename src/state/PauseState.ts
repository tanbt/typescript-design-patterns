import { AbstractState } from "./AbstractState";

export class PauseState extends AbstractState {

  clickPlay(): void {
    if (this._player.isPlaying()) {
      this._player.setState(new PauseState(this._player));
    }
  }

  clickNext(): void {
    // nothing
  }

}
