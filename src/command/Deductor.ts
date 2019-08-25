import { IHandler } from "./IHandler";
import { RequestData } from "./RequestData";

export class Deductor implements IHandler {

  private _data: RequestData;

  public setData(data: RequestData): void {
    this._data = data;
  }

  process(): void {
    console.log(`Deducted ${this._data.amount} from ${this._data.user}`);
  }

}