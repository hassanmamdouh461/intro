'use client';

import { useRef } from 'react';
import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import VimeoHero from '@/components/VimeoHero';
import CursorBubble from '@/components/CursorBubble';
import TransitionScribble from '@/components/TransitionScribble';
import { INTRO_COLORS } from '@/lib/intro-config';

export default function Home() {
    const scribbleRef = useRef(null);

    const handleReplay = (color) => {
        if (scribbleRef.current) {
            scribbleRef.current.replay(color);
        }
    };

    return (
        <>
            {/* SVG Symbols for buttons and icons */}
            <SvgSymbols />

            {/* Custom Interactive Cursor Blob */}
            <CursorBubble />

            {/* Fullscreen Intro Animation (Runs automatically on load) */}
            <TransitionScribble ref={scribbleRef} autoPlay={true} />

            {/* ── Main Site Intro: Navbar + Hero Section ── */}
            <header className="main-header">
                <Navbar />
                <VimeoHero />
            </header>

            {/* ── Floating Controls to Replay or Test Specific Colors ── */}
            <aside className="intro-floating-toolbar" aria-label="Intro Controls">
                <button
                    className="intro-replay-btn"
                    onClick={() => handleReplay(null)}
                    title="Replay intro animation with random color"
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                    </svg>
                    <span>Replay Intro</span>
                </button>

                <div className="intro-color-dots">
                    {INTRO_COLORS.map((c) => (
                        <button
                            key={c.name}
                            className="intro-color-dot"
                            style={{ backgroundColor: c.value }}
                            title={`Play with ${c.name}`}
                            onClick={() => handleReplay(c.value)}
                        />
                    ))}
                </div>
            </aside>
        </>
    );
}
