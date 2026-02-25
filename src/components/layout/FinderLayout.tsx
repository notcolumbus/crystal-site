import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Link as LinkIcon,
    Zap,
    Hash,
    Compass,
    User,
    Linkedin,
    Mail,
    FileText
} from 'lucide-react';
import CcLogo from '../CcLogo';
import { TypewriterTitles } from '../ui/TypewriterTitles';
import { useState, useCallback } from 'react';

export const FinderLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('Crystal Cho');

    const isHome = location.pathname === '/';

    const getTitle = () => {
        if (isHome) return activeSection;
        const path = location.pathname.split('/')[1];
        return path.charAt(0).toUpperCase() + path.slice(1) || 'Crystal Cho';
    };

    const handleSectionChange = useCallback((section: string) => {
        setActiveSection(section);
    }, []);

    const sectionIds = ['crystal-cho', 'featured', 'expertise'];
    const sectionNames = ['Crystal Cho', 'Featured', 'Expertise'];

    const scrollToSection = (sectionId: string) => {
        if (!isHome) {
            navigate('/');
            setTimeout(() => {
                (window as any).__scrollToSection?.(sectionId);
            }, 100);
        } else {
            (window as any).__scrollToSection?.(sectionId);
        }
    };

    const handlePrev = () => {
        if (isHome) {
            const currentIndex = sectionNames.indexOf(activeSection);
            if (currentIndex > 0) {
                scrollToSection(sectionIds[currentIndex - 1]);
            }
        } else {
            navigate(-1);
        }
    };

    const handleNext = () => {
        if (isHome) {
            const currentIndex = sectionNames.indexOf(activeSection);
            if (currentIndex < sectionIds.length - 1) {
                scrollToSection(sectionIds[currentIndex + 1]);
            }
        } else {
            navigate(1);
        }
    };

    const sidebarScrollClass = (sectionId: string) => {
        const sectionNames: Record<string, string> = {
            'crystal-cho': 'Crystal Cho',
            'featured': 'Featured',
            'expertise': 'Expertise',
        };
        const isActive = isHome && activeSection === sectionNames[sectionId];
        return `flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-normal transition-colors cursor-pointer ${isActive ? 'bg-[#E5E5E5] text-black' : 'text-[#333333] hover:bg-black/5'
            }`;
    };

    const sidebarLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-normal transition-colors ${isActive && !isHome ? 'bg-[#E5E5E5] text-black' : 'text-[#333333] hover:bg-black/5'
        }`;

    const iconSize = 16;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-100 font-sans">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 -z-10" />

            {/* Main Window Container */}
            <div className="w-full h-full overflow-hidden flex relative z-10 bg-white">

                {/* Sidebar (Full Height Left) */}
                <aside className="w-[230px] h-full shrink-0 border-r border-[#E5E5E5] flex flex-col overflow-y-auto bg-[#F6F6F6] z-20">
                    <div className="pt-10 pb-8 px-4 flex flex-col items-center">
                        <CcLogo width={160} height={100} className="mb-4" simple={true} />
                        <TypewriterTitles />
                        <div className="text-[10px] text-[#999999] font-bold flex items-center gap-1 tracking-[0.1em] uppercase">📍Based in NYC
                        </div>
                    </div>

                    <nav className="flex flex-col px-3 pb-8 gap-8">
                        {/* Favorites Section */}
                        <div>
                            <div className="px-3 text-[11px] font-bold text-[#ADADAD] mb-2 uppercase tracking-wider">Favorites</div>
                            <div className="flex flex-col gap-0.5">
                                <button onClick={() => scrollToSection('crystal-cho')} className={sidebarScrollClass('crystal-cho')}>
                                    <Sparkles size={iconSize} className="text-[#0011FF]" /> Crystal Cho
                                </button>
                                <button onClick={() => scrollToSection('featured')} className={sidebarScrollClass('featured')}>
                                    <LinkIcon size={iconSize} className="text-[#0011FF]" /> Featured
                                </button>
                                <button onClick={() => scrollToSection('expertise')} className={sidebarScrollClass('expertise')}>
                                    <Zap size={iconSize} className="text-[#0011FF]" /> Expertise
                                </button>
                            </div>
                        </div>

                        {/* Work Section */}
                        <div>
                            <div className="px-3 text-[11px] font-bold text-[#ADADAD] mb-2 uppercase tracking-wider">Work</div>
                            <div className="flex flex-col gap-0.5">
                                <NavLink to="/product" className={sidebarLinkClass}>
                                    <Hash size={iconSize} className="text-[#0011FF]" /> Product
                                </NavLink>
                                <NavLink to="/visual" className={sidebarLinkClass}>
                                    <Compass size={iconSize} className="text-[#0011FF]" /> Visual
                                </NavLink>
                            </div>
                        </div>

                        {/* More Section */}
                        <div>
                            <div className="px-3 text-[11px] font-bold text-[#ADADAD] mb-2 uppercase tracking-wider">More</div>
                            <div className="flex flex-col gap-0.5">
                                <NavLink to="/about" className={sidebarLinkClass}>
                                    <User size={iconSize} className="text-[#0011FF]" /> About
                                </NavLink>
                            </div>
                        </div>

                        {/* Locations Section */}
                        <div>
                            <div className="px-3 text-[11px] font-bold text-[#ADADAD] mb-2 uppercase tracking-wider">Locations</div>
                            <div className="flex flex-col gap-0.5">
                                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-normal text-[#333333] hover:bg-black/5 transition-colors">
                                    <Linkedin size={iconSize} className="text-[#0011FF]" /> Linkedin
                                </a>
                                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-normal text-[#333333] hover:bg-black/5 transition-colors">
                                    <Mail size={iconSize} className="text-[#0011FF]" /> Email
                                </a>
                                <a href="#" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-normal text-[#333333] hover:bg-black/5 transition-colors">
                                    <FileText size={iconSize} className="text-[#0011FF]" /> Resume
                                </a>
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Right Column (Top Bar floats over Main) */}
                <div className="flex-1 h-full overflow-hidden relative">
                    {/* Top Bar - Glass (absolute overlay) */}
                    <div className="absolute top-0 left-0 right-0 z-10 h-[52px] flex items-center px-4 bg-white/70 backdrop-blur-xl border-b border-black/5">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4 mr-2">
                                <button onClick={handlePrev} className="text-slate-400 hover:text-slate-600">
                                    <ChevronLeft size={20} />
                                </button>
                                <button onClick={handleNext} className="text-slate-400 hover:text-slate-600">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                            <span className="font-bold text-[19px] text-black tracking-tight">{getTitle()}</span>
                        </div>

                        <div className="absolute right-4">
                            <div className="w-4 h-4 rounded-sm bg-[#0011FF]" />
                        </div>
                    </div>

                    {/* Main View (full area, content scrolls under top bar) */}
                    <main className="absolute inset-0 bg-white overflow-hidden isolate">
                        <Outlet context={{ onSectionChange: handleSectionChange }} />
                    </main>
                </div>
            </div>
        </div>
    );
};
