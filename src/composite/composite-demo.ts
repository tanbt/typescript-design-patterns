import { IElement } from "./IElement";
import { DefaultElement } from "./DefaultElement";
import { TextElement } from "./TextElement";
import { ImageElement } from "./ImageElement";

/*
document
  - div
    - h1
        - this is text 1
    - p
        - this is text 2
  - img

*/
let document: IElement = new DefaultElement("html");
let div: IElement = new DefaultElement("div");
let h1: IElement = new DefaultElement("h1");
let text1: TextElement = new TextElement("this is text 1");
let p: IElement = new DefaultElement("p");
let text2: TextElement = new TextElement("this is text 2");
let img: IElement = new ImageElement(["src=\"/site/logo.png\""]);

document.add(div, img);
div.add(h1, p);
h1.add(text1);
p.add(text2);

export const compositeDemo = () => {
  document.print(1);
}