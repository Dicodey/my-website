const About = () => {
    return (
        <section id="about" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2>About Me</h2>
                <div style={{ maxWidth: '800px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I am a Behavioural Scientist passionate about understanding why people do what they do.
                        My work sits at the intersection of psychology, data science, and design, aiming to create
                        interventions that help people make better decisions for themselves and society.
                    </p>
                    <p>
                        With a background in academic research and applied behavioural insights, I strive to bridge
                        the gap between theoretical models and real-world application. When I'm not analyzing data
                        or designing experiments, you can find me exploring the outdoors or reading about the latest
                        tech trends.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
