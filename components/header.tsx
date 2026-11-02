'use client';
import { Menu, X, ArrowUpRight, Coffee } from 'lucide-react';
import { useState } from 'react';
const links = [['Our story', '#story'], ['The menu', '#menu'], ['The space', '#space'], ['Visit us', '#visit']];
export function Header({ onReserve }: { onReserve: () => void }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner">
    <a href="#" className="wordmark" aria-label="Kopi and Ruang home"><Coffee aria-hidden="true" strokeWidth={1.4} /><span>kopi <i>&</i> ruang<span className="brand-sub">SPECIALTY COFFEE & EATERY</span></span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <button className="button button-dark header-reserve" onClick={onReserve}>Reserve / Order <ArrowUpRight size={16} aria-hidden="true" /></button>
    <button className="mobile-toggle icon-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}<button className="button button-dark" onClick={() => { setOpen(false); onReserve(); }}>Reserve a table <ArrowUpRight size={16} aria-hidden="true" /></button></nav>}</header>;
}
