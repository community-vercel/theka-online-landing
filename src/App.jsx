import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Screenshots from './sections/Screenshots';
import CTA from './sections/CTA';

const LOGO_URL = 'https://play-lh.googleusercontent.com/UOGpk5_SOc9SfmhOt2iHKULwVVlRzDwIZzTM0XXrkpfbXn6YyugxWk2lA-Y6Y-WkriF3dFBk7_hqjZz2NbMh=w240-h480-rw';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.shaplogicians.theka_online&hl=en';

const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Download', href: '#download' },
];

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            const el = document.documentElement;
            const scrolled = el.scrollTop || document.body.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            setProgress(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#ffffff', fontFamily: "'Inter', system-ui, sans-serif" }}>

            {/* ── Scroll Progress Bar ── */}
            <div style={{
                position: 'fixed', top: 0, left: 0, zIndex: 2000,
                height: '3px',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #ff8c00, #ffb347)',
                transition: 'width 0.1s linear',
                borderRadius: '0 2px 2px 0',
                boxShadow: '0 0 8px rgba(255,140,0,0.5)',
                pointerEvents: 'none',
            }} />

            {/* ── Navbar ── */}
            <header style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(250,250,250,0.6)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
                boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.05)' : 'none',
            }}>
                <div style={{
                    maxWidth: '1200px', margin: '0 auto',
                    padding: '0 32px', height: '68px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                    {/* Brand */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <img
                            src={LOGO_URL}
                            alt="Theka Online"
                            style={{
                                width: '38px', height: '38px',
                                borderRadius: '10px', objectFit: 'cover',
                                boxShadow: '0 2px 10px rgba(255,140,0,0.2)',
                            }}
                        />
                        <div>
                            <div style={{
                                fontSize: '16px', fontWeight: 900, color: '#0f172a',
                                letterSpacing: '-0.03em', lineHeight: 1,
                            }}>Theka Online</div>
                            <div style={{
                                fontSize: '10px', fontWeight: 600, color: '#94a3b8',
                                letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px',
                            }}>Reliable Service Pros</div>
                        </div>
                    </a>

                    {/* Nav links */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                style={{
                                    fontSize: '14px', fontWeight: 600,
                                    color: '#64748b', textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    letterSpacing: '-0.01em',
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = '#0f172a'}
                                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <a
                        href={PLAY_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '9px 18px',
                            background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                            borderRadius: '10px',
                            color: '#ffffff', fontWeight: 700, fontSize: '13px',
                            textDecoration: 'none',
                            letterSpacing: '-0.01em',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 12px rgba(255,140,0,0.35)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,140,0,0.45)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 12px rgba(255,140,0,0.35)';
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 512 512" fill="none">
                            <path d="M48 432L264 216 48 0v432z" fill="#EA4335" />
                            <path d="M336 144l-72 72 72 72 96-72-96-72z" fill="#FBBC04" />
                            <path d="M48 0l216 216 72-72L120 0H48z" fill="#4285F4" />
                            <path d="M48 432l216-216 72 72L120 432H48z" fill="#34A853" />
                        </svg>
                        Download App
                    </a>
                </div>
            </header>

            {/* ── Sections ── */}
            <main>
                <Hero />
                <Features />
                <Screenshots />
                <CTA />
            </main>

            {/* ── Footer ── */}
            <footer style={{ background: '#0f172a', padding: '80px 32px 40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr',
                        gap: '64px',
                        marginBottom: '64px',
                        paddingBottom: '64px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>
                        {/* Brand */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                <img src={LOGO_URL} alt="Theka Online" style={{ width: '36px', height: '36px', borderRadius: '9px', objectFit: 'cover' }} />
                                <span style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em' }}>Theka Online</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, fontSize: '0.9rem', maxWidth: '300px', marginBottom: '28px' }}>
                                The leading platform connecting users with trusted, verified professionals. Quality service, guaranteed.
                            </p>
                            {/* Footer Play Store badge */}
                            <a
                                href={PLAY_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                                    padding: '10px 18px',
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                            >
                                <svg width="18" height="18" viewBox="0 0 512 512" fill="none">
                                    <path d="M48 432L264 216 48 0v432z" fill="#EA4335" />
                                    <path d="M336 144l-72 72 72 72 96-72-96-72z" fill="#FBBC04" />
                                    <path d="M48 0l216 216 72-72L120 0H48z" fill="#4285F4" />
                                    <path d="M48 432l216-216 72 72L120 432H48z" fill="#34A853" />
                                </svg>
                                <div>
                                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1 }}>Get it on</div>
                                    <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700, lineHeight: 1.2, marginTop: '2px' }}>Google Play</div>
                                </div>
                            </a>
                        </div>

                        {/* Product links */}
                        <div>
                            <h4 style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Product</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['Features', 'How it Works', 'Screenshots', 'Download'].map(item => (
                                    <li key={item}>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                                        >{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company links */}
                        <div>
                            <h4 style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Company</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map(item => (
                                    <li key={item}>
                                        <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                                        >{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{
                        display: 'flex', flexWrap: 'wrap', gap: '16px',
                        justifyContent: 'space-between', alignItems: 'center',
                    }}>
                        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
                            © {new Date().getFullYear()} Theka Online. All rights reserved.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
                            Made with ❤️ by Sharplogicians
                        </p>
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html { scroll-behavior: smooth; }
                body { margin: 0; -webkit-font-smoothing: antialiased; }
                @media (max-width: 768px) {
                    nav { display: none !important; }
                }
            `}</style>
        </div>
    );
}

export default App;
