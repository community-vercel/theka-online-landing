import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* 
 * ── STATIC VIDEOS LIST ──
 * Add your video files to the public/assets/ folder and link them here.
 * For example, if you place a video at "public/assets/videos/guide1.mp4", 
 * its src below should be "/assets/videos/guide1.mp4".
 */
const HELP_VIDEOS = [
    // Uncomment and duplicate the object below for each video you want to show

    {
        id: 1,
        title: 'How to register as a Service Provider',
        description: 'A complete step-by-step walkthrough on setting up your account, uploading documents, and getting verified.',
        src: '/assets/videos/how_to_register_service_provider.mp4',
        type: 'Registration'
    },
    /*
   {
       id: 2,
       title: 'Bidding on your first job',
       description: 'Learn the best practices to win jobs, communicate with clients, and establish your reputation.',
       src: '/assets/videos/bidding_guide.mp4',
       type: 'Tutorial'
   }
   */
];

function ResourcesPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const previousTitle = document.title;
        let metaDescription = document.querySelector('meta[name="description"]');
        let previousDescription = '';

        document.title = "Help & Video Resources - Theka Online";

        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        } else {
            previousDescription = metaDescription.content;
        }
        
        metaDescription.content = "Browse our library of tutorials and video guides to help you register, bid, and succeed with Theka Online.";

        return () => {
            // Restore previous SEO values when navigating away
            document.title = previousTitle;
            if (metaDescription && previousDescription) {
                metaDescription.content = previousDescription;
            }
        };
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
            {/* Header */}
            <header style={{
                background: '#ffffff',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '0 4px 24px rgba(0,0,0,0.02)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            background: '#f1f5f9', border: 'none', padding: '10px 16px',
                            borderRadius: '8px', cursor: 'pointer', fontWeight: 600, color: '#475569',
                            display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Home
                    </button>
                    <h1 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Help Resources</h1>
                </div>
            </header>

            <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 24px' }}>
                <div style={{ marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                        Helpful Video Guides
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
                        Browse our library of tutorials and guides to help you get the most out of Theka Online.
                    </p>
                </div>

                {HELP_VIDEOS.length === 0 ? (
                    <div style={{
                        background: '#ffffff', padding: '60px', borderRadius: '24px',
                        textAlign: 'center', border: '1px dashed #cbd5e1', boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                        <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>No Videos Yet</h3>
                        <p style={{ color: '#64748b', maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>
                            To add videos, place your `.mp4` video files into the <strong>public/assets/videos/</strong> folder and uncomment the array entries in <strong>src/pages/ResourcesPage.jsx</strong>.
                        </p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                        {HELP_VIDEOS.map(video => (
                            <div key={video.id} style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s ease',
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <video
                                    src={video.src}
                                    controls
                                    preload="metadata"
                                    style={{ width: '100%', height: '220px', objectFit: 'cover', background: '#0f172a' }}
                                />
                                <div style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#ff8c00' }}></span>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#ff8c00', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {video.type || 'Video Guide'}
                                        </span>
                                    </div>
                                    <h3 style={{
                                        fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0,
                                        lineHeight: 1.4, marginBottom: '8px'
                                    }}>
                                        {video.title}
                                    </h3>
                                    {video.description && (
                                        <p style={{
                                            fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0
                                        }}>
                                            {video.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}

export default ResourcesPage;
