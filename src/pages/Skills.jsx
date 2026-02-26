import { motion } from 'framer-motion';
import {
    SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiReact,
    SiExpress, SiMongodb, SiMysql, SiGit, SiGithub, SiLinux,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiCpu, FiMonitor } from 'react-icons/fi';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const langs = [
    { name: 'C / C++', icon: SiCplusplus, color: '#00549d', note: 'pretty comfortable' },
    { name: 'HTML5', icon: SiHtml5, color: '#e34f26', note: 'daily driver' },
    { name: 'CSS3', icon: SiCss3, color: '#264de4', note: 'love the challenge' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', note: 'getting better' },
    { name: 'React', icon: SiReact, color: '#61dafb', note: 'my main thing' },
    { name: 'Express.js', icon: SiExpress, color: '#fff', note: 'still learning' },
    { name: 'MongoDB', icon: SiMongodb, color: '#4db33d', note: 'basic stuff' },
];

const tools = [
    { name: 'Git', icon: SiGit, color: '#f05032' },
    { name: 'GitHub', icon: SiGithub, color: '#fff' },
    { name: 'VS Code', icon: FiCode, color: '#007acc' },
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
    { name: 'Linux', icon: SiLinux, color: '#fcc624' },
    { name: 'AutoCAD', icon: FiMonitor, color: '#e34f26' },
    { name: 'Arduino IDE', icon: FiCpu, color: '#00979d' },
    { name: 'Google Colab', icon: FiDatabase, color: '#f9ab00' },
];

export default function Skills() {
    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <h1 className="section-title">Skills & Tools</h1>
                <p className="section-subtitle">Stuff I know, stuff I'm learning, and stuff I use day to day.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Languages */}
                <div className="glass-card">
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#a78bfa', marginBottom: '18px' }}>
                        Languages & Frameworks
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {langs.map(({ name, icon: Icon, color, note }) => (
                            <motion.div key={name} whileHover={{ x: 4 }}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '9px 13px', background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--border-subtle)', borderRadius: '8px', cursor: 'default',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                                    <Icon size={16} color={color} />
                                    <span style={{ fontSize: '0.87rem', fontWeight: 500, color: 'var(--text-primary)' }}>{name}</span>
                                </div>
                                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{note}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="glass-card">
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#ec4899', marginBottom: '16px' }}>
                            Tools I Use
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {tools.map(({ name, icon: Icon, color }) => (
                                <motion.div key={name} whileHover={{ scale: 1.05 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-subtle)',
                                        borderRadius: '8px', padding: '7px 12px', fontSize: '0.8rem',
                                        color: 'var(--text-secondary)', cursor: 'default',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                                >
                                    <Icon size={14} color={color} /> {name}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: '#34d399', marginBottom: '14px', fontSize: '0.98rem' }}>
                            Courses I've done
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['DBMS', 'DSA', 'OOP', 'Linux', 'Computer Networks', 'OS'].map(item => (
                                <span key={item} className="tag">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Proficiency bars */}
            <div className="glass-card" style={{ marginTop: '24px' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '6px', color: '#c4b5fd' }}>
                    How comfortable am I?
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '22px' }}>
                    (honest self-assessment, not marketing numbers)
                </p>
                {[
                    { name: 'HTML & CSS', pct: 90, note: 'very comfortable' },
                    { name: 'React / JS', pct: 82, note: 'solid' },
                    { name: 'C / C++', pct: 78, note: 'good for DSA' },
                    { name: 'SQL / DBMS', pct: 70, note: 'decent' },
                    { name: 'Express / MongoDB', pct: 58, note: 'still learning' },
                ].map(({ name, pct, note }, i) => (
                    <div key={name} style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                            <span style={{ fontSize: '0.87rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                                {name} <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontStyle: 'italic' }}>— {note}</span>
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-light)' }}>{pct}%</span>
                        </div>
                        <div style={{ height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
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
