export type AttributeValueType =
  | string
  | number
  | symbol
  | bigint
  | ((event: Event) => unknown);

export type AttributesType = {
  [key: string]: AttributeValueType;
};
