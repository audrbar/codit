import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Toaster } from '@/components/ui/Toaster';
import Providers from '@/components/Providers';

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
            <body className="min-h-screen pt-6 bg-slate-50 antialiased">
                <Providers>
                    {/* @ts-expect-error server component */}
                    <Navbar />
                    {authModal}
                    <div className="container max-w-7xl mx-auto h-full pt-6">
                        {children}
                    </div>
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}
