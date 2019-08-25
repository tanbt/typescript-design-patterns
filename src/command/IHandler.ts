import { RequestData } from "./RequestData";

export interface IHandler {
  setData(data: RequestData): void;

  process(): void;
}