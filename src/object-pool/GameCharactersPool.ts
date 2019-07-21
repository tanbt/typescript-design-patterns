import { GameCharacter } from "../factory/GameCharacter";
import { GameCharacterFactory } from "../factory/GameCharacterFactory";

export class GameCharactersPool {
  private _warriorsPool: GameCharacter[] = [];
  private _magesPool: GameCharacter[] = [];

  static WARRIORS_POOL_SIZE = 30;
  static MAGES_POOL_SIZE = 20;

  constructor(private level: number) {
    this.loadWarriorsPool(level);
    this.loadMagesPool(level);
  }

  private loadWarriorsPool(level: number): void {
    for (let i = 0; i < GameCharactersPool.WARRIORS_POOL_SIZE; i++) {
      this._warriorsPool.push(GameCharacterFactory.getWarrior(level));
    }
  }

  private loadMagesPool(level: number): void {
    for (let i = 0; i < GameCharactersPool.MAGES_POOL_SIZE; i++) {
      this._magesPool.push(GameCharacterFactory.getMage(level));
    }
  }

  private getPoolItem<T>(pool: T[], reloadPoolFn:() => void) {
    let item: T = pool.pop();
    if (!pool.length) {
      reloadPoolFn();
    }
    return item;
  }

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
   * The bind() method creates *a new function* that, when called,
   * has its `this` keyword set to the provided value,
   * with a given sequence of arguments preceding any provided when *the new function* is called.
   */
  public getWarrior(): GameCharacter {
    return this.getPoolItem(this._warriorsPool, this.loadWarriorsPool.bind(this, this.level));
  }

  public getMage(): GameCharacter {
    return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this, this.level));
  }
}