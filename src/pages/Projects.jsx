import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi';
import { SiReact, SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiCplusplus } from 'react-icons/si';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const projects = [
    {
        title: 'Canteen Token Generator', period: '2025', emoji: '🍽️',
        description: 'A web-based canteen token generation system built to streamline food ordering in college. Features real-time token tracking, menu management, and a responsive UI for both students and canteen staff. Eliminates physical queuing and handles high concurrent users.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
        accentColor: '#f97316', github: '#', live: '#', badge: 'Full Stack',
    },
    {
        title: 'Sorting Visualizer', period: 'Sept 2024', emoji: '📊',
        description: 'An interactive sorting visualizer built in C++ with SFML to graphically represent sorting algorithms — Bubble Sort, Merge Sort, and Quick Sort. Uses SFML for real-time visual animations, smooth performance, and a consistent output format while integrating image-based visual elements.',
        tech: ['C++', 'SFML', 'Data Structures', 'Algorithms', 'OOP'],
        accentColor: '#a78bfa', github: '#', badge: 'Desktop App',
    },
    {
        title: 'Neufinity Financial Services Website', period: 'Aug – Oct 2025', emoji: '💼',
        description: 'Built a responsive loan consultancy website using React.js with EmailJS integration for automated contact forms, mobile-optimized UI, form validation, and professional branding. Features multi-page navigation and state management for seamless UX.',
        tech: ['React', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'React Router'],
        accentColor: '#ec4899', github: '#', live: '#', badge: 'Client Project',
    },
];

const techColors = {
    React: '#61dafb', 'Node.js': '#6db33f', MongoDB: '#4db33d', Express: '#888',
    'Tailwind CSS': '#38bdf8', 'C++': '#00549d', SFML: '#8ecf4d',
    'Data Structures': '#a78bfa', Algorithms: '#f472b6', OOP: '#fbbf24',
    JavaScript: '#f7df1e', EmailJS: '#ec4899', 'React Router': '#ca8a04',
};

export default function Projects() {
    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <span className="section-tag">What I've Built</span>
                <h1 className="section-title">Projects</h1>
                <p className="section-subtitle">A selection of projects — from full-stack web apps to algorithm visualizers.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {projects.map((proj) => (
                    <div key={proj.title} className="glass-card" style={{ borderTop: `3px solid ${proj.accentColor}` }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{proj.emoji}</span>
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
                                        {proj.title}
                                    </h3>
                                    <span style={{
                                        fontSize: '0.72rem', fontWeight: 600,
                                        background: `${proj.accentColor}22`, border: `1px solid ${proj.accentColor}55`,
                                        color: proj.accentColor, borderRadius: '4px', padding: '3px 10px',
                                    }}>
                                        {proj.badge}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '14px' }}>
                                    <FiCalendar size={12} /> {proj.period}
                                </div>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '20px' }}>
                                    {proj.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {proj.tech.map(t => (
                                        <span key={t} style={{
                                            background: `${techColors[t] || '#888'}18`, border: `1px solid ${techColors[t] || '#888'}44`,
                                            color: techColors[t] || '#aaa', borderRadius: '6px', padding: '4px 12px',
                                            fontSize: '0.78rem', fontWeight: 600,
                                        }}>{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <motion.a href={proj.github} target="_blank" rel="noreferrer"
                                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: 40, height: 40, background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid var(--border-subtle)', borderRadius: '10px',
                                        color: 'var(--text-secondary)', textDecoration: 'none',
                                    }}><FiGithub size={17} /></motion.a>
                                {proj.live && (
                                    <motion.a href={proj.live} target="_blank" rel="noreferrer"
                                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                                        style={{
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            width: 40, height: 40, background: 'rgba(124,58,237,0.15)',
                                            border: '1px solid var(--border)', borderRadius: '10px',
                                            color: 'var(--accent-light)', textDecoration: 'none',
                                        }}><FiExternalLink size={17} /></motion.a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
