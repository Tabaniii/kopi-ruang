'use client';
import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { categories, menu, formatPrice, type Category } from '@/lib/cafe';
import { Eyebrow, Photo, Reveal } from './ui';
export function MenuPreview({ onOrder }: { onOrder: () => void }) {
  const [category, setCategory] = useState<Category>('Espresso');
  const reduced = useReducedMotion();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function keyboard(event: KeyboardEvent, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    else return;
    event.preventDefault(); setCategory(categories[next]); refs.current[next]?.focus();
  }
  return <section id="menu" className="section menu-section"><div className="container">
    <Reveal><div className="section-heading"><div><Eyebrow>CRAFTED WITH CARE</Eyebrow><h2>A few good<br />reasons to stay.</h2></div><div className="section-intro"><p>Thoughtfully sourced. Lovingly made.<br />Your new usual is waiting to be discovered.</p><button className="text-link" onClick={onOrder}>Make a table request <ArrowUpRight size={17} aria-hidden="true" /></button></div></div></Reveal>
    <div className="menu-toolbar"><div className="menu-tabs" role="tablist" aria-label="Menu categories">{categories.map((tab, i) => <button ref={el => { refs.current[i] = el; }} key={tab} role="tab" id={`tab-${i}`} aria-controls="menu-panel" aria-selected={category === tab} tabIndex={category === tab ? 0 : -1} onKeyDown={e => keyboard(e, i)} onClick={() => setCategory(tab)}>{category === tab && <motion.span className="tab-background" layoutId="active-tab" transition={{ duration: reduced ? 0 : 0.22 }} />}<span className="tab-label">{tab}</span></button>)}</div><span className="menu-note"><Leaf size={14} aria-hidden="true" /> Good things, made fresh.</span></div>
    <div role="tabpanel" id="menu-panel" aria-labelledby={`tab-${categories.indexOf(category)}`} tabIndex={0} className="menu-panel"><AnimatePresence mode="wait" initial={false}><motion.div className="menu-grid" key={category} initial={{ opacity: 0, y: reduced ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.15 }}>{menu[category].map((item, i) => <article className="menu-card" key={item.name}><div className="menu-photo"><Photo name={item.image} alt={item.alt} sizes="(max-width: 640px) 88vw, 33vw" />{item.badge && <span className="menu-badge">{item.badge === 'Must try' && <span aria-hidden="true">✳</span>}{item.badge}</span>}<span className="item-number">0{i + 1}</span></div><div className="menu-item-heading"><h3>{item.name}</h3><span>{formatPrice(item.price)}</span></div><p>{item.notes}</p></article>)}</motion.div></AnimatePresence></div>
    <p className="menu-footnote">A little something for everyone. Plant-based milk available. <span>Please ask our team about allergens.</span></p>
  </div></section>;
}
