import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#050505', paddingTop: '5rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand */}
                    <div>
                        <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', fontSize: '1.8rem' }}>
                            RISHU<span className="text-primary">.BADMINTON</span>
                        </h2>
                        <p style={{ color: '#888', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Elevating badminton standards through professional coaching, discipline, and passion. Join us to become a champion.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            {[
                                { Icon: Facebook, href: '#' },
                                { Icon: Instagram, href: 'https://www.instagram.com/i.rishu_2526/' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Youtube, href: '#' }
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} style={{ color: '#ccc', transition: 'all 0.3s' }}
                                    target="_blank" rel="noopener noreferrer"
                                    onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    <Icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: '600' }}>Quick Links</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Home', 'About Coach', 'Training Programs', 'Success Stories', 'Contact Us'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" style={{ color: '#888', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                                        onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
                                        onMouseOut={(e) => e.target.style.color = '#888'}
                                    >
                                        <ArrowRight size={14} /> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: '600' }}>Stay Updated</h3>
                        <p style={{ color: '#888', marginBottom: '1.5rem' }}>Subscribe to get the latest tournament news and training tips.</p>
                        <div style={{ position: 'relative' }}>
                            <input type="email" placeholder="Enter your email" style={{
                                width: '100%',
                                padding: '14px',
                                paddingRight: '50px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                color: '#fff',
                                outline: 'none'
                            }} />
                            <button style={{
                                position: 'absolute',
                                right: '5px',
                                top: '5px',
                                bottom: '5px',
                                background: 'var(--color-primary)',
                                border: 'none',
                                borderRadius: '3px',
                                width: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: '#000'
                            }}>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: '0.9rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Rishu Badminton Academy. All rights reserved.</p>
                    <p>Designed By <span style={{ color: 'var(--color-primary)' }}>SHUBH</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
