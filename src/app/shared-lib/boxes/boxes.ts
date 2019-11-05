export interface INodeTags {
  id: string;
  name: string;
  __typename: 'Tag';
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
  __typename: 'Box';
}

export interface IEdge {
  node: INode;
  __typename: 'BoxEdge';
}

export interface IBoxes {
  edges: IEdge[];
  __typename: 'BoxConnection';
}

export interface IData {
  data: {
    boxes: IBoxes;
  };
}

export class Box {

}
