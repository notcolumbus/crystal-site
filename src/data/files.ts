import type { DraggableItem } from '../types/index';

export const homeFiles: DraggableItem[] = [
    { id: 'crystal-cho', name: 'crystal cho', type: 'folder', defaultX: 40, defaultY: 40 },
    { id: 'featured', name: 'featured', type: 'folder', defaultX: 520, defaultY: 300 },
    { id: 'expertise', name: 'expertise', type: 'folder', defaultX: 40, defaultY: 280 },
    { id: 'memo-text', name: 'memo', type: 'file', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', defaultX: 620, defaultY: 550 },
    { id: 'memo1', name: 'meme', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Ok+I+pull+up', defaultX: 680, defaultY: 220 },
    { id: 'memo2', name: 'meme', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Ok+I+pull+up', defaultX: 600, defaultY: 340 },
    { id: 'memo3', name: 'meme', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Ok+I+pull+up', defaultX: 320, defaultY: 520 },
    { id: 'memo4', name: 'meme', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Ok+I+pull+up', defaultX: 430, defaultY: 600 },
    { id: 'memo5', name: 'meme', type: 'file', image: 'https://placehold.co/120x80/e2e8f0/475569?text=Ok+I+pull+up', defaultX: 320, defaultY: 650 },
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

