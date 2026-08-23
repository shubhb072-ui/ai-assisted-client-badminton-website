import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Protege', href: '#programs' }, // Changed from Services to Programs/Protege for fancier name
    { name: 'Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent', // Darker glass when scrolled
      backdropFilter: scrolled ? 'blur(15px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      padding: scrolled ? '1rem 0' : '2rem 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: 'var(--text-main)',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          RISHU<span style={{ color: 'var(--color-primary)' }}>.BADMINTON</span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden md-flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{
                color: 'var(--text-main)',
                fontWeight: '500',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}
            >
              {link.name}
            </a>
          ))}



          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Join Now</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md-hidden" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              backgroundColor: 'rgba(10,14,23,0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-color)',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'center', padding: '2rem 0' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: 'var(--text-main)',
                    fontSize: '1.2rem',
                    padding: '1rem',
                    width: '100%',
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Book Your Spot</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
