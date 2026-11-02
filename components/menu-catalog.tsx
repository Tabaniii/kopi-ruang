'use client';
import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, Search, X, ArrowUpRight, Coffee } from 'lucide-react';
import Link from 'next/link';
import { categories, menu, type Category } from '@/lib/cafe';
import { MenuCard } from './menu-preview';
import { SiteShell, useCafeActions } from './site-shell';
import { Eyebrow, Reveal } from './ui';
import { Contours } from './brand';
function Catalog() {
  const [category, setCategory] = useState<Category>('Signatures');
  const [search, setSearch] = useState('');
  const reduced = useReducedMotion();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const { reserve } = useCafeActions();
  const items = search.trim() ? categories.flatMap(c => menu[c]).filter(item => `${item.name} ${item.notes}`.toLowerCase().includes(search.trim().toLowerCase())) : menu[category];
  function keyboard(e: KeyboardEvent, index: number) {
    const next = e.key === 'ArrowRight' ? (index + 1) % categories.length : e.key === 'ArrowLeft' ? (index - 1 + categories.length) % categories.length : e.key === 'Home' ? 0 : e.key === 'End' ? categories.length - 1 : null;
    if (next === null) return;
    e.preventDefault(); setSearch(''); setCategory(categories[next]); refs.current[next]?.focus();
  }
  return <main id="main"><section className="catalog-hero"><Contours /><div className="container"><Link href="/" className="catalog-back"><ArrowLeft size={15} aria-hidden="true" /> Back to the good place</Link><Reveal><Eyebrow>THE BIKI MENU</Eyebrow><h1>Go on.<br />Find your <em>favorite.</em></h1><p>A daily ritual. A new crush. Something delicious in between.<br />Made to be enjoyed, one sip at a time.</p></Reveal><span className="catalog-stamp" aria-hidden="true">GOOD<br /><i>to the</i><br />LAST SIP</span></div></section>
    <section className="catalog-section container" aria-label="Explore the menu"><div className="catalog-controls"><div className="menu-tabs" role="tablist" aria-label="Menu categories">{categories.map((tab, i) => <button ref={el => { refs.current[i] = el; }} key={tab} role="tab" id={`tab-${i}`} aria-controls="menu-panel" aria-selected={category === tab && !search.trim()} tabIndex={category === tab ? 0 : -1} onKeyDown={e => keyboard(e, i)} onClick={() => { setCategory(tab); setSearch(''); }}>{category === tab && !search.trim() && <motion.span className="tab-background" layoutId="catalog-tab" transition={{ duration: reduced ? 0 : 0.2 }} />}<span className="tab-label">{tab}</span></button>)}</div><div className="menu-search"><Search size={17} aria-hidden="true" /><label className="sr-only" htmlFor="menu-search">Search all menu items</label><input id="menu-search" type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="What are you craving?" />{search && <button className="icon-button" aria-label="Clear search" onClick={() => setSearch('')}><X size={16} aria-hidden="true" /></button>}</div></div>
    <div className="catalog-heading"><h2>{search.trim() ? 'A little something for you.' : category === 'Signatures' ? 'Not your usual coffee.' : category === 'Manual Brew' ? 'Slowly brewed. Fully enjoyed.' : category === 'Pastries' ? 'A little on the sweet side.' : category === 'Main Course' ? 'Stay for a bite.' : 'The daily essentials.'}</h2><span aria-live="polite">{items.length} {items.length === 1 ? 'favorite' : 'favorites'}{search.trim() ? ' found' : ' to discover'}</span></div>
    <div id="menu-panel" role={search.trim() ? 'region' : 'tabpanel'} aria-label={search.trim() ? 'Search results' : undefined} aria-labelledby={search.trim() ? undefined : `tab-${categories.indexOf(category)}`} tabIndex={0}><AnimatePresence mode="wait" initial={false}><motion.div key={search.trim() ? 'search' : category} className="menu-grid catalog-grid" initial={{ opacity: 0, y: reduced ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.16 }}>{items.map((item, index) => <MenuCard key={item.name} item={item} index={index} />)}{items.length === 0 && <div className="menu-empty"><Coffee size={35} strokeWidth={1.1} aria-hidden="true" /><h3>No sips found. Yet.</h3><p>Try “latte”, “coconut”, or “coffee”.</p><button className="text-link" onClick={() => setSearch('')}>Show the menu <ArrowUpRight size={16} aria-hidden="true" /></button></div>}</motion.div></AnimatePresence></div>
    <div className="catalog-notes"><p>Have an allergy or a milk preference? Please ask the team before ordering.</p><p>Featured prices reflect the Instagram posts supplied and may change. Items marked “sample” are proposed menu content; unlisted prices are available from the team.</p></div></section>
    <section className="menu-invite"><div className="container"><div><Eyebrow>BETTER TOGETHER</Eyebrow><h2>Your favorite drink.<br /><em>Your favorite people.</em></h2></div><button className="button button-dark" onClick={reserve}>Make a table request <ArrowUpRight size={17} aria-hidden="true" /></button></div></section>
  </main>;
}
export function MenuCatalog() { return <SiteShell><Catalog /></SiteShell>; }
