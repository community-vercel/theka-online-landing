import React from 'react';

const testimonials = [
    {
        name: 'Ahmed Khan',
        location: 'Karachi',
        rating: 5,
        quote: 'Finding a reliable plumber in Karachi used to be a nightmare. Thanks to Theka Online, I found a pro in 10 minutes who fixed my leakage perfectly at a fair price.',
        initials: 'AK',
        color: '#ff8c00',
    },
    {
        name: 'Sara Baloch',
        location: 'Quetta',
        rating: 5,
        quote: 'Highly professional service! The electrician arrived on time and was very helpful. I love that all pros are verified, it makes me feel safe as a woman living alone.',
        initials: 'SB',
        color: '#6366f1',
    },
    {
        name: 'Bilal Siddiqui',
        location: 'Lahore',
        rating: 5,
        quote: 'Amazing platform for finding AC repair guys in Lahore. The pricing was transparent, and I didn\'t have to haggle for hours. Highly recommended for busy professionals.',
        initials: 'BS',
        color: '#10b981',
    },
    {
        name: 'Amna Mansoor',
        location: 'Islamabad',
        rating: 5,
        quote: 'I used the home salon service and it was fantastic. The beautician was very skilled and followed all hygiene protocols. Best app for home services in Islamabad!',
        initials: 'AM',
        color: '#3b82f6',
    },
    {
        name: 'Zohaib Sheikh',
        location: 'Faisalabad',
        rating: 5,
        quote: 'Great experience! Needed a carpenter for some quick furniture repairs. The app matched me with a skilled guy nearby. Saved me a lot of time and effort.',
        initials: 'ZS',
        color: '#ec4899',
    },
    {
        name: 'Maryam Javed',
        location: 'Peshawar',
        rating: 5,
        quote: 'Theka Online is a game changer for Peshawar. I found a verified painting crew for my new home through the app. The quality of work was outstanding.',
        initials: 'MJ',
        color: '#f59e0b',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section" style={{ padding: '120px 0', background: '#fafafa' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 72px' }} className="testi-header">
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '5px 14px', borderRadius: '999px',
                        background: 'rgba(255,140,0,0.08)',
                        border: '1px solid rgba(255,140,0,0.2)',
                        marginBottom: '20px'
                    }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff8c00', display: 'block' }} />
                        <span style={{ color: '#ff8c00', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            Testimonials
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900, color: '#0f172a',
                        letterSpacing: '-0.04em', lineHeight: 1.1,
                        marginBottom: '20px'
                    }}>
                        Trusted by <span style={{ color: '#ff8c00' }}>Thousands</span> of Residents<br /> Across Pakistan.
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.75 }}>
                        Join the growing community of users who rely on Theka Online for their daily service needs. Quality, safety, and reliability in every visit.
                    </p>
                </div>

                {/* Grid */}
                <div className="testi-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '32px',
                }}>
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="testi-card"
                            style={{
                                background: '#ffffff',
                                padding: '32px',
                                borderRadius: '24px',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                                {[...Array(t.rating)].map((_, idx) => (
                                    <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#ffb347">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p style={{
                                color: '#334155',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                fontStyle: 'italic',
                                marginBottom: '24px',
                                flexGrow: 1,
                            }}>
                                "{t.quote}"
                            </p>

                            {/* User Profile */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                                <div style={{
                                    width: '44px', height: '44px',
                                    borderRadius: '12px',
                                    background: t.color + '14',
                                    color: t.color,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '14px', fontWeight: 700,
                                    flexShrink: 0,
                                }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '15px' }}>{t.name}</div>
                                    <div style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 600 }}>{t.location}, PK</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .testi-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    border-color: rgba(255,140,0,0.2);
                }

                @media (max-width: 992px) {
                    .testi-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
                    .testimonials-section { padding: 80px 0 !important; }
                }

                @media (max-width: 640px) {
                    .testi-grid { grid-template-columns: 1fr !important; }
                    .testi-header { margin-bottom: 48px !important; }
                    .testi-card { padding: 24px !important; }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
