import { AbstractState } from "./AbstractState";
import { PauseState } from "./PauseState";

export class PlayState extends AbstractState {

  clickPlay(): void {
    if (this._player.isPausing()) {
      this._player.setState(new PlayState(this._player));
    }
  }

  clickNext(): void {
    this._player.setState(new PauseState(this._player));
  }

}
