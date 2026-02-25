import { useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { homeFiles, featuredFiles, expertiseFiles } from '../data/files';
import { DraggableNode } from '../components/ui/DraggableNode';
import type { DraggableItem } from '../types';

interface OutletContext {
    onSectionChange?: (section: string) => void;
}

const bgStyle = {
    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
    backgroundSize: '24px 24px',
    backgroundColor: 'white'
};

/** A single draggable-desktop section */
const DesktopSection = ({ files }: { files: DraggableItem[] }) => {
    const constraintsRef = useRef<HTMLDivElement>(null);
    return (
        <div className="absolute inset-0 w-full h-full" style={bgStyle} ref={constraintsRef}>
            {files.map((file) => (
                <DraggableNode key={file.id} item={file} constraintsRef={constraintsRef} />
            ))}
        </div>
    );
};

export const Home = () => {
    const { onSectionChange } = useOutletContext<OutletContext>();
    const scrollRef = useRef<HTMLDivElement>(null);

    const sectionRefs = {
        'crystal-cho': useRef<HTMLDivElement>(null),
        'featured': useRef<HTMLDivElement>(null),
        'expertise': useRef<HTMLDivElement>(null),
    };

    // Track which section is visible
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const sectionHeight = container.clientHeight;
            const index = Math.round(scrollTop / sectionHeight);
            const sections = ['Crystal Cho', 'Featured', 'Expertise'];
            onSectionChange?.(sections[index] || 'Crystal Cho');
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [onSectionChange]);

    // Expose scrollToSection for sidebar
    useEffect(() => {
        (window as any).__scrollToSection = (sectionId: string) => {
            const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
            ref?.current?.scrollIntoView({ behavior: 'smooth' });
        };
        return () => { delete (window as any).__scrollToSection; };
    }, []);

    return (
        <div
            ref={scrollRef}
            className="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
        >
            {/* Section 1: Crystal Cho */}
            <div
                ref={sectionRefs['crystal-cho']}
                id="section-crystal-cho"
                className="w-full h-full snap-start snap-always relative shrink-0"
            >
                <DesktopSection files={homeFiles} />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce pointer-events-none">
                    <span className="text-[11px] font-bold uppercase tracking-widest">scroll</span>
                </div>
            </div>

            {/* Section 2: Featured */}
            <div
                ref={sectionRefs['featured']}
                id="section-featured"
                className="w-full h-full snap-start snap-always relative shrink-0"
            >
                <DesktopSection files={featuredFiles} />
            </div>

            {/* Section 3: Expertise */}
            <div
                ref={sectionRefs['expertise']}
                id="section-expertise"
                className="w-full h-full snap-start snap-always relative shrink-0"
            >
                <DesktopSection files={expertiseFiles} />
            </div>
        </div>
    );
};
