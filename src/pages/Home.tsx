import { useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { homeFiles, featuredFiles, expertiseFiles, SECTIONS } from '../data/files';
import { DraggableNode } from '../components/ui/DraggableNode';
import type { DraggableItem } from '../types';
import { ArrowDown } from 'lucide-react';

interface OutletContext {
    onSectionChange?: (section: string) => void;
}

const bgStyle = {
    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
    backgroundSize: '24px 24px',
    backgroundColor: 'white'
};

const sectionFiles = [homeFiles, featuredFiles, expertiseFiles];

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
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Tell the parent layout (FinderLayout) which section is currently visible
    // so it can update the title in the top bar.
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let prevIndex = -1;
        const handleScroll = () => {
            const index = Math.min(
                Math.round(container.scrollTop / container.clientHeight),
                SECTIONS.length - 1,
            );
            if (index !== prevIndex) {
                prevIndex = index;
                onSectionChange?.(SECTIONS[index].name);
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [onSectionChange]);

    // Expose a global so FinderLayout's sidebar buttons can scroll directly to a section.
    useEffect(() => {
        (window as any).__scrollToSection = (sectionId: string) => {
            const index = SECTIONS.findIndex(s => s.id === sectionId);
            sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
        };
        return () => { delete (window as any).__scrollToSection; };
    }, []);

    // Full-height snap-scroll container — each child fills the viewport
    return (
        <div
            ref={scrollRef}
            className="absolute inset-0 w-full h-full overflow-y-auto snap-y snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
        >
            {SECTIONS.map((section, i) => (
                <div
                    key={section.id}
                    ref={(el) => { sectionRefs.current[i] = el; }}
                    id={`section-${section.id}`}
                    className="w-full h-full snap-start snap-always relative shrink-0"
                >
                    <DesktopSection files={sectionFiles[i]} />
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
