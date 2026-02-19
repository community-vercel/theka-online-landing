import React, { useState } from 'react';

const ALL_SCREENS = [
    'https://play-lh.googleusercontent.com/KNTwQP1WbPcTau5hf5nL6JOo6sp1k3yFcDzzL1KFo2qh33u-B6Ef7vBLzexxxxeNAlgK8TI7jhpVf2ogbKd2Gw=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/WZhtiktwBX5_K2qdGVTg1GpreUmYxbcAmTzILw1PXO1VmHN_39hdcB2Al8q-by8z2DMXO6DsZkRiKlCxgGV0=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/TNS8TEKv9ZKOUhrqQgacrXfkegnA4wmsimit6bDmKhAzy9mbPa7GonklyMfB1tn9ssxWSDOb57mdUQc4pw4YHzk=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/FcqfLzd5u6W-qIY1QdprZGOF5cg8Qc-oexQnh3EvZmNgX55kedtodmjH5mp_DXIQH35mTUmGG4F7se1L91bi_Q=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/AAWIOwCDiBELSYeboJmXWLPtGBzkMHg3DpkktLI31bi5ERg8FGBptcrH_yfl3fbkKmMrjcN5lDT_xoWnR6id_3U=w2560-h1440-rw',
    'https://play-lh.googleusercontent.com/1Lgw5tfN61Aw0ERCy1oBmbJmk-hI-1q3nECjhhFr5QuMV-kkCcVnbKlFNdW0CvvSulkM9CK-NyM-4OaJYTm244Y=w2560-h1440-rw',
];

const LABELS = ['Home Screen', 'Browse Services', 'Find Nearby', 'Book a Pro', 'Track Request', 'Reviews'];

const Screenshots = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="screenshots" style={{ padding: '120px 0', background: '#fafafa', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

                {/* Two-column layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                }}>
                    {/* Left: text + thumbnails */}
                    <div>
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

                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, marginBottom: '40px', maxWidth: '420px' }}>
                            Every screen is crafted to make your experience effortless — from finding a pro to tracking their arrival.
                        </p>

                        {/* Thumbnail grid */}
                        <div style={{
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
                            marginTop: '20px',
                            display: 'flex', alignItems: 'center', gap: '10px'
                        }}>
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
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
                            borderRadius: '48px',
                            border: '10px solid #0f172a',
                            overflow: 'hidden',
                            boxShadow: '0 50px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08)',
                            background: '#0f172a',
                            aspectRatio: '9/19',
                            position: 'relative',
                            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                        }}>
                            {/* Status bar notch */}
                            <div style={{
                                position: 'absolute', top: '12px', left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80px', height: '7px',
                                background: '#0f172a', borderRadius: '999px', zIndex: 2
                            }} />
                            <img
                                key={active}
                                src={ALL_SCREENS[active]}
                                alt={LABELS[active]}
                                style={{
                                    width: '100%', height: '100%',
                                    objectFit: 'cover', display: 'block',
                                    animation: 'fadeIn 0.35s ease',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.97); }
                    to { opacity: 1; transform: scale(1); }
                }
                @media (max-width: 768px) {
                    #screenshots .two-col { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Screenshots;
