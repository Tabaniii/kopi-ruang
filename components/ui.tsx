'use client';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import Image from 'next/image';
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={{ opacity: [0.65, 1], y: reduced ? 0 : [12, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduced ? 0 : 0.4, delay }}>{children}</motion.div>;
}
export function Photo({ name, alt, className = '', priority = false, sizes = '(max-width: 640px) 100vw, 50vw' }: { name: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return <Image src={`/images/${name}.jpg`} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
}
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span aria-hidden="true" />{children}</p>;
}
