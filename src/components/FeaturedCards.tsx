import { featuredProjects } from '../data/files';
import type { FeaturedProject } from '../types';

const FeaturedCard = ({ project, index }: { project: FeaturedProject; index: number }) => (
    <div className="relative rounded-2xl overflow-hidden h-full" style={{ backgroundColor: project.color }}>
        {/* Stacked floating images */}
        <div className="absolute inset-x-0 top-4 bottom-0 flex items-center justify-center">
            <div className="relative w-[78%] h-full">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                    style={{ transform: 'rotate(-3deg) translateY(6px)', zIndex: 1 }}
                />
                <img
                    src={project.images[1]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
                    style={{ transform: 'rotate(2deg)', zIndex: 2 }}
                />
            </div>
        </div>

        {/* Text overlay at bottom, above images */}
        <div className="absolute inset-x-3 bottom-3 rounded-xl backdrop-blur-md bg-white/50 border border-white/60 p-4" style={{ zIndex: 3 }}>
            <span className="text-[11px] uppercase tracking-widest font-medium" style={{ color: project.titleColor + '99' }}>Project {index + 1}</span>
            <h3 className="text-base font-bold mt-0.5" style={{ color: project.titleColor }}>{project.title}</h3>
            <div className="h-px my-2" style={{ backgroundColor: project.titleColor + '20' }} />
            <p className="text-xs leading-relaxed" style={{ color: project.titleColor + 'cc' }}>{project.description}</p>
        </div>
    </div>
);

export const FeaturedCards = () => (
    <div className="absolute inset-0 w-full h-full pt-[52px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-5 h-full">
            {featuredProjects.map((project, i) => (
                <FeaturedCard key={project.id} project={project} index={i} />
            ))}
        </div>
    </div>
);
