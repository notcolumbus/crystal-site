import GlassSurface from "./ui/GlassSurface";
import { CiMail, CiLink } from "react-icons/ci";

export default function Navbar() {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl h-16">
            <GlassSurface
                width="100%"
                height="100%"
                borderRadius={32}
                brightness={100}
                opacity={0.1}
                blur={20}
                mixBlendMode="normal"
                className="border border-white/40 shadow-xl backdrop-blur-xl"
            >
                <div className="relative flex items-center justify-between px-6 w-full h-full">
                    <div className="text-2xl tracking-tighter text-black font-medium">
                        Crystal Cho
                    </div>


                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
                        <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all cursor-pointer">Product</button>
                        <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all cursor-pointer">Visual</button>
                        <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all cursor-pointer">About</button>
                    </div>


                    <div className="flex items-center gap-2">
                        <button className="p-2.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md hover:bg-white/60 transition-all cursor-pointer group shadow-sm">
                            <CiMail className="w-5 h-5 text-slate-800 transition-transform group-hover:scale-110" />
                        </button>
                        <button className="p-2.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md hover:bg-white/60 transition-all cursor-pointer group shadow-sm">
                            <CiLink className="w-5 h-5 text-slate-800 transition-transform group-hover:scale-110" />
                        </button>
                    </div>
                </div>
            </GlassSurface>
        </div>
    );
}