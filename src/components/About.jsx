import { Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import coachImg from '../assets/rishu_real.png';

const About = () => {
    return (
        <section id="about" className="py-5" style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '5rem' }}>

                {/* Image Side with Motion */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 400px', position: 'relative' }}
                >
                    {/* Decorative Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '-30px',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
                        opacity: 0.2,
                        zIndex: 0
                    }}></div>

                    <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--color-primary)',
                        transform: 'translate(20px, 20px)',
                        zIndex: 0
                    }}></div>

                    <img
                        src={coachImg}
                        alt="Coach Rishu"
                        style={{
                            width: '100%',
                            borderRadius: '2px', // Sharper corners for sports look
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                            // filter: 'grayscale(100%) contrast(1.2) brightness(1.1)', // Removed for permanent color
                            transition: 'transform 0.3s'
                        }}
                    // onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%) contrast(1) brightness(1)'}
                    // onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%) contrast(1.2) brightness(1.1)'}
                    />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: '1 1 400px' }}
                >
                    <div style={{ display: 'inline-block', padding: '5px 15px', background: 'rgba(255,255,255,0.05)', color: 'var(--color-primary)', marginBottom: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        The Coach
                    </div>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        color: 'var(--text-main)',
                        lineHeight: 1,
                        fontFamily: 'var(--font-heading)'
                    }}>
                        PASSION MEETS <br /><span className="text-gradient">PERFORMANCE</span>
                    </h2>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        With over a decade of professional experience, Coach Rishu isn't just teaching badminton; he's crafting champions. His methodology combines old-school discipline with modern sports science.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-main)', fontWeight: 'bold' }}>
                                <Award color="var(--color-primary)" /> Certified Pro
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#888' }}>Accredited by National Badminton Association.</p>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-main)', fontWeight: 'bold' }}>
                                <TrendingUp color="var(--color-primary)" /> Result Oriented
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#888' }}>Proven track record of improving player rankings.</p>
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-primary">Start Your Journey</a>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
