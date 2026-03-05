import { featuredProjects } from '../data/files';
import type { FeaturedProject } from '../types';

const FeaturedCard = ({ project }: { project: FeaturedProject }) => {
    const folderColor = project.color;

    return (
        <div className="relative rounded-2xl overflow-hidden h-full bg-[#f5f5f7] border border-black/[0.06]">


            {/* Subtle background tint */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundColor: project.titleColor }}
                />
                <img
                    src={project.images[0]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-10"
                />
            </div>

            {/* Floating images — extend behind folder cover */}
            <div className="absolute inset-0 flex items-start justify-center pt-8" style={{ zIndex: 2 }}>
                <div className="relative" style={{ width: '80%', height: '70%' }}>
                    {project.images.length > 1 && (
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="absolute object-cover rounded-xl shadow-md"
                            style={{
                                width: '70%',
                                height: '100%',
                                left: '0%',
                                top: '5%',
                                transform: 'rotate(-5deg)',
                                zIndex: 1,
                            }}
                        />
                    )}
                    <img
                        src={project.images[project.images.length > 1 ? 1 : 0]}
                        alt={project.title}
                        className="absolute object-cover rounded-xl shadow-xl"
                        style={{
                            width: '70%',
                            height: '100%',
                            right: '0%',
                            top: '0%',
                            transform: 'rotate(3deg)',
                            zIndex: 2,
                        }}
                    />
                </div>
            </div>

            {/* Folder cover — solid opaque */}
            <div className="absolute bottom-0 left-0 right-0" style={{ height: '42%', zIndex: 10 }}>
                {/* Folder tab SVG */}
                <svg
                    viewBox="0 0 800 48"
                    preserveAspectRatio="none"
                    className="absolute -top-[23px] left-0 w-full h-[24px]"
                    style={{ zIndex: 10 }}
                >
                    <path
                        d="M0,48 L0,10 C0,4 4,0 10,0 L240,0 C260,0 268,8 278,24 C288,40 296,48 316,48 Z"
                        fill={folderColor}
                    />
                </svg>

                {/* Folder body */}
                <div
                    className="h-full px-5 pt-2 pb-4 flex flex-col justify-center"
                    style={{ backgroundColor: folderColor }}
                >
                    <h3
                        className="text-xl font-bold leading-tight"
                        style={{ color: project.titleColor }}
                    >
                        {project.title}
                    </h3>
                    <div
                        className="h-px my-2"
                        style={{ backgroundColor: project.titleColor + '25' }}
                    />
                    <p
                        className="text-[13px] leading-relaxed font-medium"
                        style={{ color: project.titleColor + 'cc' }}
                    >
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const FeaturedCards = () => (
    <div className="absolute inset-0 w-full h-full pt-[52px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 p-5 h-full">
            {featuredProjects.map((project) => (
                <FeaturedCard key={project.id} project={project} />
            ))}
        </div>
    </div>
);
