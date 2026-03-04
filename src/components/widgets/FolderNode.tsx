import React from 'react';
import FolderComponent from './Folder';
import type { DraggableItem } from '../../types';

type FolderItem = Extract<DraggableItem, { type: 'folder' }>;

const FOLDER_COLOR = '#f2d0db';

export const FolderNode: React.FC<{ item: FolderItem }> = ({ item }) => (
    <FolderComponent color={FOLDER_COLOR} size={1} items={item.items ?? []} />
);
