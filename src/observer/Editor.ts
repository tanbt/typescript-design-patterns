import { EventManager } from "./EventManager";

export class Editor {

  public static OPEN: string = "open";
  public static SAVE: string = "save";

  private _eventManager: EventManager;

  public set eventManager(em: EventManager) {
    this._eventManager = em;
  }

  public get content(): string {
    return "An example content"
  }

  public openFile(): void {
    console.log("File is opened in editor...");
    this._eventManager.notify(Editor.OPEN);
  }

  public saveFile(): void {
    console.log("File is saved in editor...");
    this._eventManager.notify(Editor.SAVE);
  }
}