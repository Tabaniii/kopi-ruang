import type { Metadata } from 'next';
import { MenuCatalog } from '@/components/menu-catalog';
export const metadata: Metadata = { title: 'The Menu — Biki Coffee', description: 'Find your next Biki favorite. Signature coffees, espresso classics, slow brews and a little something to eat.' };
export default function MenuPage() { return <MenuCatalog />; }
