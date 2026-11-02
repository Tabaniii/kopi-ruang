'use client';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brand } from './brand';
const links = [['Our story', '/#story'], ['The menu', '/menu/'], ['The space', '/#space'], ['Visit Biki', '/#visit']];
export function Header({ onReserve }: { onReserve: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="wordmark" aria-label="Biki Coffee home" onClick={() => setOpen(false)}><Brand /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === '/menu/' && pathname.startsWith('/menu') ? 'page' : undefined}>{label}</Link>)}</nav>
    <button className="button button-dark header-reserve" onClick={onReserve}>Save your spot <ArrowUpRight size={16} aria-hidden="true" /></button>
    <button className="mobile-toggle icon-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}<button className="button button-dark" onClick={() => { setOpen(false); onReserve(); }}>Reserve a table <ArrowUpRight size={16} aria-hidden="true" /></button></nav>}</header>;
}
