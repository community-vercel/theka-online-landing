import React, { useState, useEffect } from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.shaplogicians.theka_online&hl=en';

const SCREENS = [
    '/assets/screens/screen1.webp',
    '/assets/screens/screen4.webp',
    '/assets/screens/screen3.webp',
];

const PhoneFrame = ({ src, alt, featured, className }) => (
    <div className={`phone-frame ${featured ? 'featured' : ''} ${className || ''}`} style={{
        borderRadius: featured ? '28px' : '20px',
        border: '2px solid rgba(15, 23, 42, 0.15)',
        overflow: 'hidden',
        boxShadow: featured
            ? '0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
            : '0 15px 35px rgba(0,0,0,0.1)',
        background: '#ffffff',
        position: 'relative',
        width: '100%',
        lineHeight: 0,
    }}>
        <img src={src} alt={alt || "App Screen"} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </div>
);

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 80);
        return () => clearTimeout(t);
    }, []);

    const fadeIn = (delay = 0) => ({
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    });

    return (
        <section id="hero" style={{
            position: 'relative',
            minHeight: '100vh',
            paddingTop: '100px',
            paddingBottom: '60px',
            overflow: 'hidden',
            background: '#fafafa',
            display: 'flex',
            alignItems: 'center',
        }}>
            {/* Subtle grid */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '56px 56px',
                maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 100%)',
            }} />

            {/* Glow */}
            <div style={{
                position: 'absolute', top: '-10%', right: '-5%',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 65%)',
                filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
            }} />

            <div className="hero-container" style={{
                maxWidth: '1200px', margin: '0 auto',
                padding: '0 24px',
                position: 'relative', zIndex: 1,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
                gap: '64px',
                alignItems: 'center',
            }}>

                {/* ── LEFT: Text + Stats ── */}
                <div className="hero-text-content">
                    {/* Badge */}
                    <div className="hero-badge" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '6px 14px 6px 8px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '999px',
                        marginBottom: '28px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        ...fadeIn(0),
                    }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                            background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                            borderRadius: '999px', padding: '4px 10px',
                            color: '#fff', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '0.04em',
                            whiteSpace: 'nowrap',
                        }}>★ New</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569', whiteSpace: 'nowrap' }}>
                            Now live on Google Play Store
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 900,
                        color: '#0f172a',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.1,
                        marginBottom: '20px',
                        ...fadeIn(0.1),
                    }}>
                        Find Trusted Pros{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #ff8c00 20%, #ffb347 80%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Near You</span>
                        , Instantly.
                    </h1>

                    {/* Subheadline */}
                    <p style={{
                        fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                        color: '#64748b',
                        lineHeight: 1.7,
                        marginBottom: '40px',
                        maxWidth: '520px',
                        ...fadeIn(0.2),
                    }}>
                        Theka Online connects you with verified, background-checked service professionals — from plumbing to electrical, in minutes.
                    </p>

                    {/* CTA buttons */}
                    <div className="hero-action-btns" style={{
                        display: 'flex', gap: '16px', flexWrap: 'wrap',
                        marginBottom: '48px',
                        ...fadeIn(0.3),
                    }}>
                        <a
                            href={PLAY_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '14px',
                                padding: '14px 32px',
                                background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                                borderRadius: '16px',
                                textDecoration: 'none',
                                boxShadow: '0 4px 24px rgba(255,140,0,0.3)',
                                transition: 'all 0.22s ease',
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
                                <path d="M48 432L264 216 48 0v432z" fill="#EA4335" />
                                <path d="M336 144l-72 72 72 72 96-72-96-72z" fill="#FBBC04" />
                                <path d="M48 0l216 216 72-72L120 0H48z" fill="#4285F4" />
                                <path d="M48 432l216-216 72 72L120 432H48z" fill="#34A853" />
                            </svg>
                            <div>
                                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1 }}>Get it on</div>
                                <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800, lineHeight: 1.2, marginTop: '3px', letterSpacing: '-0.02em' }}>Google Play</div>
                            </div>
                        </a>

                        <a href="#screenshots" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '14px 28px',
                            background: 'transparent',
                            border: '1.5px solid #e2e8f0',
                            borderRadius: '16px',
                            color: '#475569', fontWeight: 700, fontSize: '15px',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                        }}
                        >
                            See Screenshots
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats-row" style={{
                        display: 'flex', gap: '40px', flexWrap: 'wrap',
                        paddingTop: '32px',
                        borderTop: '1px solid #f1f5f9',
                        ...fadeIn(0.4),
                    }}>
                        {[
                            // { val: '10K+', label: 'Downloads' },
                            // { val: '4.8★', label: 'App Rating' },
                            // { val: '500+', label: 'Verified Pros' },
                        ].map((s, i) => (
                            <div key={i}>
                                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.val}</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 700, marginTop: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: Phone Mockups ── */}
                <div className="hero-images-container" style={{
                    position: 'relative',
                    height: '600px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    ...fadeIn(0.3),
                }}>
                    <div style={{
                        position: 'absolute', bottom: '10%', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%', height: '200px',
                        background: 'radial-gradient(ellipse, rgba(255,140,0,0.15) 0%, transparent 70%)',
                        filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none',
                    }} />

                    <div className="p-side-left">
                        <PhoneFrame src={SCREENS[1]} alt="Theka Online app screen showing service Categories" />
                    </div>

                    <div className="p-main-center">
                        <PhoneFrame src={SCREENS[0]} alt="Theka Online app main dashboard" featured />
                    </div>

                    <div className="p-side-right">
                        <PhoneFrame src={SCREENS[2]} alt="Theka Online app professional profile" />
                    </div>

                    <div className="bottom-fade-overlay" style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: '120px', zIndex: 10,
                        background: 'linear-gradient(to top, #fafafa 15%, transparent)',
                        pointerEvents: 'none',
                    }} />
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .hero-container { grid-template-columns: 1fr !important; gap: 80px !important; text-align: center; }
                    .hero-text-content { display: flex; flex-direction: column; align-items: center; }
                    .hero-action-btns { justify-content: center; }
                    .hero-stats-row { justify-content: center; }
                    .hero-images-container { height: 500px !important; width: 100%; max-width: 600px; margin: 0 auto; }
                    .p-side-left { width: 140px !important; left: 10% !important; top: 60px !important; }
                    .p-main-center { width: 190px !important; }
                    .p-side-right { width: 140px !important; right: 10% !important; top: 60px !important; }
                }

                @media (min-width: 1025px) {
                    .p-side-left { position: absolute; left: 0; top: 100px; width: 180px; z-index: 1; transform: rotate(-8deg); opacity: 0.7; transition: all 0.4s ease; }
                    .p-main-center { position: absolute; left: 50%; transform: translateX(-50%); top: 0; width: 230px; z-index: 3; transition: all 0.4s ease; }
                    .p-side-right { position: absolute; right: 0; top: 100px; width: 180px; z-index: 1; transform: rotate(8deg); opacity: 0.7; transition: all 0.4s ease; }
                    
                    .p-side-left:hover { opacity: 1; transform: rotate(-4deg) translateY(-10px); }
                    .p-main-center:hover { transform: translateX(-50%) translateY(-12px) scale(1.03); }
                    .p-side-right:hover { opacity: 1; transform: rotate(4deg) translateY(-10px); }
                }

                @media (max-width: 640px) {
                    #hero { padding-top: 80px !important; }
                    .hero-badge { transform: scale(0.9); margin-bottom: 20px !important; }
                    .hero-images-container { height: 400px !important; }
                    .p-side-left { width: 110px !important; left: 0 !important; top: 50px !important; }
                    .p-main-center { width: 155px !important; }
                    .p-side-right { width: 110px !important; right: 0 !important; top: 50px !important; }
                    .hero-stats-row { gap: 20px !important; }
                }

                @media (max-width: 400px) {
                    .hero-images-container { height: 340px !important; }
                    .p-side-left { width: 95px !important; }
                    .p-main-center { width: 135px !important; }
                    .p-side-right { width: 95px !important; }
                    .hero-badge { flex-direction: column; border-radius: 20px !important; padding: 12px !important; gap: 4px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
