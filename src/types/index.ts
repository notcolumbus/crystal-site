export interface DraggableItem {
    id: string;
    name: string;
    type: 'folder' | 'file';
    image?: string;
    defaultX: number;
    defaultY: number;
}
