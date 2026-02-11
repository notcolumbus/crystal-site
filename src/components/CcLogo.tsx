import { Heatmap } from '@paper-design/shaders-react';
import { useState, useEffect } from 'react';
import logo from '../assets/cc.svg';

export default function CcLogo() {
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1280,
        height: typeof window !== 'undefined' ? window.innerHeight : 720
    });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 w-screen h-screen">
            <Heatmap
                width={dimensions.width}
                height={dimensions.height}
                image={logo}
                colors={["#0040ff", "#ffffff"]}
                colorBack="#ffffff"
                contour={0.54}
                angle={32}
                noise={0.74}
                innerGlow={0.34}
                outerGlow={0.37}
                speed={1.02}
                scale={0.4}
            />
        </div>
    );
}