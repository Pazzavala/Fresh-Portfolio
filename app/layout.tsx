import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Ricardos Fresh Portfolio',
    description: 'Ricardo is a full-stack developer with 8 years of ex.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='!scroll-smooth'>
            {/* Since our header is fixed position it takes it out of layout */}
            {/* Therefore in our body we can add some padding to top*/}
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
            >
                {/* This is how we create a circle in background */}
                <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
                <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
