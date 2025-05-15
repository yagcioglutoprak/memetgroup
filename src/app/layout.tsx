import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'MemetGroup',
  description: 'Site web de MemetGroup',
  icons: {
    icon: '/icons/icon2.svg',
    shortcut: '/icons/icon2.svg',
    apple: '/icons/icon2.svg',
  },
  themeColor: '#D5112A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
} 