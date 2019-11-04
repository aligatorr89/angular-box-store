export interface INodeTags {
  id: string;
  name: string;
  __typename: string;
}

export interface INode {
  id: string;
  slug: string;
  name: string;
  cost: number;
  currency: 'EUR';
  iconUrl: string;
  createdAt: string;
  tags: INodeTags[];
  ancestorBoxId: string;
  purchasable: boolean;
  openable: boolean;
  sellable: boolean;
  __typename: string;
}

export interface IEdge {
  node: INode;
  __typename: string;
}

export interface IBox {
  edges: IEdge[];
  __typename: string;
}

export interface IData {
  data: {
    boxes: IBox;
  };
}

export class Box {

}
