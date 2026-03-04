import type { ReactNode } from 'react';

type BaseItem = {
    id: string;
    name: string;
    defaultX: number;
    defaultY: number;
};

export type DraggableItem =
    | (BaseItem & { type: 'folder' })
    | (BaseItem & { type: 'file'; image?: string; content?: string; contentStyle?: 'italic' | 'normal' })
    | (BaseItem & { type: 'widget'; widget: () => ReactNode });
