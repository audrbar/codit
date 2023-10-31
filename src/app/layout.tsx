import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'audrbar | Codit',
    description: 'A Reddit clone built with Next.js and TypeScript.',
};

export default function RootLayout({
    children,
    authModal,
}: {
    children: React.ReactNode;
    authModal: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cn(
                'bg-white text-slate-900 antialiased light',
                inter.className
            )}
        >
            <body className="min-h-screen pt-12 bg-slate-50 antialiased">
                {/* @ts-expect-error server component */}
                <Navbar />
                {authModal}
                <Toaster position="top-center" reverseOrder={false} />
                <div className="container max-w-7xl mx-auto h-full pt-12">
                    {children}
                </div>
            </body>
        </html>
    );
}
