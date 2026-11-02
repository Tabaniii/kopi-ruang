export function Brand({ compact = false }: { compact?: boolean }) {
  return <><span className="brand-emblem" aria-hidden="true">B<span /></span>{!compact && <span className="brand-type">biki<span>COFFEE</span></span>}</>;
}
export function Contours({ className = '' }: { className?: string }) {
  return <svg className={`contours ${className}`} viewBox="0 0 650 600" fill="none" aria-hidden="true">{Array.from({ length: 19 }, (_, i) => <path key={i} d={`M ${-90 + i * 10} -20 C ${470 + i * 9} ${90 + i * 5}, ${-40 + i * 9} ${250 + i * 5}, ${330 + i * 14} 400 S ${670 + i * 10} 470, 730 660`} />)}</svg>;
}
