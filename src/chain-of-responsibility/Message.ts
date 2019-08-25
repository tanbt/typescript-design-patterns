import { IHandler } from "./IHandler";
import { Request } from "./Request";

export class MessageHandler implements IHandler {

  private _request: Request;

  // this method can be abstracetd
  setData(data: Request): void {
    this._request = data;
  }

  process(): void {
    console.log(`Successfully transferred: ${this._request.fromUser} -> ${this._request.toUser}: ${this._request.amount}`);
  }

  setNextHandler(handler: IHandler): void {
    throw new Error("Method not implemented.");
  }


}