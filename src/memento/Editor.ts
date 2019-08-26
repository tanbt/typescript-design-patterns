import { State } from "./State";
import { Snapshot } from "./Snapshot";
import { SnapshotManager } from "./SnapshotManager";

export class Editor {
  private _state: State;

  constructor(private _snapshotManager: SnapshotManager) { };

  public update(st: State): void {
    this._state = st;
    this.save();
  }

  private save(): void {
    this._snapshotManager.push(new Snapshot(this._state));
  }

  public undo(): void {
    const previousVersion = this._snapshotManager.pop();
    this._state = previousVersion.getState();
  }

  public print(): void {
    console.log(JSON.stringify(this._state));
  }
}