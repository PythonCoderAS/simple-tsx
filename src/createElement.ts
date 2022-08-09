import Element, { ComponentFunction } from "./element";

export default function createElement<
  T extends Record<string, string | ((event: Event) => unknown)>
>(tag: string | ComponentFunction<T>, props: T, ...children: Element[]) {
  if (typeof tag === "string") {
    return new Element(tag, props, ...children);
  }

  return tag(props, ...children);
}
