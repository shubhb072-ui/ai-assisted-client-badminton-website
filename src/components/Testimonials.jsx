import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "State Level Player",
        text: "Coach Rishu's tactical analysis completely changed my game. I went from struggling in quarterfinals to winning state championships.",
        rating: 5
    },
    {
        id: 2,
        name: "Sneha Patel",
        role: "Junior Athlete",
        text: "The fitness drills are intense but incredibly effective. My stamina has doubled in just 3 months. Highly recommend!",
        rating: 5
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Badminton Enthusiast",
        text: "I was a beginner when I joined. Rishu's patience and technical guidance helped me master the basics quickly.",
        rating: 4
    },
    {
        id: 4,
        name: "Priya Reddy",
        role: "College Player",
        text: "Best coaching academy in the city. The focus on mental conditioning is something you don't find elsewhere.",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section id="testimonials" className="py-5" style={{ background: 'var(--bg-main)', position: 'relative' }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'absolute',
                right: '0',
                top: '20%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)',
                opacity: 0.1,
                zIndex: 0
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Success <span className="text-gradient">Stories</span>
                </motion.h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>

                    <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="glass-panel"
                                style={{
                                    padding: '3rem',
                                    width: '100%',
                                    position: 'relative',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <Quote size={40} style={{ position: 'absolute', top: '20px', left: '20px', opacity: 0.2, color: 'var(--color-primary)' }} />

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '2rem' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20}
                                            fill={i < reviews[activeIndex].rating ? "var(--color-primary)" : "transparent"}
                                            color={i < reviews[activeIndex].rating ? "var(--color-primary)" : "#555"}
                                        />
                                    ))}
                                </div>

                                <p style={{
                                    fontSize: '1.4rem',
                                    fontStyle: 'italic',
                                    marginBottom: '2rem',
                                    lineHeight: '1.6',
                                    color: '#eee',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: '300'
                                }}>
                                    "{reviews[activeIndex].text}"
                                </p>

                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)', textTransform: 'uppercase' }}>
                                        {reviews[activeIndex].name}
                                    </h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)', display: 'block', marginTop: '5px' }}>
                                        {reviews[activeIndex].role}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '1rem' }}>
                        <button onClick={prevReview} className="btn-outline" style={{
                            borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <ChevronLeft size={24} />
                        </button>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            {reviews.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    style={{
                                        width: i === activeIndex ? '20px' : '10px',
                                        height: '6px',
                                        borderRadius: '3px',
                                        background: i === activeIndex ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                ></div>
                            ))}
                        </div>

                        <button onClick={nextReview} className="btn-outline" style={{
                            borderRadius: '50%', width: '50px', height: '50px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <ChevronRight size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
