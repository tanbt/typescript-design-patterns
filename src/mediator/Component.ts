import { IMediator } from "./Mediator";

// All Components can also be mediators.
// This example assume only Dialog is a mediator.
export class Component {

  protected _med: IMediator;

  public setParent(parent: IMediator) {
    this._med = parent;
  }

  click(): void {
    this._med.notify(this, 'click');
  }

  // e.g textfield content is changed
  dirty(): void {
    this._med.notify(this, 'dirty');
  }
}
