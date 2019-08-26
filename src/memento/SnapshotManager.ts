import { Snapshot } from "./Snapshot";

export class SnapshotManager {
  private _snapshots: Snapshot[] = [];

  public push(sn: Snapshot):void {
    this._snapshots.push(sn);
  }

  public pop(): Snapshot {
    return this._snapshots.pop();
  }
}