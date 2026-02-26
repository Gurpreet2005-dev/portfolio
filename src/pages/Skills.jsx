import { motion } from 'framer-motion';
import {
    SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiReact,
    SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiLinux,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiCpu, FiMonitor } from 'react-icons/fi';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const skillCategories = [
    {
        title: 'Languages & Frameworks', icon: '⚡', color: '#a78bfa',
        skills: [
            { name: 'C / C++', icon: SiCplusplus, color: '#00549d' },
            { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
            { name: 'CSS3', icon: SiCss3, color: '#264de4' },
            { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
            { name: 'React', icon: SiReact, color: '#61dafb' },
            { name: 'Express.js', icon: SiExpress, color: '#fff' },
            { name: 'MongoDB', icon: SiMongodb, color: '#4db33d' },
        ],
    },
    {
        title: 'Tools & Software', icon: '🛠️', color: '#ec4899',
        skills: [
            { name: 'Git', icon: SiGit, color: '#f05032' },
            { name: 'GitHub', icon: SiGithub, color: '#fff' },
            { name: 'VS Code', icon: FiCode, color: '#007acc' },
            { name: 'MySQL', icon: SiMysql, color: '#00758f' },
            { name: 'Linux', icon: SiLinux, color: '#fcc624' },
            { name: 'AutoCAD', icon: FiMonitor, color: '#e34f26' },
            { name: 'Arduino IDE', icon: FiCpu, color: '#00979d' },
            { name: 'Google Colab', icon: FiDatabase, color: '#f9ab00' },
        ],
    },
    {
        title: 'Coursework', icon: '📚', color: '#34d399',
        items: ['Database Management Systems', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Linux Fundamentals', 'Computer Networks', 'Operating Systems'],
    },
    {
        title: 'Professional Skills', icon: '🚀', color: '#fbbf24',
        items: ['Leadership', 'Disciplined', 'Curious', 'Adaptable', 'Growth Oriented Mindset', 'Team Collaboration'],
    },
];

export default function Skills() {
    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <span className="section-tag">My Arsenal</span>
                <h1 className="section-title">Skills & Technologies</h1>
                <p className="section-subtitle">Technologies I've worked with, tools I rely on, and concepts I've mastered.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {skillCategories.map((cat) => (
                    <div key={cat.title} className="glass-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                            <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: cat.color }}>
                                {cat.title}
                            </h3>
                        </div>

                        {cat.skills ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {cat.skills.map(({ name, icon: Icon, color }) => (
                                    <motion.div
                                        key={name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '7px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border-subtle)',
                                            borderRadius: '8px', padding: '8px 14px',
                                            fontSize: '0.82rem', fontWeight: 500,
                                            color: 'var(--text-secondary)', cursor: 'default',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.borderColor = color;
                                            e.currentTarget.style.boxShadow = `0 0 12px ${color}33`;
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <Icon size={15} color={color} /> {name}
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {cat.items.map(item => <span key={item} className="tag">{item}</span>)}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Proficiency bars */}
            <div className="glass-card" style={{ marginTop: '24px' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '24px', color: '#c4b5fd' }}>
                    Core Proficiency
                </h3>
                {[
                    { name: 'React / JavaScript', pct: 88 },
                    { name: 'C / C++', pct: 82 },
                    { name: 'HTML & CSS', pct: 92 },
                    { name: 'Express / MongoDB', pct: 65 },
                    { name: 'SQL / DBMS', pct: 75 },
                ].map(({ name, pct }, i) => (
                    <div key={name} style={{ marginBottom: '18px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{name}</span>
                            <span style={{ fontSize: '0.82rem', color: 'var(--accent-light)' }}>{pct}%</span>
                        </div>
                        <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                                style={{ height: '100%', background: 'linear-gradient(90deg, #7c3aed, #ec4899)', borderRadius: '3px' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
