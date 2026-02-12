import CcLogo from "./components/CcLogo"
import Navbar from "./components/Navbar"
import CursorDemoWrapper from "./components/CursorFollowDemo"

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <CcLogo />
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-24 px-6">
        <CursorDemoWrapper />
        <p className="max-w-xl text-center text-sm md:text-base leading-relaxed text-slate-600 mt-8 font-medium">
          Graphic designer based in <span className="text-brand">Newcastle</span>
        </p>
      </div>
    </div>
  )
}

export default App