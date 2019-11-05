
export interface INode {
  id: string;
  slug: string;
  name: string;
  description: string;
  cost: number;
  currency?: 'EUR';
  iconUrl: string;
  enabled: boolean;
  ancestorBoxId: string;
  purchasable: boolean;
  openable: boolean;
  sellable: boolean;
  __typename: 'Box';
}

export interface IData {
  data: {
    box: INode
  };
}

export class BoxMeta {
}
