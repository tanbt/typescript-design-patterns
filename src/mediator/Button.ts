import { Component } from "./Component";

export enum ButtonType {
  SUBMIT
}

export class Button extends Component {
  constructor(private _type: ButtonType) {
    super();
  };

  public isSubmit(): boolean {
    return this._type === ButtonType.SUBMIT;
  }
}