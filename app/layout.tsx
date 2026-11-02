import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Biki Coffee — Your daily little extraordinary.',
  description: 'Specialty coffee, honest food, and a little room to slow down. Meet Biki Coffee in Sudirman, Jakarta.',
  robots: { index: false, follow: false },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { themeColor: '#fbf9f5', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
