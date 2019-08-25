import { Deductor } from "./Deductor";
import { Deposit } from "./Deposit";
import { Command } from "./Command";

const deductor: Deductor = new Deductor();
const deposit: Deposit = new Deposit();

const req1: Command = new Command({
  user: "User 1",
  amount: 1111
}, deductor);

const req2: Command = new Command({
  user: "User 2",
  amount: 2211
}, deductor);

const req3: Command = new Command({
  user: "User 3",
  amount: 3332
}, deposit);

let commands: Command[] = [];
commands.push(req1);
commands.push(req2);
commands.push(req3);

export const commandDemo = () => {
  setInterval(() => {
    const command: Command = commands.pop();
    command ? command.execute() : '';
  }, 1000);
}
