import './globals.css';

export const metadata = {
    title: 'Intro Animation — Page Transition Scribble',
    description: 'Standalone GSAP-powered fullscreen intro and page transition extracted from truus-clone',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl">
            <body>{children}</body>
        </html>
    );
}
