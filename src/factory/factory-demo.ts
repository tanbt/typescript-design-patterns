import { GameCharacterFactory } from "./GameCharacterFactory";

export const factoryDemo = () => {
  let warrior6 = GameCharacterFactory.getWarrior(6);
  let mage12 = GameCharacterFactory.getMage(12);

  console.log('Warrior: ');
  console.log(warrior6);
  console.log('Mage: ');
  console.log(mage12);

}
