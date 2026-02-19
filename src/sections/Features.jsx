import React from 'react';

const features = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: 'Location-Based Matching',
        desc: 'Instantly see verified professionals near your exact location. No more searching through endless listings.',
        accent: '#ff8c00',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: 'Real-Time Notifications',
        desc: 'Get instant alerts the moment a professional accepts your request. Track their arrival live on the map.',
        accent: '#6366f1',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: 'Verified Professionals',
        desc: 'Every service provider is background-checked and verified. Your safety and peace of mind, guaranteed.',
        accent: '#10b981',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: 'In-App Communication',
        desc: 'Chat and call directly through the app — no need to share personal numbers until you\'re ready.',
        accent: '#3b82f6',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        title: 'Transparent Pricing',
        desc: 'See upfront pricing before you commit. No hidden fees, no surprises — just honest, fair service.',
        accent: '#f59e0b',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: 'Ratings & Reviews',
        desc: 'Read honest reviews from real customers. Make informed decisions backed by community trust.',
        accent: '#ec4899',
    },
];

const Features = () => {
    return (
        <section id="features" className="features-section" style={{ padding: '120px 0', background: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <div style={{ maxWidth: '600px', marginBottom: '72px' }} className="features-header">
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '5px 14px', borderRadius: '999px',
                        background: 'rgba(255,140,0,0.08)',
                        border: '1px solid rgba(255,140,0,0.2)',
                        marginBottom: '20px'
                    }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff8c00', display: 'block' }} />
                        <span style={{ color: '#ff8c00', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            Features
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900, color: '#0f172a',
                        letterSpacing: '-0.04em', lineHeight: 1.1,
                        marginBottom: '16px'
                    }}>
                        Everything you need,<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #ff8c00, #ffb347)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                        }}>built right in.</span>
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75 }}>
                        Theka Online is packed with features that make hiring professionals safe, fast, and completely transparent.
                    </p>
                </div>

                {/* Grid */}
                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1px',
                    background: '#f1f5f9',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #f1f5f9',
                }}>
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="feature-card"
                            style={{
                                padding: '36px',
                                background: '#ffffff',
                                transition: 'all 0.25s ease',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#fafafa';
                                e.currentTarget.querySelector('.feat-icon').style.background = f.accent;
                                e.currentTarget.querySelector('.feat-icon').style.color = '#ffffff';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#ffffff';
                                e.currentTarget.querySelector('.feat-icon').style.background = f.accent + '14';
                                e.currentTarget.querySelector('.feat-icon').style.color = f.accent;
                            }}
                        >
                            <div
                                className="feat-icon"
                                style={{
                                    width: '48px', height: '48px',
                                    borderRadius: '14px',
                                    background: f.accent + '14',
                                    color: f.accent,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '20px',
                                    transition: 'all 0.25s ease',
                                }}
                            >
                                {f.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1rem', fontWeight: 700,
                                color: '#0f172a', marginBottom: '10px',
                                letterSpacing: '-0.01em'
                            }}>
                                {f.title}
                            </h3>
                            <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.9rem' }}>
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 992px) {
                    .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
                    .features-section { padding: 80px 0 !important; }
                }
                @media (max-width: 640px) {
                    .features-grid { grid-template-columns: 1fr !important; border-radius: 16px !important; }
                    .features-header { text-align: center; margin-bottom: 48px !important; }
                    .feature-card { padding: 32px !important; }
                }
            `}</style>
        </section>
    );
};

export default Features;
