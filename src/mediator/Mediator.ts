import { Component } from "./Component";

export interface IMediator {
  notify(sender: Component, event: string): void;
}
