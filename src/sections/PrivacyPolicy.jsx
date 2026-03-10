import React from 'react';

function PrivacyPolicy({ onClose }) {
    return (
        <div style={{ minHeight: '100vh', background: '#ffffff', paddingTop: '100px', paddingBottom: '80px' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button
                        onClick={onClose}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: '40px', height: '40px',
                            background: 'rgba(0,0,0,0.05)', border: 'none',
                            borderRadius: '8px', cursor: 'pointer', color: '#0f172a',
                            transition: 'background 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                        </svg>
                    </button>
                    <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#0f172a', margin: 0 }}>Privacy Policy</h1>
                </div>

                <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '32px', lineHeight: 1.8 }}>
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Content Sections */}
                <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#475569' }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>1. Introduction</h2>
                        <p>
                            Theka Online ("Company," "we," "us," or "our") operates the Theka Online mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our App.
                        </p>
                        <p style={{ marginTop: '12px' }}>
                            Please read this Privacy Policy carefully. By accessing and using the App, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>2. Information We Collect</h2>
                        <p>We collect different types of information in connection with the services we provide, including:</p>
                        <ul style={{ marginTop: '12px', marginLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Personal Information:</strong> Name, email address, phone number, profile information, service preferences, and payment information.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Usage Information:</strong> How you interact with the App, pages visited, features used, content viewed, and the actions you take.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Device Information:</strong> Device type, operating system, unique device identifiers, IP address, and mobile network information.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Location Information:</strong> With your permission, we collect location data to help connect you with nearby service professionals.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul style={{ marginTop: '12px', marginLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}>Provide, maintain, and improve the App and its features</li>
                            <li style={{ marginBottom: '8px' }}>Process transactions and send related information</li>
                            <li style={{ marginBottom: '8px' }}>Send technical notices and support messages</li>
                            <li style={{ marginBottom: '8px' }}>Respond to your inquiries and provide customer support</li>
                            <li style={{ marginBottom: '8px' }}>Send promotional communications (with your consent)</li>
                            <li style={{ marginBottom: '8px' }}>Monitor and analyze usage patterns and trends</li>
                            <li style={{ marginBottom: '8px' }}>Detect, prevent, and address fraud and security issues</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>4. Information Sharing</h2>
                        <p>We do not sell, trade, or rent your personally identifiable information. However, we may share your information in the following situations:</p>
                        <ul style={{ marginTop: '12px', marginLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Service Providers:</strong> With trusted partners who assist us in operating the App and providing services.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Legal Requirements:</strong> When required by law or to protect our legal rights and your safety.</li>
                            <li style={{ marginBottom: '8px' }}><strong>With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>6. Your Rights and Choices</h2>
                        <p>Depending on your location, you may have the following rights:</p>
                        <ul style={{ marginTop: '12px', marginLeft: '20px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Access:</strong> You may request access to your personal information.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Correction:</strong> You may request correction of inaccurate information.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Deletion:</strong> You may request deletion of your information.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Opt-Out:</strong> You may opt out of promotional communications at any time.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>7. Cookies and Tracking Technologies</h2>
                        <p>
                            We may use cookies, log files, and similar tracking technologies to enhance your experience. You can manage cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>8. Third-Party Links</h2>
                        <p>
                            The App may contain links to third-party websites and services that are not operated by us. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We recommend reviewing their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>9. Children's Privacy</h2>
                        <p>
                            The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will delete such information promptly.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>10. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy in the App. Your continued use of the App constitutes your acceptance of the updated Privacy Policy.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>11. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <div style={{ marginTop: '16px', padding: '20px', background: 'rgba(255,140,0,0.05)', borderRadius: '8px', borderLeft: '4px solid #ff8c00' }}>
                            <p style={{ margin: '0 0 8px 0', fontWeight: 600 }}>Theka Online</p>
                            <p style={{ margin: '0 0 8px 0' }}>Email: privacy@theka-online.com</p>
                            <p style={{ margin: 0 }}>For additional support, please visit our website or contact us through the App.</p>
                        </div>
                    </section>

                    <section>
                        <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '40px' }}>
                            © 2024 Theka Online. All rights reserved.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
