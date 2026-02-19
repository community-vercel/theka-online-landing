import React, { useState } from 'react';

const ALL_SCREENS = [
    '/assets/screens/screen1.webp',
    '/assets/screens/screen2.webp',
    '/assets/screens/screen3.webp',
    '/assets/screens/screen4.webp',
    '/assets/screens/screen5.webp',
    '/assets/screens/screen6.webp',
];

const LABELS = ['Home Screen', 'Browse Services', 'Find Nearby', 'Book a Pro', 'Track Request', 'Reviews'];

const Screenshots = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="screenshots" className="screenshots-section" style={{ padding: '120px 0', background: '#fafafa', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Two-column layout */}
                <div className="screenshots-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                }}>
                    {/* Left: text + thumbnails */}
                    <div className="screenshots-text">
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '5px 14px', borderRadius: '999px',
                            background: 'rgba(255,140,0,0.08)',
                            border: '1px solid rgba(255,140,0,0.2)',
                            marginBottom: '20px'
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff8c00', display: 'block' }} />
                            <span style={{ color: '#ff8c00', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                App Screenshots
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                            fontWeight: 900, color: '#0f172a',
                            letterSpacing: '-0.04em', lineHeight: 1.1,
                            marginBottom: '16px'
                        }}>
                            Beautifully designed<br />
                            <span style={{
                                background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                            }}>for simplicity.</span>
                        </h2>

                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, marginBottom: '40px', maxWidth: '420px' }} className="screenshots-desc">
                            Every screen is crafted to make your experience effortless — from finding a pro to tracking their arrival.
                        </p>

                        {/* Thumbnail grid */}
                        <div className="thumb-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '12px',
                        }}>
                            {ALL_SCREENS.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    style={{
                                        padding: 0, border: 'none', cursor: 'pointer',
                                        borderRadius: '16px', overflow: 'hidden',
                                        outline: active === i ? `2.5px solid #ff8c00` : '2.5px solid transparent',
                                        outlineOffset: '2px',
                                        transition: 'all 0.25s ease',
                                        transform: active === i ? 'scale(1.04)' : 'scale(1)',
                                        boxShadow: active === i
                                            ? '0 8px 24px rgba(255,140,0,0.25)'
                                            : '0 2px 8px rgba(0,0,0,0.08)',
                                        aspectRatio: '9/16',
                                        background: '#0f172a',
                                    }}
                                >
                                    <img
                                        src={src}
                                        alt={LABELS[i]}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Label */}
                        <div style={{
                            marginTop: '24px',
                            display: 'flex', alignItems: 'center', gap: '10px'
                        }} className="active-label">
                            <div style={{
                                width: '8px', height: '8px', borderRadius: '50%',
                                background: '#ff8c00', flexShrink: 0
                            }} />
                            <span style={{ color: '#475569', fontWeight: 600, fontSize: '14px' }}>
                                {LABELS[active]}
                            </span>
                        </div>
                    </div>

                    {/* Right: large phone display */}
                    <div className="phone-display" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        {/* Background glow */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '400px', height: '400px',
                            background: 'radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 65%)',
                            filter: 'blur(30px)', pointerEvents: 'none'
                        }} />

                        {/* Phone */}
                        <div style={{
                            width: '280px',
                            borderRadius: '32px',
                            border: '2px solid rgba(15, 23, 42, 0.15)',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                            background: '#ffffff',
                            position: 'relative',
                            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                            lineHeight: 0,
                        }} className="main-phone">
                            {/* Removed Notch */}
                            <img
                                key={active}
                                src={ALL_SCREENS[active]}
                                alt={LABELS[active]}
                                style={{
                                    width: '100%', height: 'auto',
                                    display: 'block',
                                    animation: 'fadeInImg 0.35s ease',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInImg {
                    from { opacity: 0; transform: scale(0.97); }
                    to { opacity: 1; transform: scale(1); }
                }
                
                @media (max-width: 992px) {
                    .screenshots-grid { grid-template-columns: 1fr !important; gap: 64px !important; text-align: center; }
                    .screenshots-desc { margin: 0 auto 40px !important; }
                    .active-label { justify-content: center; }
                    .thumb-grid { max-width: 480px; margin: 0 auto; }
                    .phone-display { order: -1; }
                    .screenshots-section { padding: 80px 0 !important; }
                }

                @media (max-width: 480px) {
                    .main-phone { width: 240px !important; border-radius: 20px !important; border-width: 2px !important; }
                    .thumb-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 8px !important; }
                }
            `}</style>
        </section>
    );
};

export default Screenshots;
