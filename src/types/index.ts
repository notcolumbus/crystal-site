import type { ReactNode } from 'react';

export interface DraggableItem {
    id: string;
    name: string;
    type: 'folder' | 'file' | 'widget';
    image?: string;
    content?: string;
    widget?: () => ReactNode;
    defaultX: number;
    defaultY: number;
}
