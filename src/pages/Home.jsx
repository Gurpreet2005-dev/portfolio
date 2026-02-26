import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const socials = [
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gurpreet-singh-a967a3261/', color: '#0a66c2' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/Gurpreet2005-dev', color: '#fff' },
    { icon: FiMail, label: 'gurpreetvohra1234@gmail.com', href: 'mailto:gurpreetvohra1234@gmail.com', color: '#ea4335' },
    { icon: FiPhone, label: '+91 8005884102', href: 'tel:+918005884102', color: '#25d366' },
];

export default function Home() {
    return (
        <motion.div className="page"
            style={{ paddingTop: 'calc(var(--nav-height) + 60px)' }}
            initial="hidden" animate="show" variants={fade}
        >
            {/* Hero */}
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 70px' }}>
                <div style={{
                    width: 96, height: 96, borderRadius: '50%',
                    background: 'var(--gradient)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 28px',
                    fontSize: '2.2rem', fontFamily: 'Outfit, sans-serif', fontWeight: 800,
                    color: '#fff', boxShadow: '0 0 40px rgba(124,58,237,0.45)',
                }}>
                    GS
                </div>

                <h1 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                    fontWeight: 900, lineHeight: 1.1,
                    margin: '0 0 16px', letterSpacing: '-1.5px',
                }}>
                    Hey, I'm <span className="gradient-text">Gurpreet Singh</span>
                </h1>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.7 }}>
                    3rd year CS student at Chandigarh University who really enjoys building things for the web.
                    I mostly work with React on the frontend, and I've been picking up backend stuff too
                    (Node, Express, MongoDB).
                </p>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 36px', lineHeight: 1.8 }}>
                    I like solving problems, participating in hackathons, and turning ideas into actual working projects.
                    Still learning a lot — but that's kind of the point, right?
                </p>

                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '44px' }}>
                    <Link to="/projects" className="btn-primary">See my work <FiArrowRight /></Link>
                    <Link to="/contact" className="btn-outline">Get in touch <FiMail size={15} /></Link>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {socials.map(({ icon: Icon, label, href, color }) => (
                        <motion.a
                            key={label} href={href} target="_blank" rel="noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '7px',
                                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                                borderRadius: '50px', padding: '9px 18px',
                                color: 'var(--text-secondary)', textDecoration: 'none',
                                fontSize: '0.82rem', fontWeight: 500,
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = color}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <Icon size={15} /> {label}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Quick facts */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '14px', maxWidth: '760px', margin: '0 auto 72px',
            }}>
                {[
                    { value: '8.25', label: 'CGPA (so far)' },
                    { value: '3+', label: 'projects shipped' },
                    { value: '3rd yr', label: 'out of 4 at CU' },
                    { value: '2027', label: 'graduating' },
                ].map(({ value, label }) => (
                    <div key={label} className="glass-card" style={{ textAlign: 'center', padding: '22px 14px' }}>
                        <div style={{
                            fontFamily: 'Outfit, sans-serif', fontSize: '1.9rem', fontWeight: 800,
                            background: 'var(--gradient-text)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>{value}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '5px' }}>{label}</div>
                    </div>
                ))}
            </div>

            {/* About cards */}
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="glass-card" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '28px',
                }}>
                    <div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '10px', color: '#c4b5fd', fontSize: '0.95rem' }}>
                            Where I study
                        </h3>
                        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '3px', fontSize: '0.92rem' }}>
                            B.E. in Computer Science
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem' }}>Chandigarh University</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '4px' }}>2023 – 2027 · CGPA 8.25</p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '10px', color: '#c4b5fd', fontSize: '0.95rem' }}>
                            What I'm up to
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                            Building React projects, learning backend dev, and looking for an internship where I can
                            actually contribute and learn from experienced devs.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '10px', color: '#c4b5fd', fontSize: '0.95rem' }}>
                            Contact
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                            Chandigarh, India<br />
                            +91 8005884102<br />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>usually replies fast</span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
