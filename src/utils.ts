import Element from "./element";

export function setElement(container: HTMLElement, element: Element): void {
  container.replaceChildren(element.element);
}

export function appendElement(container: HTMLElement, element: Element): void {
  container.appendChild(element.element);
}

export function appendElementLeft(
  container: HTMLElement,
  element: Element
): void {
  container.insertBefore(element.element, container.firstChild);
}
