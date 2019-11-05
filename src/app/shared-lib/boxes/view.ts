import * as BoxesList from './boxes';
import * as BoxItems from './box-items';
import * as BoxMeta from './box-meta';

export type BoxesListView = BoxesList.IEdge[];
export type BoxesListElementView = BoxesList.IEdge;

export type BoxItemsView = BoxItems.IEdge[];
export type BoxItemDetailView = BoxItems.INode;

export type BoxMetaView = BoxMeta.INode;

export class View {
}
