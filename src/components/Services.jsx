import { CheckCircle2, Dumbbell, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Dumbbell size={32} />,
        title: 'Beginner',
        price: 'Start',
        desc: 'Build a solid foundation',
        features: ['Basic Footwork', 'Grip Techniques', 'Service Drills', '2 Sessions/Week'],
        highlight: false
    },
    {
        icon: <CronwIcon />,
        title: 'Advanced',
        price: 'Pro',
        desc: 'Compete at high levels',
        features: ['Advanced Tactics', 'Tournament Prep', 'Mental Conditioning', '5 Sessions/Week', 'video Analysis'],
        highlight: true
    },
    {
        icon: <Zap size={32} />,
        title: 'Fitness',
        price: 'Fit',
        desc: 'Speed & Endurance',
        features: ['Agility Drills', 'Cardio Intensive', 'Strength Training', '3 Sessions/Week'],
        highlight: false
    }
];

function CronwIcon() {
    return <Crown size={32} />;
}

const Services = () => {
    return (
        <section id="programs" className="py-5" style={{ background: 'var(--bg-main)', position: 'relative' }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '60%',
                background: 'var(--color-primary)',
                filter: 'blur(200px)',
                opacity: 0.05,
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-2"
                >
                    <h2 className="section-title">Training <span className="text-gradient">Programs</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Choose the path that fits your goals. From beginners to tournament champions, we have a roadmap for your success.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem',
                    padding: '2rem 0'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: '3rem 2rem',
                                position: 'relative',
                                transformStyle: 'preserve-3d',
                                border: service.highlight ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                                background: service.highlight ? 'linear-gradient(145deg, rgba(57,255,20,0.05) 0%, rgba(0,0,0,0) 100%)' : 'var(--glass-bg)'
                            }}
                            whileHover={{ y: -10 }}
                        >
                            {service.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--color-primary)',
                                    color: '#000',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    boxShadow: '0 0 10px var(--color-primary-glow)'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: service.highlight ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)',
                                color: service.highlight ? '#000' : 'var(--color-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>{service.desc}</p>

                            <ul style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
                                {service.features.map((feat, i) => (
                                    <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc' }}>
                                        <CheckCircle2 size={16} color="var(--color-primary)" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={service.highlight ? "btn btn-primary" : "btn btn-outline"} style={{ width: '100%' }}>
                                Join Program
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
