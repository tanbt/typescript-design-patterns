import { Editor } from "./Editor";
import { EventManager } from "./EventManager";
import { ActivationListener } from "./ActivationListener";
import { ContentValidationListener } from "./ContentValidationListener";
import { PersistListener } from "./PersistListener";

/*
Editor: the publisher | subject
EventManager: manage observers | subscribers

EventListener: interface of observers
  * ActivationListener on file opens
  * ContentValidationListener on file opens
  * PersistListener on file saves
*/

const editor: Editor = new Editor();
const em: EventManager = new EventManager();
editor.eventManager = em;

const al = new ActivationListener(editor);
const cvl = new ContentValidationListener(editor);
const pl = new PersistListener(editor);

em.subscribe(Editor.OPEN, al);
em.subscribe(Editor.OPEN, cvl);
em.subscribe(Editor.SAVE, pl);

export const observerDemo = () => {
  editor.openFile();
  console.log("");
  editor.saveFile();
}
