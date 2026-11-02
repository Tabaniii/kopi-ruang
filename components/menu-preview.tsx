'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { menu, formatPrice, type MenuItem } from '@/lib/cafe';
import { Eyebrow, Photo, Reveal } from './ui';
export function MenuCard({ item, index = 0 }: { item: MenuItem; index?: number }) {
  return <article className={`menu-card ${item.tone ? `tone-${item.tone}` : ''}`}><div className="menu-photo"><Photo name={item.image} alt={item.alt} priority={index === 0} sizes="(max-width: 640px) 90vw, 33vw" />{item.badge && <span className="menu-badge">{item.badge}</span>}<span className="item-number">0{index + 1}</span></div><div className="menu-item-heading"><h3>{item.name}</h3><span>{formatPrice(item.price)}</span></div><p>{item.notes}</p>{item.illustrative && <span className="item-demo">Sample item · confirm availability</span>}</article>;
}
export function MenuPreview() {
  return <section className="section menu-section" id="menu"><div className="container"><Reveal><div className="section-heading"><div><Eyebrow>YOUR NEXT LITTLE OBSESSION</Eyebrow><h2>Milky, rich.<br /><em>A little extraordinary.</em></h2></div><div className="section-intro"><p>The familiar favorites. The unexpected twists.<br />There’s a Biki for every kind of day.</p><Link href="/menu/" className="text-link">Discover the whole menu <ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></Reveal><div className="menu-grid">{menu.Signatures.slice(0, 3).map((item, index) => <Reveal key={item.name} delay={index * 0.05}><MenuCard item={item} index={index} /></Reveal>)}</div><p className="menu-footnote">Featured drinks and displayed prices from @biki.coffee’s posts. <Link href="/menu/">Find your favorite →</Link></p></div></section>;
}
