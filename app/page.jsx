'use client';

import { useRef } from 'react';
import TransitionScribble from '@/components/TransitionScribble';
import { INTRO_COLORS } from '@/lib/intro-config';

export default function Home() {
    const introRef = useRef(null);

    const handleReplay = (color = null) => {
        if (introRef.current) {
            introRef.current.replay(color);
        }
    };

    return (
        <main
            style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={(e) => {
                // Clicking anywhere on the background also replays the intro
                if (e.target.tagName !== 'BUTTON') {
                    handleReplay(null);
                }
            }}
        >
            {/* ── 1. The Intro Animation Component ── */}
            <TransitionScribble ref={introRef} autoPlay={true} />

            {/* ── 2. Clean Center Controls to Replay & Test Colors ── */}
            <div className="intro-center-stage">
                <h1 className="intro-title">Intro Animation</h1>
                <p className="intro-subtitle">
                    انترو الخربشة والشعار المتحرك المستخرج من موقع Truus.
                    يعمل تلقائياً عند فتح الموقع، أو اضغط في أي مكان لتشغيله مجدداً.
                </p>

                <div className="intro-button-group">
                    <button
                        className="replay-btn"
                        onClick={() => handleReplay(null)}
                        title="إعادة تشغيل الانترو بلون عشوائي"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                        </svg>
                        Replay Intro ↺
                    </button>

                    <div className="color-picker-row">
                        {INTRO_COLORS.map((c) => (
                            <button
                                key={c.name}
                                className="color-dot"
                                style={{ backgroundColor: c.value }}
                                title={c.name}
                                onClick={() => handleReplay(c.value)}
                            />
                        ))}
                    </div>
                </div>

                <span className="click-hint">اضغط في أي مكان في الشاشة لإعادة التشغيل</span>
            </div>
        </main>
    );
}
