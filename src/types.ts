export type AttributeValueType = string | ((event: Event) => unknown);

export type AttributesType = {
  [key: string]: AttributeValueType;
};
