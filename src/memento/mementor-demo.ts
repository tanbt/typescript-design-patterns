import { State } from "./State";
import { Editor } from "./Editor";
import { SnapshotManager } from "./SnapshotManager";

/*
State: the Editor's state|data to save/restore
Editor: the Originator
Snapshot: the Memento, wrap the editor state
SnapshotManager: manage snapshots
*/

const st1: State = {
  content: "first content",
  cursorX: 123,
  cursorY: 234
}

const st2: State = {
  content: "second content",
  cursorX: 456,
  cursorY: 789
}

export const mementoDemo = () => {
  let snapshotManager: SnapshotManager = new SnapshotManager();
  let textEditor: Editor = new Editor(snapshotManager);
  textEditor.update(st1);
  textEditor.print();
  textEditor.update(st2);
  textEditor.print();

  console.log("---- undoing ----");
  textEditor.undo();
  textEditor.print();
  textEditor.undo();
  textEditor.print();
}

