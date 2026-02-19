import React, { useState, useEffect } from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.shaplogicians.theka_online&hl=en';

const SCREENS = [
    'https://play-lh.googleusercontent.com/KNTwQP1WbPcTau5hf5nL6JOo6sp1k3yFcDzzL1KFo2qh33u-B6Ef7vBLzexxxxeNAlgK8TI7jhpVf2ogbKd2Gw=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/FcqfLzd5u6W-qIY1QdprZGOF5cg8Qc-oexQnh3EvZmNgX55kedtodmjH5mp_DXIQH35mTUmGG4F7se1L91bi_Q=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/1Lgw5tfN61Aw0ERCy1oBmbJmk-hI-1q3nECjhhFr5QuMV-kkCcVnbKlFNdW0CvvSulkM9CK-NyM-4OaJYTm244Y=w2560-h1440-rw',
];

const PhoneFrame = ({ src, featured, style: extraStyle = {} }) => (
    <div style={{
        borderRadius: featured ? '40px' : '34px',
        border: `${featured ? '9px' : '7px'} solid #0f172a`,
        overflow: 'hidden',
        boxShadow: featured
            ? '0 40px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)'
            : '0 20px 50px rgba(0,0,0,0.18)',
        background: '#0f172a',
        aspectRatio: '9/19',
        position: 'relative',
        ...extraStyle,
    }}>
        {/* Notch */}
        <div style={{
            position: 'absolute', top: '10px', left: '50%',
            transform: 'translateX(-50%)',
            width: '56px', height: '6px',
            background: '#0f172a', borderRadius: '999px', zIndex: 2,
        }} />
        <img src={src} alt="App Screen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            paddingTop: '80px',
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

            {/* Orange glow — top right */}
            <div style={{
                position: 'absolute', top: '-10%', right: '-5%',
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 65%)',
                filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none',
            }} />

            <div style={{
                maxWidth: '1200px', margin: '0 auto',
                padding: '60px 32px',
                position: 'relative', zIndex: 1,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
            }}>

                {/* ── LEFT: Text + Stats ── */}
                <div>
                    {/* Badge */}
                    <div style={{
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
                        }}>★ New</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>
                            Now live on Google Play Store
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                        fontWeight: 900,
                        color: '#0f172a',
                        letterSpacing: '-0.04em',
                        lineHeight: 1.08,
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
                        fontSize: '1.05rem',
                        color: '#64748b',
                        lineHeight: 1.75,
                        marginBottom: '36px',
                        maxWidth: '460px',
                        ...fadeIn(0.2),
                    }}>
                        Theka Online connects you with verified, background-checked service professionals — from plumbing to electrical, in minutes.
                    </p>

                    {/* CTA buttons */}
                    <div style={{
                        display: 'flex', gap: '14px', flexWrap: 'wrap',
                        marginBottom: '48px',
                        ...fadeIn(0.3),
                    }}>
                        {/* Play Store button */}
                        <a
                            href={PLAY_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '14px',
                                padding: '14px 28px',
                                background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                                borderRadius: '14px',
                                textDecoration: 'none',
                                boxShadow: '0 4px 20px rgba(255,140,0,0.35)',
                                transition: 'all 0.22s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(255,140,0,0.45)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,140,0,0.35)'; }}
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

                        {/* Secondary button */}
                        <a href="#screenshots" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '14px 24px',
                            background: 'transparent',
                            border: '1.5px solid #e2e8f0',
                            borderRadius: '14px',
                            color: '#475569', fontWeight: 700, fontSize: '14px',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff8c00'; e.currentTarget.style.color = '#ff8c00'; e.currentTarget.style.background = 'rgba(255,140,0,0.04)'; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'transparent'; }}
                        >
                            See Screenshots
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: 'flex', gap: '36px', flexWrap: 'wrap',
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
                                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.val}</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, marginTop: '4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: Phone Mockups ── */}
                <div style={{
                    position: 'relative',
                    height: '580px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    ...fadeIn(0.3),
                }}>
                    {/* Glow behind phones */}
                    <div style={{
                        position: 'absolute', bottom: '40px', left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%', height: '200px',
                        background: 'radial-gradient(ellipse, rgba(255,140,0,0.2) 0%, transparent 70%)',
                        filter: 'blur(30px)', zIndex: 0, pointerEvents: 'none',
                    }} />

                    {/* Left phone */}
                    <div style={{
                        position: 'absolute', left: '0', top: '80px',
                        width: '175px', zIndex: 1,
                        transform: 'rotate(-6deg)',
                        opacity: 0.7,
                        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'rotate(-4deg) translateY(-10px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'rotate(-6deg)'; }}
                    >
                        <PhoneFrame src={SCREENS[1]} />
                    </div>

                    {/* Center phone */}
                    <div style={{
                        position: 'absolute', left: '50%',
                        transform: 'translateX(-50%)',
                        top: '0', width: '210px', zIndex: 3,
                        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(-50%) translateY(-12px) scale(1.03)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(-50%)'; }}
                    >
                        <PhoneFrame src={SCREENS[0]} featured />
                    </div>

                    {/* Right phone */}
                    <div style={{
                        position: 'absolute', right: '0', top: '80px',
                        width: '175px', zIndex: 1,
                        transform: 'rotate(6deg)',
                        opacity: 0.7,
                        transition: 'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'rotate(4deg) translateY(-10px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'rotate(6deg)'; }}
                    >
                        <PhoneFrame src={SCREENS[2]} />
                    </div>

                    {/* Bottom fade */}
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: '160px', zIndex: 10,
                        background: 'linear-gradient(to top, #fafafa 15%, transparent)',
                        pointerEvents: 'none',
                    }} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
