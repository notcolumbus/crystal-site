export const Testimonials = () => {
    return (
        <div className="p-8 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">Testimonials</h1>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/80 border border-slate-200 rounded-xl p-6 shadow-sm">
                        <p className="text-slate-700 italic mb-4">
                            "Working with Crystal was an absolute pleasure. The design sense and attention to detail
                            completely transformed our understanding of what a digital product could be."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                C{i}
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-slate-800">Client Name {i}</div>
                                <div className="text-xs text-slate-500">CEO, Company {i}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
