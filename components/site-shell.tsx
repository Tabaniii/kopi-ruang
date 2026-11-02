'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, MessageCircle, Navigation } from 'lucide-react';
import { Header } from './header';
import { Reservation } from './reservation';
import { Brand } from './brand';
import { cafe } from '@/lib/cafe';
const CafeActions = createContext({ reserve: () => {} });
export const useCafeActions = () => useContext(CafeActions);
export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const reserve = () => setOpen(true);
  return <CafeActions.Provider value={{ reserve }}><a className="skip-link" href="#main">Skip to content</a><Header onReserve={reserve} />{children}
    <footer className="site-footer container"><div className="footer-top"><Link href="/" className="wordmark" aria-label="Biki Coffee home"><Brand /></Link><span>A LITTLE COFFEE. A LOT OF GOOD DAYS.</span><a href="https://www.instagram.com/biki.coffee/" target="_blank" rel="noreferrer" className="text-link"><Instagram size={15} aria-hidden="true" /> @biki.coffee <ArrowUpRight size={14} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Biki Coffee · Sudirman, Jakarta.</span><span>Photography is illustrative. Unconfirmed menu items are marked.</span><Link href="/menu/" className="back-top">Find your next favorite ↗</Link></div></footer>
    <div className="mobile-action-bar"><button onClick={reserve}><MessageCircle size={18} aria-hidden="true" /> Reserve / WhatsApp</button><a href={cafe.mapsUrl} target="_blank" rel="noreferrer"><Navigation size={18} aria-hidden="true" /> Directions</a></div><Reservation open={open} onClose={() => setOpen(false)} />
  </CafeActions.Provider>;
}
