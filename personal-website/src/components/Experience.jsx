const Experience = () => {
    const professionalExp = [
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
        }
    ];

    const personalExp = [
        {
            role: "Volunteer Data Wizard",
            org: "Community Health Initiative",
            period: "2021 - Present",
            description: "Helping local charities turn messy spreadsheets into beautiful, story-telling dashboards."
        },
        {
            role: "Marathon Survivor",
            org: "London Marathon",
            period: "2022",
            description: "Ran 42km to prove to myself I could. Raised money for mental health research along the way!"
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
