'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Clock3, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { cafe, formatHour } from '@/lib/cafe';
import { Eyebrow, Reveal } from './ui';
export function useCafeClock() {
  const [clock, setClock] = useState<{ day: string; hour: number } | null>(null);
  useEffect(() => {
    const update = () => {
      const parts = new Intl.DateTimeFormat('en-US', { timeZone: cafe.timezone, weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
      setClock({ day: parts.find(p => p.type === 'weekday')!.value, hour: Number(parts.find(p => p.type === 'hour')!.value) + Number(parts.find(p => p.type === 'minute')!.value) / 60 });
    }; update(); const timer = setInterval(update, 60000); return () => clearInterval(timer);
  }, []);
  return clock;
}
export function OpenStatus() {
  const clock = useCafeClock();
  const hours = cafe.hours.find(h => h.day === clock?.day);
  const open = !!clock && !!hours && clock.hour >= hours.opens && clock.hour < hours.closes;
  return <span className={`open-status ${open ? 'is-open' : ''}`}><span className="status-dot" aria-hidden="true" />{!clock ? 'Early starts. Good coffee.' : open && hours ? `Open today until ${formatHour(hours.closes)}` : 'Closed now · see opening hours'}<span className="status-zone">WIB</span></span>;
}
export function Visit({ onContact }: { onContact: () => void }) {
  const clock = useCafeClock();
  const [map, setMap] = useState(false);
  return <section id="visit" className="section visit-section"><div className="container"><Reveal><div className="section-heading"><div><Eyebrow>COME AS YOU ARE</Eyebrow><h2>There’s a place<br />for you here.</h2></div><p className="visit-heading-note">For your first coffee, your next chapter,<br />or absolutely no reason at all.</p></div></Reveal>
    <div className="visit-grid"><Reveal className="visit-info"><div className="address-block"><MapPin size={20} aria-hidden="true" /><div><h3>Find your little corner.</h3><p>{cafe.neighborhood}<br />Jakarta, Indonesia 12910</p><span className="demo-label">Biki Coffee · Setiabudi, Jakarta Selatan</span></div></div><div className="hours-block"><Clock3 size={20} aria-hidden="true" /><div><h3>Good mornings. Slow evenings.</h3><dl>{cafe.hours.map(row => <div key={row.day} className={row.day === clock?.day ? 'today' : ''}><dt>{row.day}{row.day === clock?.day && <span>Today</span>}</dt><dd>{formatHour(row.opens)} – {formatHour(row.closes)}</dd></div>)}</dl><p className="hours-note">WIB (GMT+7) · Hours shown on @biki.coffee. Confirm holiday changes.</p></div></div><div className="visit-actions"><a className="button button-dark" href={cafe.mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={17} aria-hidden="true" /></a><button className="text-link" onClick={onContact}><MessageCircle size={16} aria-hidden="true" /> Say hello</button></div></Reveal>
    <Reveal className="map-card"><div className="map-surface">{map ? <iframe title="Interactive map of the Biki Coffee venue reference" src={cafe.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <><svg className="map-art" viewBox="0 0 650 500" aria-hidden="true"><rect width="650" height="500" fill="#e9e8df"/><g fill="#dedfcf"><path d="M0 0h190v130H0zM350 0h300v65H350zM440 290h210v210H440zM0 390h180v110H0z"/><rect x="50" y="180" width="100" height="130" rx="25"/><rect x="390" y="120" width="140" height="110" rx="40"/></g><g fill="none" stroke="#faf9f3" strokeWidth="15"><path d="M-20 320Q200 260 320 130T700 50M220-30l40 570M-20 150l720 200M440-20L350 550M0 430l700-40"/><path d="M70-20l30 570M570-30L510 550" strokeWidth="8"/></g><g fill="#a6a68f" fontFamily="Arial" fontSize="10" letterSpacing="2"><text x="330" y="390">SETIABUDI</text><text x="20" y="135" transform="rotate(15 20 135)">JL. JEND. SUDIRMAN</text><text x="400" y="90">SUDIRMAN</text></g></svg><div className="map-pin"><span className="pin-icon"><MapPin size={25} strokeWidth={1.5} aria-hidden="true" /></span><strong>Biki Coffee</strong><span>A little coffee. A better day.</span></div><button className="button map-load" onClick={() => setMap(true)}><Navigation size={15} aria-hidden="true" /> Explore the neighborhood <ArrowUpRight size={15} aria-hidden="true" /></button></>}</div><div className="map-caption"><span><span className="small-dot" /> Setiabudi, South Jakarta</span><span>Biki Coffee</span></div></Reveal></div>
  </div></section>;
}
