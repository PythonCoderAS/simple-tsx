import { AttributeValueType, AttributesType } from "./types";

export default class Element {
  element: HTMLElement;

  // This will allow you to use this class for IntrinsicElements. I know this is a hacky way to do things but I don't have anything better.
  [name: string]: AttributeValueType | HTMLElement;

  constructor(
    tagName: string,
    attributes: AttributesType | null,
    ...children: (Element | string | number | null | undefined)[]
  ) {
    this.element = document.createElement(tagName);
    const trueAttributes = attributes || {};
    Object.entries(trueAttributes).forEach(([key, value]) => {
      if (key.startsWith("on") && key.toLowerCase() in window) {
        this.element.addEventListener(
          key.toLowerCase().substring(2),
          value as EventListener
        );
      } else {
        this.element.setAttribute(key, value.toString());
      }
    });
    children.forEach((child) => {
      let node: Node;
      if (typeof child === "string") {
        node = document.createTextNode(child);
      } else if (typeof child === "number") {
        node = document.createTextNode(child.toString());
      } else if (child === null || child === undefined) {
        return;
      } else {
        node = child.element;
      }

      this.element.appendChild(node);
    });
  }
}

export type ComponentFunction<T extends Record<string, unknown>> = (
  props: T,
  ...children: Element[]
) => Element;
