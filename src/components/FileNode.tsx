import React from 'react';
import type { DraggableItem } from '../types';

type FileItem = Extract<DraggableItem, { type: 'file' }>;

const parseContent = (text: string) => {
    const parts: (string | React.ReactNode)[] = [];
    const regex = /\*(.*?)\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        parts.push(<i key={match.index}>{match[1]}</i>);
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};

export const FileNode: React.FC<{ item: FileItem }> = ({ item }) => {
    if (item.content) {
        return (
            <div className={`relative w-fit max-w-[480px] bg-white rounded-2xl shadow-sm border border-slate-200 p-4 text-2xl leading-relaxed font-serif text-slate-700 text-left pointer-events-none whitespace-pre-wrap ${item.contentStyle === 'italic' ? 'italic' : ''}`}>
                {parseContent(item.content)}
            </div>
        );
    }

    return (
        <div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex items-center justify-center pointer-events-none">
            {item.image ? (
                <img src={item.image} alt={item.name} className="max-w-[360px] max-h-[270px] object-contain select-none pointer-events-none" draggable={false} />
            ) : (
                <div className="w-[80px] h-[60px] flex items-center justify-center text-[10px] text-slate-400 font-normal uppercase tracking-wider">TXT</div>
            )}
        </div>
    );
};
