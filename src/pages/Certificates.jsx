import { motion } from 'framer-motion';
import { FiAward, FiStar, FiZap, FiCode, FiBookOpen, FiServer, FiActivity, FiTerminal } from 'react-icons/fi';

const fade = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

const certifications = [
    {
        category: 'Certifications', color: '#34d399',
        items: [
            { title: 'DBMS – Coursera', org: 'Coursera', icon: FiServer, iconColor: '#0056d3', desc: 'Completed a Coursera course on Database Management Systems. Covers SQL, normalization, transactions — all the stuff that actually makes sense once you use it in a project.', badge: 'Completed' },
            { title: 'Statistics – Coursera', org: 'Coursera', icon: FiServer, iconColor: '#0056d3', desc: 'Stats course on Coursera. Useful for understanding data better — probability, distributions, that kind of thing.', badge: 'Completed' },
        ],
    },
    {
        category: 'Research', color: '#a78bfa',
        items: [
            { title: 'Research Paper – Microsoft CMT', org: 'Microsoft CMT Conference', icon: FiBookOpen, iconColor: '#00a4ef', desc: 'Got a research paper accepted at a conference organized via Microsoft CMT. First time writing something academic like this — was a very different kind of challenge compared to coding.', badge: 'Published' },
        ],
    },
    {
        category: 'Work Experience', color: '#fbbf24',
        items: [
            { title: 'Frontend Intern – Unified', org: 'Unified (1 month)', icon: FiCode, iconColor: '#ec4899', desc: 'Did a 1-month frontend internship at Unified. Built UI components, worked in an actual dev environment, and got a feel for how real teams work. Definitely learned more in that month than a whole semester.', badge: 'Internship' },
        ],
    },
    {
        category: 'Competitive & Hackathons', color: '#f97316',
        items: [
            { title: 'HackerRank – 3 Star in C, C++ & Python', org: 'HackerRank', icon: FiActivity, iconColor: '#2ec866', desc: 'Got 3-star ratings in C, C++, and Python on HackerRank — mostly by grinding problems in my first year. Good for keeping the basics sharp.', badge: '3 Stars' },
            { title: 'HackMatrix – 7th Place', org: 'IIT Patna (Unstop)', icon: FiZap, iconColor: '#fbbf24', desc: 'Competed in HackMatrix by IIT Patna on Unstop and secured 7th rank. We had to build something complete in a short time. Really enjoyed it.', badge: '7th / All India' },
            { title: 'CADMANIA – 4th Place', org: 'AutoCAD Competition', icon: FiAward, iconColor: '#f97316', desc: "Participated in CADMANIA AutoCAD design competition and finished 4th. AutoCAD is one of those skills I picked up on the side — didn't expect to do this well.", badge: '4th Place' },
            { title: 'Zinnovata 2.0', org: 'Chandigarh University', icon: FiStar, iconColor: '#60a5fa', desc: 'Participated in Zinnovata 2.0, supposedly the biggest hackathon at CU. Good experience working under pressure with a team.', badge: 'Participated' },
            { title: 'CodeRelay – LeetCode', org: 'LeetCode Event', icon: FiTerminal, iconColor: '#ffa116', desc: 'Took part in CodeRelay, a team-based LeetCode competition. Not my strongest area but I enjoy competitive programming challenges.', badge: 'Participated' },
        ],
    },
];

export default function Certificates() {
    return (
        <motion.div className="page" initial="hidden" animate="show" variants={fade}>
            <div className="section-header">
                <h1 className="section-title">Certs & Achievements</h1>
                <p className="section-subtitle">
                    Things I've done outside of uni — competitions, certs, and a bit of research.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                {certifications.map((cat) => (
                    <div key={cat.category}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', color: cat.color }}>
                                {cat.category}
                            </h2>
                            <div style={{ flex: 1, height: '1px', background: `${cat.color}30` }} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                            {cat.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div key={item.title} className="glass-card"
                                        whileHover={{ y: -3 }}
                                        style={{ borderLeft: `3px solid ${cat.color}` }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div style={{
                                                width: 38, height: 38, borderRadius: '9px',
                                                background: `${item.iconColor}18`, border: `1px solid ${item.iconColor}33`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <Icon size={17} color={item.iconColor} />
                                            </div>
                                            <span style={{
                                                fontSize: '0.68rem', fontWeight: 700,
                                                background: `${cat.color}18`, border: `1px solid ${cat.color}44`,
                                                color: cat.color, borderRadius: '4px', padding: '3px 8px',
                                            }}>{item.badge}</span>
                                        </div>
                                        <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, marginBottom: '3px', color: '#fff', fontSize: '0.95rem' }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontSize: '0.77rem', color: cat.color, fontWeight: 600, marginBottom: '9px' }}>{item.org}</p>
                                        <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{item.desc}</p>
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
