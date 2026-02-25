import { Heatmap } from '@paper-design/shaders-react';
import { useState, useEffect } from 'react';
import logo from '../assets/cc.svg';

interface CcLogoProps {
    width?: number;
    height?: number;
    className?: string;
    simple?: boolean;
}

export default function CcLogo({ width, height, className = "", simple = false }: CcLogoProps) {
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1280,
        height: typeof window !== 'undefined' ? window.innerHeight : 720
    });

    // Only auto-resize if explicit dimensions aren't provided
    useEffect(() => {
        if (width && height) return;

        function handleResize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width, height]);

    const finalWidth = width || dimensions.width;
    const finalHeight = height || dimensions.height;

    if (simple) {
        return (
            <div className={`relative flex items-center justify-center ${className}`} style={{ width: finalWidth, height: finalHeight }}>
                <img src={logo} alt="CC Logo" className="w-full h-full object-contain" />
            </div>
        );
    }

    return (
        <div className={`relative ${className}`} style={{ width: finalWidth, height: finalHeight }}>
            <Heatmap
                width={finalWidth}
                height={finalHeight}
                image={logo}
                colors={["#0011FF", "#ffffff"]}
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