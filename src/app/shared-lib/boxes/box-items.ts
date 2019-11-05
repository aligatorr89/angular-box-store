
export interface IItemCategory {
  id: string;
  name: string;
  __typename: 'ItemCategory';
}

export interface IItem {
  id: string;
  name: string;
  brand: string;
  iconUrl: string;
  value: number;
  displayValue: number;
  shippingCost: number;
  usable: boolean;
  obtainable: boolean;
  withdrawable: boolean;
  category: IItemCategory;
  __typename: 'Item';
}

export interface INode {
  id: string;
  rate: number;
  rollStart: number;
  rollEnd: number;
  item: IItem;
  __typename: 'BoxItem';
}

export interface IEdge {
  node: INode;
  __typename: 'BoxItemEdge';
}

export interface IData {
  data: {
    boxItems: {
      edges: IEdge[],
      __typename: 'BoxItemConnection'
    }
  };
}

export class BoxItems {
}
