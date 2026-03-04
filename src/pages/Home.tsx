import { useRef, useEffect } from 'react';
import { homeFiles } from '../data/files';
import { DraggableNode } from '../components/DraggableNode';
import { FeaturedCards } from '../components/FeaturedCards';
import { ExpertiseCards } from '../components/ExpertiseCards';
import { useSection } from '../context/SectionContext';
import { ArrowDown } from 'lucide-react';

const bgStyle = {
    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
    backgroundSize: '24px 24px',
    backgroundColor: 'white'
};

const HomeSection = () => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    return (
        <div className="absolute inset-0 w-full h-full" style={bgStyle} ref={constraintsRef}>
            {homeFiles.map((file) => (
                <DraggableNode key={file.id} item={file} constraintsRef={constraintsRef} />
            ))}
        </div>
    );
};

const SectionContent = ({ index }: { index: number }) => {
    if (index === 1) return <FeaturedCards />;
    if (index === 2) return <ExpertiseCards />;
    return <HomeSection />;
};

export const Home = () => {
    const { scrollContainerRef, registerRef, onScroll, sections } = useSection();

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        container.addEventListener('scroll', onScroll, { passive: true });
        return () => container.removeEventListener('scroll', onScroll);
    }, [scrollContainerRef, onScroll]);

    return (
        <div
            ref={scrollContainerRef}
            className="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
        >
            {sections.map((section, i) => (
                <div
                    key={section.id}
                    ref={(el) => registerRef(i, el)}
                    id={`section-${section.id}`}
                    className="w-full h-full snap-start snap-always relative shrink-0"
                >
                    <SectionContent index={i} />
                    {i === 0 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 border rounded-full border-zinc-500/20 px-3 py-2 flex items-center justify-center gap-1">
                            <ArrowDown size={15} className='animate-bounce'/>
                            <span className="text-[11px] font-bold uppercase tracking-widest">scroll to explore</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
