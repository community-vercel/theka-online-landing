import React from 'react';

function Resources() {
    return (
        <section id="resources" style={{ padding: '100px 24px', background: '#f8fafc' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 900,
                        color: '#0f172a',
                        marginBottom: '16px',
                        letterSpacing: '-0.02em'
                    }}>
                        Helpful Resources
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#64748b',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Explore our guides, videos, and materials to get the most out of Theka Online. 
                        (Upload your helpful materials such as images, videos, or PDFs here).
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {/* Placeholder for Video */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '200px',
                            background: '#e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#94a3b8'
                        }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#ff8c00', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Video Guide</span>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginTop: '8px', marginBottom: '12px' }}>How to Use the App</h3>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>Step-by-step video instructions goes here.</p>
                        </div>
                    </div>

                    {/* Placeholder for Document */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '200px',
                            background: '#f1f5f9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#94a3b8'
                        }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Document</span>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginTop: '8px', marginBottom: '12px' }}>User Manual PDF</h3>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>Detailed manual for service providers.</p>
                        </div>
                    </div>

                    {/* Placeholder for Image/Infographic */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '200px',
                            background: '#e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#94a3b8'
                        }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                        </div>
                        <div style={{ padding: '24px' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Infographic</span>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginTop: '8px', marginBottom: '12px' }}>Safety Guidelines</h3>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>Important safety policies and guidelines images.</p>
                        </div>
                    </div>
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
                        Need to upload more? You can add as many items as you want to this section in the code.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Resources;
