/**
 * About.jsx - Personal Bio Section
 * 
 * ═══════════════════════════════════════════════════════════════════
 * HOW TO EDIT:
 * - Lines 24-35: Edit the paragraph text inside the <p> tags
 * - Keep the <p> tags, just change the text between them
 * ═══════════════════════════════════════════════════════════════════
 */
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <div style={{
                    maxWidth: '800px',
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Ever wonder why you snooze your alarm five times or can't resist that "one more episode" button?
                        Yeah, me too—except I turned that curiosity into a career! I spend my days (and sometimes nights)
                        figuring out the quirky ways our brains make decisions, and how we can design systems that
                        actually help us instead of tripping us up.
                    </p>
                    <p>
                        When I'm not buried in research papers or running experiments, you'll probably find me
                        on a long walk with a podcast, tinkering with some new tech, or trying to convince myself
                        that my coffee habit is "part of the research."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
