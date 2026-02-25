import React from 'react';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';
import type { DraggableItem } from '../../types';

interface DraggableNodeProps {
    item: DraggableItem;
    constraintsRef: React.RefObject<HTMLDivElement | null>;
}

export const DraggableNode: React.FC<DraggableNodeProps> = ({ item, constraintsRef }) => {
    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            initial={{ x: item.defaultX, y: item.defaultY }}
            className="absolute cursor-grab active:cursor-grabbing flex flex-col items-center gap-1 p-2 rounded-md hover:bg-black/5 transition-colors group"
            style={{ width: 80 }}
        >
            {item.type === 'folder' ? (
                <div className="relative">
                    <Folder fill="#3b82f6" stroke="none" size={56} className="drop-shadow-sm" />
                    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 rounded-sm mix-blend-overlay transition-opacity" />
                </div>
            ) : (
                <div className="relative w-14 h-14 bg-white rounded shadow border border-slate-200 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover select-none pointer-events-none" />
                    ) : (
                        <div className="text-xs text-slate-400 font-medium">TXT</div>
                    )}
                </div>
            )}
            <span className="text-xs text-slate-800 text-center font-medium leading-tight px-1 rounded group-hover:bg-blue-500 group-hover:text-white mt-1">
                {item.name}
            </span>
        </motion.div>
    );
};
