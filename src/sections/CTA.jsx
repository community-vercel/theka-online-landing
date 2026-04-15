import React from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.shaplogicians.theka_online&hl=en';

const stats = [
    // { val: '10K+', label: 'Downloads' },
    // { val: '4.8★', label: 'App Rating' },
    // { val: '500+', label: 'Verified Pros' },
    // { val: '24/7', label: 'Support' },
];

const CTA = () => {
    return (
        <section id="download" className="cta-section" style={{ padding: '120px 24px', background: '#f8fafc', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="cta-card" style={{
                    background: '#0f172a',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: 'clamp(56px, 8vw, 96px)',
                    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
                }}>
                    {/* Subtle grid overlay */}
                    <div style={{
                        position: 'absolute', inset: 0, zIndex: 0,
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }} />

                    {/* Orange accent glow top-right */}
                    <div style={{
                        position: 'absolute', top: '-100px', right: '10%',
                        width: '500px', height: '500px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 65%)',
                        filter: 'blur(50px)', zIndex: 0,
                        pointerEvents: 'none',
                    }} />
                    {/* Subtle blue glow bottom-left */}
                    <div style={{
                        position: 'absolute', bottom: '-150px', left: '-100px',
                        width: '400px', height: '400px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 65%)',
                        filter: 'blur(50px)', zIndex: 0,
                        pointerEvents: 'none',
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Two-col layout */}
                        <div className="cta-content-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: '1.2fr 1fr',
                            gap: '64px',
                            alignItems: 'center',
                            marginBottom: stats.length > 0 ? '64px' : '0',
                        }}>
                            {/* Left text */}
                            <div className="cta-text">
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '6px 16px', borderRadius: '999px',
                                    background: 'rgba(255,140,0,0.15)',
                                    border: '1px solid rgba(255,140,0,0.3)',
                                    marginBottom: '32px',
                                    boxShadow: '0 4px 14px rgba(255,140,0,0.1)'
                                }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff8c00', display: 'block', boxShadow: '0 0 8px #ff8c00' }} />
                                    <span style={{ color: '#ffb347', fontWeight: 800, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                        Free to Download
                                    </span>
                                </div>

                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
                                    fontWeight: 900, color: '#ffffff',
                                    letterSpacing: '-0.03em', lineHeight: 1.1,
                                    marginBottom: '24px', maxWidth: '600px'
                                }}>
                                    Ready to get started?<br />
                                    <span style={{
                                        background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                        display: 'inline-block', marginTop: '8px'
                                    }}>Download the app today.</span>
                                </h2>

                                <p style={{
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '1.125rem', lineHeight: 1.8,
                                    maxWidth: '480px',
                                    marginBottom: '48px',
                                    fontWeight: 400
                                }} className="cta-para">
                                    Join thousands of users who trust Theka Online to connect with verified professionals in their area.
                                </p>

                                {/* Play Store button container moved to left section */}
                                <div className="cta-btn-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                    <a
                                        href={PLAY_STORE_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '16px',
                                            padding: '20px 40px',
                                            background: '#ffffff',
                                            borderRadius: '20px',
                                            textDecoration: 'none',
                                            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                                            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                                            whiteSpace: 'nowrap',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5), 0 0 0 4px rgba(255,255,255,0.1)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
                                        }}
                                    >
                                        <svg width="38" height="38" viewBox="0 0 512 512" fill="none">
                                            <path d="M48 432L264 216 48 0v432z" fill="#EA4335" />
                                            <path d="M336 144l-72 72 72 72 96-72-96-72z" fill="#FBBC04" />
                                            <path d="M48 0l216 216 72-72L120 0H48z" fill="#4285F4" />
                                            <path d="M48 432l216-216 72 72L120 432H48z" fill="#34A853" />
                                        </svg>
                                        <div>
                                            <div style={{ color: '#64748b', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>Get it on</div>
                                            <div style={{ color: '#0f172a', fontSize: '24px', fontWeight: 900, lineHeight: 1.2, marginTop: '4px', letterSpacing: '-0.02em' }}>Google Play</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Right: Premium Dual-Screen visuals */}
                            <div className="cta-screen-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '400px' }}>
                                {/* Vibrant glow behind screens */}
                                <div style={{
                                    position: 'absolute', top: '20%', left: '20%', right: '20%', bottom: '20%',
                                    background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                                    opacity: 0.25, filter: 'blur(70px)', borderRadius: '50%', zIndex: 0
                                }} />
                                
                                {/* Background Screen */}
                                <img 
                                    src="/assets/screens/screen2.webp" 
                                    alt="Theka Online app screen 2" 
                                    className="cta-screen-secondary"
                                    style={{
                                        position: 'absolute',
                                        zIndex: 1,
                                        width: '85%',
                                        maxWidth: '280px',
                                        borderRadius: '36px',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                                        transform: 'rotate(8deg) translateX(25%) translateY(-20px)',
                                        opacity: 0.5,
                                        filter: 'blur(2px)'
                                    }}
                                />

                                {/* Main Foreground Screen */}
                                <img 
                                    src="/assets/screens/screen1.webp" 
                                    alt="Theka Online app screen 1" 
                                    className="cta-screen-primary"
                                    style={{
                                        position: 'relative',
                                        zIndex: 2,
                                        width: '100%',
                                        maxWidth: '300px',
                                        borderRadius: '36px',
                                        boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 6px rgba(255,255,255,0.05)',
                                        transform: 'rotate(-5deg) translateY(-10px)',
                                        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) translateY(-20px) scale(1.05)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-5deg) translateY(-10px) scale(1)'}
                                />
                            </div>
                        </div>

                        {/* Stats divider */}
                        {stats.length > 0 && (
                            <div className="cta-stats-grid" style={{
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                paddingTop: '48px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '32px',
                            }}>
                                {stats.map((s, i) => (
                                    <div key={i}>
                                        <div style={{
                                            fontSize: '2.2rem', fontWeight: 900,
                                            color: '#ff8c00', letterSpacing: '-0.04em',
                                            lineHeight: 1, marginBottom: '6px'
                                        }}>{s.val}</div>
                                        <div style={{
                                            color: 'rgba(255,255,255,0.4)',
                                            fontSize: '13px', fontWeight: 600,
                                            letterSpacing: '0.04em', textTransform: 'uppercase'
                                        }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .cta-content-grid { grid-template-columns: 1fr !important; gap: 64px !important; text-align: center; }
                    .cta-text { display: flex; flex-direction: column; align-items: center; }
                    .cta-para { margin: 0 auto 40px auto !important; }
                    .cta-btn-container { justify-content: center; }
                    .cta-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
                    .cta-section { padding: 80px 24px !important; }
                    .cta-card { padding: 64px 32px !important; }
                    .cta-screen-secondary { display: none !important; }
                    .cta-screen-primary { transform: rotate(0) translateY(0) !important; margin: 0 auto; }
                    .cta-screen-primary:hover { transform: translateY(-10px) !important; }
                    .cta-screen-container { min-height: auto !important; }
                }

                @media (max-width: 480px) {
                    .cta-stats-grid { grid-template-columns: 1fr !important; text-align: center; gap: 32px !important; }
                    .cta-btn-container a { padding: 18px 28px !important; width: 100%; justify-content: center; }
                }
            `}</style>
        </section>
    );
};

export default CTA;
