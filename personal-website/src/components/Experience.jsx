const Experience = () => {
    const professionalExp = [
        {
            role: "Senior Behavioural Scientist",
            company: "Institute of Behavioural Insights",
            period: "2023 - Present",
            description: "Leading randomized controlled trials to improve public policy outcomes."
        },
        {
            role: "Research Fellow",
            company: "University of London",
            period: "2020 - 2023",
            description: "Conducted research on digital nudges and habit formation."
        }
    ];

    const personalExp = [
        {
            role: "Volunteer Data Analyst",
            org: "Community Health Initiative",
            period: "2021 - Present",
            description: "Helping local non-profits visualize their impact data."
        },
        {
            role: "Marathon Runner",
            org: "London Marathon",
            period: "2022",
            description: "Completed the London Marathon raising funds for mental health research."
        }
    ];

    const Item = ({ item }) => (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>{item.role}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ fontWeight: 600 }}>{item.company || item.org}</span>
                <span>{item.period}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
        </div>
    );

    return (
        <section id="experience" style={{ backgroundColor: 'var(--bg-color)' }}>
            <div className="container">
                <h2 style={{ marginBottom: '3rem' }}>Experience</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Professional</h3>
                        <div style={{ marginTop: '2rem' }}>
                            {professionalExp.map((item, index) => <Item key={index} item={item} />)}
                        </div>
                    </div>

                    <div>
                        <h3 style={{ borderBottom: '2px solid var(--accent-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>Personal</h3>
                        <div style={{ marginTop: '2rem' }}>
                            {personalExp.map((item, index) => <Item key={index} item={item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
