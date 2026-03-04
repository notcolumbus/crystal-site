import type { DraggableItem, FeaturedProject } from '../types/index';
import ClockWidget from '../components/widgets/ClockWidget';
import MemoWidget from '../components/widgets/MemoWidget';
import ImageWidget from '../components/widgets/ImageWidget';
import crystalIcelandImg from '../assets/crystal_in_iceland.jpg';

export const SECTIONS = [
    { id: 'crystal-cho', name: 'Crystal Cho' },
    { id: 'featured', name: 'Featured' },
    { id: 'expertise', name: 'Expertise' },
] as const;

export const homeFiles: DraggableItem[] = [
    { id: 'intro-text', name: 'memo', type: 'widget', widget: <MemoWidget content={`Hi, I'm Crystal — a Product Designer building\n*efficient, impactful *experiences\nwith *intention.*\n\nPreviously @Xometry`} />, pos: { left: '10px', top: '62px' } },
    { id: 'crystal-iceland', name: 'crystal_in_iceland.jpg', type: 'widget', widget: <ImageWidget src={crystalIcelandImg} alt="Crystal in Iceland" />, showLabel: true, pos: { left: '380px', top: '235px' } },
    { id: 'clock-widget', name: 'clock', type: 'widget', widget: <ClockWidget />, pos: { right: '10px', top: '62px' } },

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

  
];

export const featuredProjects: FeaturedProject[] = [
    {
        id: 'project-1',
        title: 'Project One',
        description: 'A short description of what this project was about and the impact it had.',
        images: [
            'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        color: '#FFF0E8',
        titleColor: '#C2522B',
    },
    {
        id: 'project-2',
        title: 'Project Two',
        description: 'A short description of what this project was about and the impact it had.',
        images: [
            'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        color: '#E8EFFF',
        titleColor: '#3451B2',
    },
    {
        id: 'project-3',
        title: 'Project Three',
        description: 'A short description of what this project was about and the impact it had.',
        images: [
            'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        color: '#F3E8FF',
        titleColor: '#6D28D9',
    },
    {
        id: 'project-4',
        title: 'Project Four',
        description: 'A short description of what this project was about and the impact it had.',
        images: [
            'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
        ],
        color: '#FEF9C3',
        titleColor: '#92400E',
    },
];

export const expertiseFiles: DraggableItem[] = [];
