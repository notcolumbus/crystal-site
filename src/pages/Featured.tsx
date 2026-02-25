export const Featured = () => {
    return (
        <div className="p-8 h-full overflow-y-auto">
            <h1 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">Featured Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-white/80 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-full h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-slate-400 font-medium">Project Image {i}</span>
                        </div>
                        <h3 className="font-semibold text-lg text-slate-800 mb-2">Project Title {i}</h3>
                        <p className="text-slate-600 text-sm">
                            Description for featured project. This is a placeholder to show the layout working correctly in the main view.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
