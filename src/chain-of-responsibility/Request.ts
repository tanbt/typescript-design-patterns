export class Request {

  constructor(private _fromUser: string, private _toUser: string, private _amount: number) { };

  public get fromUser() {
    return this._fromUser;
  }

  public get toUser() {
    return this._toUser;
  }

  public get amount() {
    return this._amount;
  }

}