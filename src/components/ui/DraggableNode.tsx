import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import type { DraggableItem } from '../../types';

interface DraggableNodeProps {
    item: DraggableItem;
    constraintsRef: React.RefObject<HTMLDivElement | null>;
}

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
            {item.type === 'widget' && item.widget ? (
                <div className="pointer-events-none">
                    {item.widget()}
                </div>
            ) : item.type === 'folder' ? (
                <div className="relative pointer-events-none">
                    <Folder fill="#3b82f6" stroke="none" size={56} className="drop-shadow-sm" />
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 rounded-sm mix-blend-overlay transition-opacity" />
                </div>
            ) : item.content ? (
                <div className="relative w-[300px] bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-[13px] leading-relaxed text-slate-700 font-normal text-left pointer-events-none">
                    {item.content}
                </div>
            ) : (
                <div className="relative bg-white rounded shadow-sm border border-slate-200 overflow-hidden flex items-center justify-center pointer-events-none">
                    {item.image ? (
                        <img src={item.image} alt={item.name} className="max-w-[240px] max-h-[180px] object-contain select-none pointer-events-none" draggable={false} />
                    ) : (
                        <div className="w-[80px] h-[60px] flex items-center justify-center text-[10px] text-slate-400 font-normal uppercase tracking-wider">TXT</div>
                    )}
                </div>
            )}
            {item.type !== 'widget' && !item.content && (
                <span className="text-[11px] text-slate-900 text-center font-normal leading-tight px-1.5 py-0.5 rounded group-hover:bg-[#0011FF] group-hover:text-white mt-1.5 pointer-events-none">
                    {item.name}
                </span>
            )}
        </motion.div>
    );
};
