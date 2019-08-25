import { IMediator } from "./Mediator";
import { Component } from "./Component";
import { TextField } from "./TextField";
import { Button } from "./Button";

export class LoginDialog implements IMediator {

  constructor(private _email: TextField, private _password: TextField, private _button: Button) {
    this._email.setParent(this);
    this._password.setParent(this);
    this._button.setParent(this);
  }

  notify(sender: Component, event: string): void {
    if (this.isSubmitButton(sender) && event === "click") {
      if (this._email.isValid() && this._password.isValid()) {
        console.log(`User ${this._email.content} is logged in.`);
      }
    }
  }

  private isSubmitButton(comp: Component) {
    return comp instanceof Button && (<Button>comp).isSubmit();
  }

}