import { IHandler } from "./IHandler";
import { Request } from "./Request";

export class DeductHandler implements IHandler {

  private _nextHandler: IHandler;
  private _request: Request;

  setData(data: Request): void {
    this._request = data;
  }

  process(): void {
    console.log(`${this._request.fromUser} account is deducted by ${this._request.amount}.`);
    this._nextHandler.process();
  }

  setNextHandler(handler: IHandler): void {
    this._nextHandler = handler;
    this._nextHandler.setData(this._request);
  }

}
