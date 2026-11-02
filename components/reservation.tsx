'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, X } from 'lucide-react';
import { cafe, formatHour } from '@/lib/cafe';
export function Reservation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [request, setRequest] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: cafe.timezone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const selectedDay = new Intl.DateTimeFormat('en-US', { timeZone: cafe.timezone, weekday: 'long' }).format(new Date(`${date || today}T12:00:00+07:00`));
  const schedule = cafe.hours.find(row => row.day === selectedDay)!;
  const slots = Array.from({ length: (schedule.closes - schedule.opens) * 2 }, (_, i) => formatHour(schedule.opens + i / 2));
  useEffect(() => {
    if (open) { dialog.current?.showModal(); setCopied(false); setCopyError(false); setRequest(''); setDate(''); setTime('10:00'); }
    else dialog.current?.close();
  }, [open]);
  useEffect(() => { if (!open) return; const old = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = old; }; }, [open]);
  return <dialog ref={dialog} className="reservation-dialog" onCancel={onClose} onClick={e => { if (e.target === dialog.current) onClose(); }} aria-labelledby="reservation-title"><div className="reservation-inner"><button className="icon-button dialog-close" onClick={onClose} aria-label="Close reservation"><X size={20} /></button><p className="eyebrow">A SEAT, A SIP, A LITTLE PAUSE</p><h2 id="reservation-title">Make yourself<br />at home.</h2><p>Plan your next slow morning. We’ll help you prepare a table request.</p><form onSubmit={async e => {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    const message = `Hi Biki Coffee! I'd like to request a table for ${data.get('guests')} on ${data.get('date')} at ${data.get('time')}. My name is ${String(data.get('name')).trim()}. Please confirm availability. Thank you!`;
    setRequest(message);
    if (cafe.whatsapp) window.open(`https://wa.me/${cafe.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    else { try { await navigator.clipboard.writeText(message); setCopied(true); } catch { setCopyError(true); } }
  }}><label>Your name<input name="name" autoComplete="given-name" placeholder="What should we call you?" required maxLength={80} pattern=".*\S.*" /></label><div className="form-row"><label>Date<input name="date" type="date" min={today} value={date || today} onChange={e => { setDate(e.target.value); setTime('10:00'); }} required /></label><label>Party size<select name="guests" defaultValue="2 guests">{[1, 2, 3, 4, 5, 6].map(n => <option key={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}</select></label></div><label>Preferred time<select name="time" value={time} onChange={e => setTime(e.target.value)}>{slots.map(slot => <option key={slot}>{slot}</option>)}</select></label><button className="button button-dark" type="submit">{cafe.whatsapp ? 'Request via WhatsApp' : copied ? 'Request copied' : 'Copy table request'}{copied ? <Check size={17} aria-hidden="true" /> : cafe.whatsapp ? <ArrowUpRight size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}</button><p className="form-notice">{cafe.whatsapp ? 'Your table is reserved only after our team confirms availability.' : 'Concept preview: the café’s WhatsApp number is not connected yet. This prepares a request; it does not book a table.'}</p><div aria-live="polite">{copied && <p className="copy-success">Copied. Your request is ready to share once contact details are confirmed.</p>}{copyError && <label>Copy your request manually<textarea readOnly value={request} rows={5} onFocus={e => e.target.select()} /></label>}</div></form></div></dialog>;
}
