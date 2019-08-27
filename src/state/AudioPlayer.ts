import { AbstractState } from "./AbstractState";
import { PlayState } from "./PlayState";
import { PauseState } from "./PauseState";

export class AudioPlayer {
  private _state: AbstractState;

  constructor(private _currentSong: number = 0) { };

  public setState(st: AbstractState): void {
    this._state = st;
  }

  public isPlaying(): boolean {
    return this._state instanceof PlayState;
  }

  public isPausing(): boolean {
    return this._state instanceof PauseState;
  }

  public next(): void {
    this._currentSong++;
    this._state.clickNext();
  }

  public print(): void {
    console.log(`Player is ${this.isPlaying() ? 'playing' : 'pausing'} at song number ${this._currentSong}.`);
  }
}
