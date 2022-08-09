export type AttributesType = {
  [key: string]: string | ((event: Event) => unknown);
};
