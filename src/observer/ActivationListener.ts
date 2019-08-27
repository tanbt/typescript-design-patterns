import { EventListener } from "./EventListener";

export class ActivationListener extends EventListener {

  update(): void {
    console.log("Check for Editor activation...")
  }

}