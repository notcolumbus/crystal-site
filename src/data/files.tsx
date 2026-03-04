import type { DraggableItem } from '../types/index';
import ClockWidget from '../components/ui/ClockWidget';
import crystalIcelandImg from '../assets/crystal_in_iceland.jpg';

export const SECTIONS = [
    { id: 'crystal-cho', name: 'Crystal Cho' },
    { id: 'featured', name: 'Featured' },
    { id: 'expertise', name: 'Expertise' },
] as const;

export const homeFiles: DraggableItem[] = [
    { id: 'memo-text', name: 'memo', type: 'file', content: `Hi, I'm Crystal! I'm a Product Designer building* efficient, impactful *experiences with* intention.*\n\nPreviously @Xometry`, defaultX: 40, defaultY: 80 },
    { id: 'crystal-iceland', name: 'crystal_in_iceland.jpg', type: 'file', image: crystalIcelandImg, defaultX: 500, defaultY: 200 },
    { id: 'clock-widget', name: 'clock', type: 'widget', widget: () => <ClockWidget />, defaultX: 800, defaultY: 60 },
    { id: 'memo-text', name: 'memo', type: 'file', content: '01. UI/UX\n02. User Research\n03. Interaction Design\n04. Brand Design\n05. Photography', defaultX: 400, defaultY: 800 },

];

export const featuredFiles: DraggableItem[] = [
    { id: 'f-project1', name: 'project 1', type: 'folder', defaultX: 60, defaultY: 50 },
    { id: 'f-project2', name: 'project 2', type: 'folder', defaultX: 60, defaultY: 180 },
    { id: 'f-project3', name: 'project 3', type: 'folder', defaultX: 60, defaultY: 310 },
    { id: 'f-memo1', name: 'preview', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Preview', defaultX: 350, defaultY: 80 },
    { id: 'f-memo2', name: 'preview', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Preview', defaultX: 550, defaultY: 200 },
    { id: 'f-memo3', name: 'preview', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Preview', defaultX: 700, defaultY: 100 },
    { id: 'f-note', name: 'note', type: 'file', content: 'A curated selection of featured work across product design, visual identity, and creative direction.', defaultX: 400, defaultY: 450 },
];

export const expertiseFiles: DraggableItem[] = [
    { id: 'e-ux', name: 'ux design', type: 'folder', defaultX: 60, defaultY: 50 },
    { id: 'e-visual', name: 'visual design', type: 'folder', defaultX: 60, defaultY: 180 },
    { id: 'e-research', name: 'research', type: 'folder', defaultX: 60, defaultY: 310 },
    { id: 'e-strategy', name: 'strategy', type: 'folder', defaultX: 60, defaultY: 440 },
    { id: 'e-note', name: 'note', type: 'file', content: 'Expertise in end-to-end product design, user research, visual storytelling, and strategic thinking.', defaultX: 400, defaultY: 120 },
    { id: 'e-memo1', name: 'sample', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Sample', defaultX: 600, defaultY: 300 },
    { id: 'e-memo2', name: 'sample', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Sample', defaultX: 750, defaultY: 450 },
];
