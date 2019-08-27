import { AudioPlayer } from "./AudioPlayer";
import { PauseState } from "./PauseState";
import { PlayState } from "./PlayState";

/*
Strategy has 2 different implementations, the first is similar to State.
The difference is in binding times
(Strategy is a bind-once pattern, whereas State is more dynamic).

The implementation of the State pattern builds on the Strategy pattern.
The difference between State and Strategy is in the intent.
With Strategy, the choice of algorithm is fairly stable.
With State, a change in the state of the "context" object
causes it to select from its "palette" of Strategy objects.

States can some how uses|relates to each other
(e.g. a state can change the context to other state),
while Strategy is quite isolated.

Demo: https://refactoring.guru/design-patterns/state
An `AudioPlayer` has 2 states: playing, pausing
and 4 behaviours depend on each state:
  * clickPlay: is playing ? pause : play
  * clickNext: is playing ? go to next song, pause : go to next song, pause
*/

export const stateDemo = () => {
  let player = new AudioPlayer(1);
  player.setState(new PauseState(player));
  player.print();

  player.setState(new PlayState(player));
  player.print();

  player.next();
  player.print();
}
