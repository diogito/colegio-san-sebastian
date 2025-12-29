import Section from '../components/UI/Section';
import Card from '../components/UI/Card';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "Celebración Día del Profesor",
            date: "16 Octubre, 2024",
            excerpt: "Nuestra comunidad educativa celebró con alegría y gratitud a nuestros dedicados docentes.",
            category: "Eventos"
        },
        {
            id: 2,
            title: "Día del Asistente de la Educación",
            date: "01 Octubre, 2024",
            excerpt: "Reconocimiento a la labor fundamental de nuestros asistentes de la educación en la formación de nuestros estudiantes.",
            category: "Efemérides"
        },
        {
            id: 3,
            title: "Inicio Proceso de Admisión 2025",
            date: "01 Septiembre, 2024",
            excerpt: "Informamos a la comunidad que se encuentran abiertas las postulaciones para el año académico 2025.",
            category: "Admisión"
        }
    ];

    return (
        <Section>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Noticias y Novedades</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {newsItems.map(item => (
                        <Card key={item.id}>
                            <span style={{
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                color: 'var(--secondary-color)',
                                fontWeight: 700
                            }}>
                                {item.category}
                            </span>
                            <h3 style={{ margin: '0.5rem 0', color: 'var(--primary-color)' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>{item.date}</p>
                            <p>{item.excerpt}</p>
                            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Leer más</button>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default News;
