import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import type { DraggableItem } from '../../types';

interface DraggableNodeProps {
    item: DraggableItem;
    constraintsRef: React.RefObject<HTMLDivElement | null>;
}

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

export const DraggableNode: React.FC<DraggableNodeProps> = ({ item, constraintsRef }) => {
    const [zIndex, setZIndex] = useState(1);

    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.05}
            dragMomentum={false}
            initial={{ x: item.defaultX, y: item.defaultY }}
            onDragStart={() => setZIndex(50)}
            onDragEnd={() => setZIndex(1)}
            style={{ zIndex }}
            className="absolute cursor-grab active:cursor-grabbing flex flex-col items-center gap-1 p-2 rounded-md hover:bg-black/5 transition-colors group select-none"
        >
            {item.type === 'widget' ? (
                <div className="pointer-events-none">
                    {item.widget()}
                </div>
            ) : item.type === 'folder' ? (
                <div className="relative pointer-events-none">
                    <Folder fill="#3b82f6" stroke="none" size={56} className="drop-shadow-sm" />
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 rounded-sm mix-blend-overlay transition-opacity" />
                </div>
            ) : item.content ? (
                <div className={`relative w-[450px] bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-2xl leading-relaxed font-serif text-slate-700 text-left pointer-events-none whitespace-pre-wrap ${item.contentStyle === 'italic' ? 'italic' : ''}`}>
                    {parseContent(item.content)}
                </div>
            ) : (
                <div className="relative bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex items-center justify-center pointer-events-none">
                    {item.image ? (
                        <img src={item.image} alt={item.name} className="max-w-[360px] max-h-[270px] object-contain select-none pointer-events-none" draggable={false} />
                    ) : (
                        <div className="w-[80px] h-[60px] flex items-center justify-center text-[10px] text-slate-400 font-normal uppercase tracking-wider">TXT</div>
                    )}
                </div>
            )}
            {item.type !== 'widget' && (item.type === 'folder' || !item.content) && (
                <span className="text-[11px] text-slate-900 text-center font-normal leading-tight px-1.5 py-0.5 rounded group-hover:bg-[#0011FF] group-hover:text-white mt-1.5 pointer-events-none">
                    {item.name}
                </span>
            )}
        </motion.div>
    );
};
