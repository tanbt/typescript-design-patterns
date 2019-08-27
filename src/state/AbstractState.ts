import { AudioPlayer } from "./AudioPlayer";

export abstract class AbstractState {
  constructor(protected _player: AudioPlayer) {};
  abstract clickPlay(): void;
  abstract clickNext(): void;
}