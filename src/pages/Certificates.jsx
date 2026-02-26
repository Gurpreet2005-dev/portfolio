import { motion } from 'framer-motion';
import { FiAward, FiStar, FiZap, FiCode, FiBookOpen, FiServer, FiActivity, FiTerminal } from 'react-icons/fi';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const certifications = [
    {
        category: 'Academic & Research', icon: '🔬', color: '#a78bfa',
        items: [{ title: 'Microsoft CMT Research Paper', org: 'Microsoft CMT Conference', icon: FiBookOpen, iconColor: '#00a4ef', desc: 'Research paper accepted at Microsoft CMT conference — demonstrating academic research and writing capabilities.', badge: 'Published' }],
    },
    {
        category: 'Industry Certifications', icon: '📜', color: '#34d399',
        items: [
            { title: 'DBMS Certification', org: 'Coursera', icon: FiServer, iconColor: '#0056d3', desc: 'Coursera certification in Database Management Systems covering relational databases, SQL, normalization, and transactions.', badge: 'Certified' },
            { title: 'Statistics Certification', org: 'Coursera', icon: FiServer, iconColor: '#0056d3', desc: 'Coursera certification covering statistical concepts, probability, data analysis, and data-driven decision making.', badge: 'Certified' },
        ],
    },
    {
        category: 'Professional Experience', icon: '💼', color: '#fbbf24',
        items: [{ title: 'Frontend Development Internship', org: 'Unified (1 Month)', icon: FiCode, iconColor: '#ec4899', desc: '1-month frontend development internship at Unified — gained hands-on experience building production-level UI components.', badge: 'Internship' }],
    },
    {
        category: 'Competitive Achievements', icon: '🏆', color: '#f97316',
        items: [
            { title: 'HackerRank 3-Star Badges', org: 'HackerRank', icon: FiActivity, iconColor: '#2ec866', desc: 'Achieved Mentor 3 Star Badges in C, C++, and Python on HackerRank.', badge: '3 Languages' },
            { title: 'HackMatrix — IIT Patna (7th Rank)', org: 'IIT Patna on Unstop', icon: FiZap, iconColor: '#fbbf24', desc: 'Secured 7th Rank at HackMatrix Hackathon by IIT Patna, hosted on Unstop.', badge: 'Top 10' },
            { title: 'CADMANIA — 4th Rank', org: 'AutoCAD Competition', icon: FiAward, iconColor: '#f97316', desc: 'Achieved 4th rank in CADMANIA AutoCAD Competition.', badge: 'Top 5' },
        ],
    },
    {
        category: 'Hackathons & Events', icon: '⚡', color: '#60a5fa',
        items: [
            { title: 'Zinnovata 2.0 Hackathon', org: 'Chandigarh University', icon: FiStar, iconColor: '#60a5fa', desc: 'Participated in Zinnovata 2.0 — the largest Hackathon by Chandigarh University.', badge: 'Participant' },
            { title: 'CodeRelay — LeetCode Competition', org: 'LeetCode', icon: FiTerminal, iconColor: '#ffa116', desc: 'Participated in CodeRelay: A LeetCode team-based competitive programming event.', badge: 'Participant' },
        ],
    },
];

export default function Certificates() {
    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <span className="section-tag">Recognition & Milestones</span>
                <h1 className="section-title">Certifications & Achievements</h1>
                <p className="section-subtitle">Academic milestones, industry certifications, and competitive recognitions.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {certifications.map((cat) => (
                    <div key={cat.category}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: cat.color }}>
                                {cat.category}
                            </h2>
                            <div style={{ flex: 1, height: '1px', background: `${cat.color}33` }} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                            {cat.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        className="glass-card"
                                        whileHover={{ y: -4 }}
                                        style={{ borderLeft: `3px solid ${cat.color}` }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div style={{
                                                width: 40, height: 40, borderRadius: '10px',
                                                background: `${item.iconColor}18`, border: `1px solid ${item.iconColor}33`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <Icon size={18} color={item.iconColor} />
                                            </div>
                                            <span style={{
                                                fontSize: '0.7rem', fontWeight: 700,
                                                background: `${cat.color}18`, border: `1px solid ${cat.color}44`,
                                                color: cat.color, borderRadius: '4px', padding: '3px 9px',
                                            }}>
                                                {item.badge}
                                            </span>
                                        </div>
                                        <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '4px', color: '#fff' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.8rem', color: cat.color, fontWeight: 600, marginBottom: '10px' }}>{item.org}</p>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
