import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const inputStyle = {
        width: '100%',
        padding: '16px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'var(--text-main)',
        borderRadius: '8px',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontSize: '1rem'
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = 'var(--color-primary)';
        e.target.style.background = 'rgba(255,255,255,0.08)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
        e.target.style.background = 'rgba(255,255,255,0.03)';
    };

    return (
        <section id="contact" className="py-5" style={{ background: 'linear-gradient(to top, var(--bg-main), var(--bg-surface))' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In <span className="text-gradient">Touch</span>
                </motion.h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 300px', maxWidth: '500px' }}
                    >
                        <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                            Join the Academy
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Ready to transform your game? Use the form to schedule your first session or ask any questions. We reply within 24 hours.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: <Mail className="text-primary" />, title: 'Email Us', val: 'coach.rishu@badminton.com' },
                                { icon: <Phone className="text-primary" />, title: 'Call Us', val: '+91 93118 70793' },
                                { icon: <MapPin className="text-primary" />, title: 'Visit Us', val: 'Rishu Badminton Academy, Sports Complex' }
                            ].map((item, index) => (
                                <div key={index} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ padding: '12px', background: 'rgba(57, 255, 20, 0.1)', borderRadius: '50%' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 400px', maxWidth: '600px' }}
                        className="glass-panel"
                        onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}
                    >
                        <div style={{ padding: '3rem' }}>
                            <h3 style={{ color: 'var(--text-main)', marginBottom: '2rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                                Send a Message
                            </h3>

                            <div className="mb-2">
                                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>Full Name</label>
                                <input type="text" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} required />
                            </div>

                            <div className="mb-2">
                                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>Email Address</label>
                                <input type="email" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} required />
                            </div>

                            <div className="mb-2">
                                <label style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.9rem' }}>Your Message</label>
                                <textarea rows="5" style={{ ...inputStyle, resize: 'none' }} onFocus={handleFocus} onBlur={handleBlur} required></textarea>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', gap: '10px' }}>
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
