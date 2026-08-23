import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';
import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


    const stats = [
        { icon: <Users size={20} />, label: "Students Trained", value: "200+" },
        { icon: <Trophy size={20} />, label: "Tournaments Won", value: "50+" },
        { icon: <Star size={20} />, label: "Experience", value: "8+ Years" },
    ];

    return (
        <section
            id="home"
            ref={ref}
            style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#050505'
            }}
        >
            {/* Background Image with Fixed/Parallax feel */}
            <motion.div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${heroBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                y: y,
                filter: 'brightness(0.6)',
                zIndex: 0
            }} />

            {/* Gradient Overlay for Depth */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.8) 80%, #050505 100%)',
                zIndex: 1
            }}></div>

            {/* Abstract Shapes (Glows) */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--color-primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: 1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--color-secondary)',
                filter: 'blur(180px)',
                opacity: 0.15,
                borderRadius: '50%',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '50px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            marginBottom: '2rem',
                            color: 'var(--color-primary)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}
                    >
                        Professional Badminton Coaching
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)', // Responsive font size
                        fontWeight: '900',
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        color: '#fff',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        UNLEASH YOUR <br />
                        <span className="text-gradient">TRUE POTENTIAL</span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#cfcfcf',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.6
                    }}>
                        Join the elite training program designed by Coach Rishu. Master technique, strategy, and mental toughness to dominate the court.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary">
                            Book Free Session <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#programs" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                            View Programs
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Stats Bar */}
            <motion.div
                initial={{ opacity: 0, y: 50, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="glass-panel"
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    display: 'flex',
                    gap: '3rem',
                    padding: '1.5rem 3rem',
                    zIndex: 10,
                    width: '90%',
                    maxWidth: '800px',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}
            >
                {stats.map((stat, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: 'var(--color-primary)' }}>{stat.icon}</div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase' }}>{stat.label}</div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Hero;
