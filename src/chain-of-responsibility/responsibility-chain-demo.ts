import { Request } from "./Request";
import { DeductHandler } from "./Deduct";
import { MessageHandler } from "./Message";
import { DepositHandler } from "./Deposit";

let request: Request = new Request("source user", "target user", 500);

let messagehandler = new MessageHandler();
let deductHandler = new DeductHandler();
let depositHandler = new DepositHandler();

deductHandler.setData(request);
deductHandler.setNextHandler(depositHandler);
depositHandler.setNextHandler(messagehandler);

export const resChainDemo = () => {
  deductHandler.process();
}
