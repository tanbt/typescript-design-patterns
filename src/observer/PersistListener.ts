import { EventListener } from "./EventListener";

export class PersistListener extends EventListener {
  update(): void {
    console.log("Persist Listener: file is persisted.");
  }

}