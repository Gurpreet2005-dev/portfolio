import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiCode, FiFolderPlus, FiAward, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home', icon: FiHome },
  { to: '/skills', label: 'Skills', icon: FiCode },
  { to: '/projects', label: 'Projects', icon: FiFolderPlus },
  { to: '/certificates', label: 'Certificates', icon: FiAward },
  { to: '/contact', label: 'Contact', icon: FiMail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        background: scrolled ? 'rgba(5,5,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1.35rem',
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px',
            }}
          >
            {'<GS />'}
          </motion.div>
        </NavLink>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
             className="desktop-nav">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 18px',
                borderRadius: '50px',
                fontSize: '0.88rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                background: isActive ? 'rgba(124,58,237,0.25)' : 'transparent',
                border: isActive ? '1px solid rgba(124,58,237,0.5)' : '1px solid transparent',
                transition: 'all 0.2s ease',
              })}
              onMouseEnter={e => {
                if (!e.currentTarget.style.background.includes('0.25')) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={e => {
                if (!e.currentTarget.style.background.includes('0.25')) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <Icon size={14} /> {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            display: 'none',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            padding: '8px',
            cursor: 'pointer',
          }}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'rgba(5,5,16,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-subtle)',
              zIndex: 999,
              padding: '16px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {links.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} end={to === '/'}
                style={({ isActive }) => ({
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(124,58,237,0.2)' : 'transparent',
                  fontWeight: 500,
                  fontSize: '1rem',
                  transition: 'all 0.2s',
                })}
              >
                <Icon size={18} /> {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
