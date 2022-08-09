import { AttributesType } from "./types";

export default class Element {
  element: HTMLElement;

  constructor(
    name: string,
    attributes: AttributesType | null,
    ...children: Element[]
  ) {
    this.element = document.createElement(name);
    const trueAttributes = attributes || {};
    Object.entries(trueAttributes).forEach(([key, value]) => {
      if (key.startsWith("on") && key.toLowerCase() in window) {
        this.element.addEventListener(
          key.toLowerCase().substring(2),
          value as EventListener
        );
      } else {
        this.element.setAttribute(name, value.toString());
      }
    });
    children.forEach((child) => this.element.appendChild(child.element));
  }
}

export type ComponentFunction<T extends Record<string, unknown>> = (
  props: T,
  ...children: Element[]
) => Element;
