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
        <section id="download" className="cta-section" style={{ padding: '120px 24px', background: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="cta-card" style={{
                    background: '#0f172a',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: 'clamp(56px, 8vw, 96px)',
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
                        position: 'absolute', top: '-100px', right: '-100px',
                        width: '400px', height: '400px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,140,0,0.2) 0%, transparent 65%)',
                        filter: 'blur(40px)', zIndex: 0
                    }} />
                    {/* Subtle blue glow bottom-left */}
                    <div style={{
                        position: 'absolute', bottom: '-80px', left: '-80px',
                        width: '300px', height: '300px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)',
                        filter: 'blur(40px)', zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Two-col layout */}
                        <div className="cta-content-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr auto',
                            gap: '48px',
                            alignItems: 'center',
                            marginBottom: '64px',
                        }}>
                            {/* Left text */}
                            <div className="cta-text">
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '5px 14px', borderRadius: '999px',
                                    background: 'rgba(255,140,0,0.12)',
                                    border: '1px solid rgba(255,140,0,0.25)',
                                    marginBottom: '20px'
                                }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff8c00', display: 'block' }} />
                                    <span style={{ color: '#ffb347', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                        Free to Download
                                    </span>
                                </div>

                                <h2 style={{
                                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                                    fontWeight: 900, color: '#ffffff',
                                    letterSpacing: '-0.04em', lineHeight: 1.1,
                                    marginBottom: '16px', maxWidth: '560px'
                                }}>
                                    Ready to get started?<br />
                                    <span style={{
                                        background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                                    }}>Download the app today.</span>
                                </h2>

                                <p style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontSize: '1rem', lineHeight: 1.75,
                                    maxWidth: '460px'
                                }} className="cta-para">
                                    Join thousands of users who trust Theka Online to connect with verified professionals in their area.
                                </p>
                            </div>

                            {/* Right: Play Store button */}
                            <div style={{ flexShrink: 0 }} className="cta-btn-container">
                                <a
                                    href={PLAY_STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '16px',
                                        padding: '20px 36px',
                                        background: '#ffffff',
                                        borderRadius: '18px',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                                        transition: 'all 0.25s cubic-bezier(0.4,0,0.2,1)',
                                        whiteSpace: 'nowrap',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                                    }}
                                >
                                    <svg width="36" height="36" viewBox="0 0 512 512" fill="none">
                                        <path d="M48 432L264 216 48 0v432z" fill="#EA4335" />
                                        <path d="M336 144l-72 72 72 72 96-72-96-72z" fill="#FBBC04" />
                                        <path d="M48 0l216 216 72-72L120 0H48z" fill="#4285F4" />
                                        <path d="M48 432l216-216 72 72L120 432H48z" fill="#34A853" />
                                    </svg>
                                    <div>
                                        <div style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1 }}>Get it on</div>
                                        <div style={{ color: '#0f172a', fontSize: '22px', fontWeight: 800, lineHeight: 1.2, marginTop: '4px', letterSpacing: '-0.02em' }}>Google Play</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Stats divider */}
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
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .cta-content-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
                    .cta-text { display: flex; flex-direction: column; align-items: center; }
                    .cta-para { margin: 0 auto !important; }
                    .cta-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
                    .cta-section { padding: 80px 24px !important; }
                    .cta-card { padding: 56px 32px !important; }
                }

                @media (max-width: 480px) {
                    .cta-stats-grid { grid-template-columns: 1fr !important; text-align: center; gap: 32px !important; }
                    .cta-btn-container a { padding: 16px 28px !important; }
                }
            `}</style>
        </section>
    );
};

export default CTA;
