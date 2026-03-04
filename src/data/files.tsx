import type { DraggableItem } from '../types/index';
import ClockWidget from '../components/ui/ClockWidget';
import crystalIcelandImg from '../assets/crystal_in_iceland.jpg';

export const SECTIONS = [
    { id: 'crystal-cho', name: 'Crystal Cho' },
    { id: 'featured', name: 'Featured' },
    { id: 'expertise', name: 'Expertise' },
] as const;

export const homeFiles: DraggableItem[] = [
    { id: 'intro-text', name: 'memo', type: 'file', content: `Hi, I'm Crystal! I'm a Product Designer building* efficient, impactful *experiences with* intention.*\n\nPreviously @Xometry`, pos: { left: '10px', top: '62px' } },

    { id: 'crystal-iceland', name: 'crystal_in_iceland.jpg', type: 'file', image: crystalIcelandImg, pos: { left: '380px', top: '235px' } },
    { id: 'clock-widget', name: 'clock', type: 'widget', widget: () => <ClockWidget />, pos: { right: '10px', top: '62px' } },

    {
        id: 'applications-folder', name: 'applications', type: 'folder', pos: { left: '10px', bottom: '80px' },
        items: [
            <img src="https://placehold.co/80x80/5865F2/white?text=Discord" alt="Discord" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />,
            <img src="https://placehold.co/80x80/1E1E1E/white?text=Figma" alt="Figma" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />,
            <img src="https://placehold.co/80x80/FF0000/white?text=CC" alt="Creative Cloud" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />,
        ]
    },
    {
        id: 'peripherals-folder', name: 'peripherals', type: 'folder', pos: { left: '195px', bottom: '80px' },
        items: [
            <img src="https://placehold.co/200x150/e2e8f0/475569?text=apple_enjoyer.jpg" alt="apple_enjoyer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />,
            <img src="https://placehold.co/200x150/e2e8f0/475569?text=engi_keeb.jpg" alt="engi_keb" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />,
            <img src="https://placehold.co/130x160/e2e8f0/475569?text=headphones.jpg" alt="headphones" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />,
        ]
    },

    { id: 'skills-text', name: 'skills', type: 'file', content: '01. UI/UX\n02. User Research\n03. Interaction Design\n04. Brand Design\n05. Photography', pos: { right: '10px', bottom: '80px' }, showLabel: true },
];

export const featuredFiles: DraggableItem[] = []
export const expertiseFiles: DraggableItem[] = [];
