import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const NotoSansKR = Noto_Sans_KR({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
    title: 'top-app',
    description: 'top-app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={NotoSansKR.className}>{children}</body>
        </html>
    );
}
