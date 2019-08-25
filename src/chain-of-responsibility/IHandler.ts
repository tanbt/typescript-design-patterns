import { Request } from "./Request";

export interface IHandler {

  setData(data: Request): void;

  process(): void;

  /**
   * @param handler
   *          the next handler
   */
  setNextHandler(handler: IHandler | null): void;

  /**
   * @param handler
   *          handler for unsuccessful case
   */
  //setFallbackHandler(handler: IHandler | null): void;
}