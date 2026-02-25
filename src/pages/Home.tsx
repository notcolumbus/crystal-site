import { useRef } from 'react';
import { homeFiles } from '../data/files';
import { DraggableNode } from '../components/ui/DraggableNode';

export const Home = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);

    // Background dotted grid pattern using CSS
    const bgStyle = {
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
        backgroundSize: '24px 24px',
    };

    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={bgStyle}
            ref={constraintsRef}
        >
            {homeFiles.map((file) => (
                <DraggableNode key={file.id} item={file} constraintsRef={constraintsRef} />
            ))}
        </div>
    );
};
