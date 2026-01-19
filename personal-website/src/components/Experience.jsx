/**
 * Experience.jsx - Work History Section
 * 
 * Displays professional experience and achievements in a
 * responsive card grid. Each card shows role, company,
 * time period, and a brief description.
 * 
 * Uses the shared .card class from index.css for consistent styling.
 */
const Experience = () => {
    const experiences = [
        {
            role: "Senior Behavioural Scientist",
            company: "Institute of Behavioural Insights",
            period: "2023 - Present",
            description: "Running real-world experiments to help governments make policies that actually work for humans (imagine that!)."
        },
        {
            role: "Research Fellow",
            company: "University of London",
            period: "2020 - 2023",
            description: "Explored how tiny digital nudges can turn 'I'll do it later' into 'done!'—and published it all."
        },
        {
            role: "Volunteer Data Wizard",
            company: "Community Health Initiative",
            period: "2021 - Present",
            description: "Helping local charities turn messy spreadsheets into beautiful, story-telling dashboards."
        },
        {
            role: "Marathon Survivor",
            company: "London Marathon",
            period: "2022",
            description: "Ran 42km to prove to myself I could. Raised money for mental health research along the way!"
        }
    ];

    const Item = ({ item }) => (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>{item.role}</h4>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                gap: '0.5rem'
            }}>
                <span style={{ fontWeight: 600 }}>{item.company}</span>
                <span>{item.period}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
        </div>
    );

    return (
        <section id="experience">
            <div className="container">
                <h2 style={{ marginBottom: '3rem' }}>Experience</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
                    {experiences.map((item, index) => <Item key={index} item={item} />)}
                </div>
            </div>
        </section>
    );
};

export default Experience;
