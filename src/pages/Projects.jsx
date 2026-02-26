import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const projects = [
    {
        title: 'Canteen Token Generator',
        period: '2025',
        emoji: '🍽️',
        description: `Built this for our college canteen — the queue was honestly unbearable so I decided to fix it.
Students can order and get a token number without standing in line. The canteen staff gets an admin panel to manage orders.
Used React for the frontend, Node/Express on the backend, and MongoDB to store everything. Was a good learning experience putting the full stack together.`,
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        accentColor: '#f97316', github: 'https://github.com/Gurpreet2005-dev', live: 'https://canteen-token-generator.onrender.com/', badge: 'Full Stack',
    },
    {
        title: 'Sorting Visualizer',
        period: 'Sept 2024',
        emoji: '📊',
        description: `Made this while studying DSA — wanted to actually *see* how sorting algorithms work rather than just reading about them.
It shows Bubble Sort, Merge Sort, and Quick Sort in real time using C++ and SFML for the graphics.
Honestly a fun project — watching the bars move around and sort themselves never gets old. Helped me understand the algorithms way better too.`,
        tech: ['C++', 'SFML', 'Data Structures', 'Algorithms'],
        accentColor: '#a78bfa', github: 'https://github.com/Gurpreet2005-dev', badge: 'Desktop App',
    },
    {
        title: 'Neufinity – Financial Services Website',
        period: 'Aug – Oct 2025',
        emoji: '💼',
        description: `Freelance project — built a website for a loan consultancy firm. They needed something clean, mobile-friendly, and with a working contact form.
Used React with React Router for navigation, Tailwind for styling, and hooked up EmailJS so their form actually sends emails.
First real client project, so I learned a lot about working with actual requirements and deadlines.`,
        tech: ['React', 'Tailwind CSS', 'EmailJS', 'React Router'],
        accentColor: '#ec4899', github: 'https://github.com/Gurpreet2005-dev', live: '#', badge: 'Freelance',
    },
];

const techColors = {
    React: '#61dafb', 'Node.js': '#6db33f', MongoDB: '#4db33d', Express: '#888',
    'Tailwind CSS': '#38bdf8', 'C++': '#00549d', SFML: '#8ecf4d',
    'Data Structures': '#a78bfa', Algorithms: '#f472b6',
    JavaScript: '#f7df1e', EmailJS: '#ec4899', 'React Router': '#ca8a04',
};

export default function Projects() {
    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <h1 className="section-title">Things I've built</h1>
                <p className="section-subtitle">
                    Not a ton yet, but here's what I've worked on so far.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {projects.map((proj) => (
                    <div key={proj.title} className="glass-card" style={{ borderTop: `3px solid ${proj.accentColor}` }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '1.4rem' }}>{proj.emoji}</span>
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
                                        {proj.title}
                                    </h3>
                                    <span style={{
                                        fontSize: '0.7rem', fontWeight: 600,
                                        background: `${proj.accentColor}22`, border: `1px solid ${proj.accentColor}55`,
                                        color: proj.accentColor, borderRadius: '4px', padding: '3px 9px',
                                    }}>
                                        {proj.badge}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '14px' }}>
                                    <FiCalendar size={11} /> {proj.period}
                                </div>
                                <p style={{
                                    color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.9rem', marginBottom: '18px',
                                    whiteSpace: 'pre-line',
                                }}>
                                    {proj.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {proj.tech.map(t => (
                                        <span key={t} style={{
                                            background: `${techColors[t] || '#888'}18`, border: `1px solid ${techColors[t] || '#888'}44`,
                                            color: techColors[t] || '#aaa', borderRadius: '6px', padding: '4px 11px',
                                            fontSize: '0.77rem', fontWeight: 600,
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <motion.a href={proj.github} target="_blank" rel="noreferrer"
                                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                                    title="GitHub"
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: 38, height: 38, background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid var(--border-subtle)', borderRadius: '10px',
                                        color: 'var(--text-secondary)', textDecoration: 'none',
                                    }}><FiGithub size={16} /></motion.a>
                                {proj.live && (
                                    <motion.a href={proj.live} target="_blank" rel="noreferrer"
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                                        title="Live demo"
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            width: 38, height: 38, background: 'rgba(124,58,237,0.15)',
                                            border: '1px solid var(--border)', borderRadius: '10px',
                                            color: 'var(--accent-light)', textDecoration: 'none',
                                        }}><FiExternalLink size={16} /></motion.a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '40px' }}>
                more stuff cooking 👨‍🍳... check my{' '}
                <a href="https://github.com/Gurpreet2005-dev" target="_blank" rel="noreferrer"
                    style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>GitHub</a>
                {' '}for latest.
            </p>
        </motion.div>
    );
}
