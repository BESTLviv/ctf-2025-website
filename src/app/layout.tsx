import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from './Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTF 2025 - BEST Capture The Flag',
  description: 'BEST Lviv CTF 2025 – Capture The Flag',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head />
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}