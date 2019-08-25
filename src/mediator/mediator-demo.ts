import { TextField } from "./TextField";
import { Button, ButtonType } from "./Button";
import { LoginDialog } from "./LoginDialog";

export const mediatorDemo = () => {
  let emailTxt: TextField = new TextField();
  let passTxt: TextField = new TextField();
  let submitBtn: Button = new Button(ButtonType.SUBMIT);

  let loginDialog: LoginDialog = new LoginDialog(emailTxt, passTxt, submitBtn);
  emailTxt.setContent("tan@vaadin.com");
  passTxt.setContent('123345');
  submitBtn.click();

  passTxt.setContent('');
  submitBtn.click();
}
