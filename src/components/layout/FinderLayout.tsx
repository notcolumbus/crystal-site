import { Outlet, NavLink, useLocation } from 'react-router-dom';
import CcLogo from '../CcLogo';

export const FinderLayout = () => {
    const location = useLocation();

    const getTitle = () => {
        if (location.pathname === '/') return 'crystal cho — local';
        const path = location.pathname.split('/')[1];
        return path || 'crystal cho — local';
    };

    const sidebarLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-semibold transition-colors ${isActive ? 'bg-slate-200/70 text-black' : 'text-black hover:bg-black/5'
        }`;

    const BlueSquare = () => <div className="w-4 h-4 rounded-sm bg-[#0011FF] shrink-0" />;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-100">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 -z-10" />

            {/* Main Window Container - Replaced GlassSurface with raw CSS for performance and drag hit-box accuracy */}
            <div className="w-full h-full overflow-hidden flex flex-col relative z-10 bg-white/40 backdrop-blur-3xl">
                {/* Top Bar */}
                <div className="h-[52px] w-full flex items-center px-4 shrink-0 border-b border-white/40 relative bg-white/30">
                    <div className="flex gap-2 absolute left-4">
                        <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/50" />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <span className="font-bold text-lg text-black tracking-tight">{getTitle()}</span>
                    </div>
                    <div className="absolute right-4">
                        <BlueSquare />
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 overflow-hidden relative">
                    {/* Sidebar */}
                    <aside className="w-[220px] shrink-0 border-r border-white/40 flex flex-col overflow-y-auto bg-white/30">
                        <div className="py-8 px-4 flex flex-col items-center">
                            <CcLogo width={160} height={100} className="mb-2" simple={true} />
                            <div className="text-[10px] text-slate-500 font-medium">product designer</div>
                            <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
                                <BlueSquare /> based in nyc
                            </div>
                        </div>

                        <nav className="flex flex-col px-3 pb-8 gap-6">
                            {/* Favorites Section */}
                            <div>
                                <div className="px-2 text-xs font-semibold text-slate-400 mb-1">favorites</div>
                                <div className="flex flex-col gap-0.5">
                                    <NavLink to="/" className={sidebarLinkClass}>
                                        <BlueSquare /> crystal cho
                                    </NavLink>
                                    <NavLink to="/featured" className={sidebarLinkClass}>
                                        <BlueSquare /> featured
                                    </NavLink>
                                    <NavLink to="/testimonials" className={sidebarLinkClass}>
                                        <BlueSquare /> testimonials
                                    </NavLink>
                                </div>
                            </div>

                            {/* Work Section */}
                            <div>
                                <div className="px-2 text-xs font-semibold text-slate-400 mb-1">work</div>
                                <div className="flex flex-col gap-0.5">
                                    <NavLink to="/product" className={sidebarLinkClass}>
                                        <BlueSquare /> product
                                    </NavLink>
                                    <NavLink to="/visual" className={sidebarLinkClass}>
                                        <BlueSquare /> visual
                                    </NavLink>
                                </div>
                            </div>

                            {/* More Section */}
                            <div>
                                <div className="px-2 text-xs font-semibold text-slate-400 mb-1">more</div>
                                <div className="flex flex-col gap-0.5">
                                    <NavLink to="/about" className={sidebarLinkClass}>
                                        <BlueSquare /> about
                                    </NavLink>
                                </div>
                            </div>

                            {/* Locations Section */}
                            <div>
                                <div className="px-2 text-xs font-semibold text-slate-400 mb-1">locations</div>
                                <div className="flex flex-col gap-0.5">
                                    <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-semibold text-black hover:bg-black/5 transition-colors">
                                        <BlueSquare /> linkedin
                                    </a>
                                    <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-semibold text-black hover:bg-black/5 transition-colors">
                                        <BlueSquare /> email
                                    </a>
                                    <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm font-semibold text-black hover:bg-black/5 transition-colors">
                                        <BlueSquare /> resume
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </aside>

                    {/* Main View */}
                    <main className="flex-1 relative bg-white/50 overflow-hidden isolate">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};
