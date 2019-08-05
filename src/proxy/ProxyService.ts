import { WebService } from "./WebService";

export interface IProxyService {
  getData(id: number): Promise<String>;
}

export class ProxyService implements IProxyService {

  private _webService: WebService;
  private _cache: Map<number, String>;

  constructor() {
    // Secretly wrap the sensitive WebService impl here
    // Can use Factory pattern to init WebService
    this._webService = new WebService("https://jsonplaceholder.typicode.com/todos/");
    this._cache = new Map();
  }

  public getData(id: number): Promise<String> {
    let data = this._cache.get(id);
    if (data) {
      return Promise.resolve("Getting from cache: " + data);
    }

    return this._webService.getData(id).then(json => {
      this._cache.set(id, JSON.stringify(json));
      return Promise.resolve("Fetched online: " + JSON.stringify(json));
    });
  }
}