import { Component } from "./Component";

export class TextField extends Component {

  private _content: String;

  public get content() {
    return this._content;
  }

  public setContent(data: String) {
    this._content = data;
    super.dirty();
  }

  public isValid() {
    if (!this._content || this._content.length === 0) {
      console.log('TextField content must not empty.');
      return false;
    }
    return true;
  }
}