export interface DraggableItem {
    id: string;
    name: string;
    type: 'folder' | 'file';
    image?: string;
    content?: string;
    defaultX: number;
    defaultY: number;
}
