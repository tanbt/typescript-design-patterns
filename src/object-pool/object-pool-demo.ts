import { GameCharactersPool } from "./GameCharactersPool";

export const objectPoolDemo = () => {
  let level = 12;
  let pool = new GameCharactersPool(level);

  for(let i=0; i<40; i++){
    console.log(`Get warrior ${i}:`);
    console.log(pool.getWarrior());
  }

}
