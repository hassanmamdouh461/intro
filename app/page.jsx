'use client';

import { useState, useRef } from 'react';
import TransitionScribble from '@/components/TransitionScribble';
import { INTRO_COLORS, DEFAULT_INTRO_CONFIG } from '@/lib/intro-config';

export default function Home() {
    const introRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [customText, setCustomText] = useState('');
    const [durationIn, setDurationIn] = useState(2.0);
    const [durationOut, setDurationOut] = useState(2.5);
    const [lastPlayedColor, setLastPlayedColor] = useState(null);

    const handleReplay = (color = selectedColor) => {
        if (introRef.current) {
            introRef.current.replay(color);
        }
    };

    return (
        <>
            {/* 1. The Intro Animation Component */}
            <TransitionScribble
                ref={introRef}
                autoPlay={true}
                logoText={customText || undefined}
                config={{
                    ...DEFAULT_INTRO_CONFIG,
                    durationIn: parseFloat(durationIn),
                    durationOut: parseFloat(durationOut)
                }}
                onComplete={(colorObj) => {
                    setLastPlayedColor(colorObj);
                }}
            />

            {/* 2. Interactive Showcase Page */}
            <main className="showcase-container">
                <header className="showcase-header">
                    <span className="badge">
                        <span>✨</span> مستودع انترو المستقل (Intro Animation)
                    </span>
                    <h1 className="showcase-title">Awwwards-Style Intro Animation</h1>
                    <p className="showcase-desc">
                        تأثير انترو الشاشة الكاملة المستخرج من موقع <strong>Truus.co Clone</strong> والمبني باستخدام
                        <strong> GSAP</strong> ومسار <strong>SVG Scribble</strong> مع محاكاة رسم الفرشاة وحركة الـ Wiggle في المنتصف.
                    </p>
                </header>

                {/* Control Panel */}
                <section className="interactive-panel">
                    <div>
                        <h2 className="panel-section-title">لوحة التحكم والتجربة المباشرة</h2>
                        <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                            اضغط على الزر أدناه لتشغيل الانترو في أي وقت أو اختر لوناً محدداً وقم بتعديل النص:
                        </p>
                    </div>

                    <div className="controls-row">
                        <button className="btn-primary" onClick={() => handleReplay()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                            </svg>
                            إعادة تشغيل الانترو الآن
                        </button>
                    </div>

                    {/* Color picker */}
                    <div>
                        <h3 className="panel-section-title" style={{ fontSize: '1rem' }}>اختر لون الخربشة:</h3>
                        <div className="color-swatches">
                            <button
                                className={`color-swatch-btn ${selectedColor === null ? 'active' : ''}`}
                                style={{ background: 'linear-gradient(45deg, #29725f, #82a0ff, #f5693c, #f0befa)' }}
                                title="لون عشوائي"
                                onClick={() => {
                                    setSelectedColor(null);
                                    handleReplay(null);
                                }}
                            />
                            {INTRO_COLORS.map((c) => (
                                <button
                                    key={c.name}
                                    className={`color-swatch-btn ${selectedColor === c.value ? 'active' : ''}`}
                                    style={{ backgroundColor: c.value }}
                                    title={c.name}
                                    onClick={() => {
                                        setSelectedColor(c.value);
                                        handleReplay(c.value);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Custom text */}
                    <div>
                        <h3 className="panel-section-title" style={{ fontSize: '1rem' }}>نص أو شعار مخصص:</h3>
                        <div className="input-group">
                            <input
                                type="text"
                                className="text-input"
                                placeholder="اكتب اسمك أو علامتك التجارية (اتركه فارغاً لشعار Truus الأصلي)..."
                                value={customText}
                                onChange={(e) => setCustomText(e.target.value)}
                            />
                            <button
                                className="btn-primary"
                                style={{ padding: '0.75rem 1.4rem', fontSize: '0.95rem' }}
                                onClick={() => handleReplay()}
                            >
                                تجربة مع النص
                            </button>
                        </div>
                    </div>

                    {/* Duration Sliders */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div>
                            <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '0.4rem' }}>
                                سرعة الدخول: {durationIn} ثانية
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="4"
                                step="0.1"
                                value={durationIn}
                                onChange={(e) => setDurationIn(e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontWeight: 600, fontSize: '0.9rem', display: 'block', marginBottom: '0.4rem' }}>
                                سرعة الخروج: {durationOut} ثانية
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="4"
                                step="0.1"
                                value={durationOut}
                                onChange={(e) => setDurationOut(e.target.value)}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>

                    {lastPlayedColor && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                            آخر لون تم تشغيله: <strong>{lastPlayedColor.name || lastPlayedColor.value}</strong> ({lastPlayedColor.value})
                        </div>
                    )}
                </section>

                {/* Features list */}
                <section className="feature-grid">
                    <div className="feature-card">
                        <span className="feature-icon">🎨</span>
                        <h3 className="feature-heading">ألوان عشوائية حيوية</h3>
                        <p className="feature-text">
                            يختار الانترو لوناً عشوائياً من باليتة مدروسة مع تعديل تلقائي للون الشعار (أبيض أو أسود) حسب تباين الخلفية.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="feature-icon">⚡</span>
                        <h3 className="feature-heading">مبني بـ GSAP خالص</h3>
                        <p className="feature-text">
                            سلاسة 60 إطار في الثانية بالاعتماد على التوقيتات الفيزيائية (Timelines) ودوال التخفيف الاحترافية.
                        </p>
                    </div>

                    <div className="feature-card">
                        <span className="feature-icon">🧩</span>
                        <h3 className="feature-heading">سهل النقل والتضمين</h3>
                        <p className="feature-text">
                            مكون React معزول بنسبة 100% يمكنك نسخه ولصقه في أي مشروع Next.js أو React واستدعاؤه بسطر واحد.
                        </p>
                    </div>
                </section>

                {/* Quick Code Integration */}
                <section className="interactive-panel">
                    <h2 className="panel-section-title">طريقة الاستخدام في مشروعك</h2>
                    <div className="code-card">
                        <pre><code>{`import TransitionScribble from '@/components/TransitionScribble';

export default function App() {
  return (
    <>
      {/* يعمل تلقائياً عند فتح الموقع */}
      <TransitionScribble autoPlay={true} />
      
      {/* باقي محتوى موقعك هنا */}
      <main>
        <h1>مرحباً بك في موقعي</h1>
      </main>
    </>
  );
}`}</code></pre>
                    </div>
                </section>
            </main>
        </>
    );
}
