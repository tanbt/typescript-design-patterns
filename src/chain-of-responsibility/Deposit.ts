import { IHandler } from "./IHandler";
import { Request } from "./Request";

export class DepositHandler implements IHandler {

  private _request: Request;
  private _nextHandler: IHandler;

  setData(data: Request): void {
    this._request = data;
  }

  process(): void {
    console.log(`${this._request.toUser} account is deposited by ${this._request.amount}.`);
    this._nextHandler.process();
  }

  // this method can be abstracted
  setNextHandler(handler: IHandler): void {
    this._nextHandler = handler;
    this._nextHandler.setData(this._request);
  }

}