import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiSend, FiMapPin, FiCheckCircle, FiGithub } from 'react-icons/fi';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'gurpreetvohra1234@gmail.com', href: 'mailto:gurpreetvohra1234@gmail.com', color: '#ea4335' },
    { icon: FiPhone, label: 'Phone', value: '+91 8005884102', href: 'tel:+918005884102', color: '#25d366' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'gurpreet-singh-a967a3261', href: 'https://www.linkedin.com/in/gurpreet-singh-a967a3261/', color: '#0a66c2' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/Gurpreet', href: 'https://github.com/', color: '#ffffff' },
    { icon: FiMapPin, label: 'Location', value: 'Chandigarh, India 🇮🇳', href: null, color: '#a78bfa' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSent(false), 5000);
        }, 1200);
    };

    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <span className="section-tag">Let's Connect</span>
                <h1 className="section-title">Get In Touch</h1>
                <p className="section-subtitle">Have a project idea or internship opportunity? Feel free to reach out!</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '960px', margin: '0 auto' }}>

                {/* Contact info column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="glass-card">
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '8px', color: '#c4b5fd', fontSize: '1.1rem' }}>
                            Hi, I'm Gurpreet Singh 👋
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                            CSE '27 student at Chandigarh University. I'm open to frontend internships,
                            freelance projects, hackathon collabs, and any exciting opportunities.
                        </p>
                    </div>

                    {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                        <motion.div key={label} className="glass-card" whileHover={{ x: 4 }} style={{ padding: '18px 22px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: 42, height: 42, borderRadius: '10px',
                                    background: `${color}18`, border: `1px solid ${color}33`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                }}>
                                    <Icon size={18} color={color} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                        {label}
                                    </p>
                                    {href ? (
                                        <a href={href} target="_blank" rel="noreferrer"
                                            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = color}
                                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                                        >{value}</a>
                                    ) : (
                                        <p style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 500 }}>{value}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.3)',
                        borderRadius: '12px', padding: '14px 18px',
                    }}>
                        <span style={{
                            width: 9, height: 9, borderRadius: '50%', background: '#34d399',
                            boxShadow: '0 0 8px #34d399', flexShrink: 0,
                            animation: 'pulse 2s ease-in-out infinite',
                        }} />
                        <span style={{ color: '#34d399', fontSize: '0.85rem', fontWeight: 600 }}>
                            Open to opportunities — Quick response guaranteed!
                        </span>
                    </div>
                </div>

                {/* Contact form */}
                <div className="glass-card">
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '24px', color: '#fff', fontSize: '1.1rem' }}>
                        Send a Message
                    </h3>

                    {sent ? (
                        <div style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <FiCheckCircle size={48} color="#34d399" />
                            <p style={{ color: '#34d399', fontWeight: 700, fontSize: '1.1rem' }}>Message Sent!</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                Thanks for reaching out. Gurpreet will get back to you soon!
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                                <div>
                                    <label htmlFor="name">Your Name</label>
                                    <input id="name" name="name" className="form-input" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input id="subject" name="subject" className="form-input" placeholder="e.g. Frontend Internship / Project Collaboration" value={form.subject} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" className="form-input" placeholder="Hi Gurpreet, I'd love to discuss..." rows={5} value={form.message} onChange={handleChange} required />
                            </div>
                            <motion.button type="submit" className="btn-primary"
                                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                disabled={loading} style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                            >
                                {loading ? 'Sending...' : <><FiSend size={15} /> Send Message</>}
                            </motion.button>
                        </form>
                    )}
                </div>
            </div>
            <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.85)} }
        @media (max-width:640px) { form>div:first-child{grid-template-columns:1fr!important} }
      `}</style>
        </motion.div>
    );
}
