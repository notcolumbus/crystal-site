export default function ImageWidget({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative bg-white rounded-sm shadow border border-slate-200 p-2 flex items-center justify-center pointer-events-none">
            <img src={src} alt={alt} className="max-w-[360px] max-h-[270px] object-contain select-none pointer-events-none rounded-sm" draggable={false} />
        </div>
    );
}
