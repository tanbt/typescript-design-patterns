import { RequestData } from "./RequestData";
import { IHandler } from "./IHandler";

export class Command {
  constructor(private _data: RequestData, private _handler: IHandler) { };

  public execute() {
    this._handler.setData(this._data);
    this._handler.process();
  }
}