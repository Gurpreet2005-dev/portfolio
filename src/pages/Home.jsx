import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const socials = [
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gurpreet-singh-a967a3261/', color: '#0a66c2' },
    { icon: FiGithub, label: 'GitHub', href: '#', color: '#fff' },
    { icon: FiMail, label: 'Email', href: 'mailto:gurpreetvohra1234@gmail.com', color: '#ea4335' },
    { icon: FiPhone, label: 'Phone', href: 'tel:+918005884102', color: '#25d366' },
];

const stats = [
    { value: '3+', label: 'Projects Built' },
    { value: '8.25', label: 'CGPA' },
    { value: '5+', label: 'Certifications' },
    { value: '2027', label: 'Graduating' },
];

export default function Home() {
    return (
        <motion.div className="page"
            style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}
            initial="hidden" animate="show" variants={fade}
        >
            {/* Hero */}
            <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 80px' }}>
                {/* Avatar */}
                <div style={{
                    width: 100, height: 100, borderRadius: '50%',
                    background: 'var(--gradient)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 28px',
                    fontSize: '2.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                    color: '#fff',
                    boxShadow: '0 0 50px rgba(124,58,237,0.5)',
                }}>
                    GS
                </div>

                <span className="section-tag">Available for opportunities</span>

                <h1 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                    fontWeight: 900, lineHeight: 1.1,
                    margin: '20px 0 12px', letterSpacing: '-2px',
                }}>
                    Hi, I'm <span className="gradient-text">Gurpreet Singh</span>
                </h1>

                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                    Computer Science Student · Frontend Developer · AI Enthusiast
                </p>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 36px', lineHeight: 1.8 }}>
                    CSE '27 @ Chandigarh University — specializing in frontend development & AI-driven
                    applications, with strong foundations in data structures, algorithms, and system architecture.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
                    <Link to="/projects" className="btn-primary">View Projects <FiArrowRight /></Link>
                    <Link to="/contact" className="btn-outline">Contact Me <FiMail size={15} /></Link>
                </div>

                {/* Social icons */}
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {socials.map(({ icon: Icon, label, href, color }) => (
                        <motion.a
                            key={label} href={href} target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.06, y: -2 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                                borderRadius: '50px', padding: '10px 20px',
                                color: 'var(--text-secondary)', textDecoration: 'none',
                                fontSize: '0.85rem', fontWeight: 500,
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = color}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <Icon size={16} /> {label}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px', maxWidth: '800px', margin: '0 auto 80px',
            }}>
                {stats.map(({ value, label }) => (
                    <div key={label} className="glass-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
                        <div style={{
                            fontFamily: 'Outfit, sans-serif', fontSize: '2.2rem', fontWeight: 800,
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>{value}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>{label}</div>
                    </div>
                ))}
            </div>

            {/* About snippet */}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="glass-card" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '28px',
                }}>
                    <div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '12px', color: '#c4b5fd' }}>Education</h3>
                        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>B.E. Computer Science (BE-CSE)</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Chandigarh University</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>2023 – 2027 · CGPA 8.25</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '12px', color: '#c4b5fd' }}>Currently</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>
                            Working on React & AI-driven applications.<br />
                            Open to frontend internships & collaborations.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '12px', color: '#c4b5fd' }}>Based In</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8 }}>
                            Chandigarh, India 🇮🇳<br />
                            +91 8005884102
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
