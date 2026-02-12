import CursorFollow from "./ui/smoothui/cursor-follow";


const CursorFollowDemo = () => (
    <div className="flex flex-row items-center justify-center gap-12 py-24">
    </div>
);

export default function CursorDemoWrapper() {
    return (
        <CursorFollow>
            <CursorFollowDemo />
        </CursorFollow>
    );
}
