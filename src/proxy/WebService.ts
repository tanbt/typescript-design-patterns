/**
 * https://jsonplaceholder.typicode.com/
 */
const fetch = require("cross-fetch");

export class WebService {

  constructor(private _url: string) { };

  public getData(id: number): Promise<String> {
    const url = this._url + id;
    return fetch(url)
      .then((res: Response) => {
        return res.json();
      });
  }

}