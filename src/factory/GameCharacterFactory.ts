import { GameCharacter } from './GameCharacter';

export class GameCharacterFactory {
  public static getWarrior(level: number): GameCharacter {
    let warrior: GameCharacter;
    if (level < 10) {
      warrior = {
        level: level,
        health: 50,
        mana: 50
      };
    } else {
      warrior = {
        level: level,
        health: 100,
        mana: 100
      };
    }
    return warrior;
  }

  public static getMage(level: number): GameCharacter {
    let mage: GameCharacter;
    if (level < 10) {
      mage = {
        level: level,
        health: 40,
        mana: 60
      };
    } else {
      mage = {
        level: level,
        health: 90,
        mana: 110
      };
    }
    return mage;
  }
}