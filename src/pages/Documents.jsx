import Section from '../components/UI/Section';
import Card from '../components/UI/Card';

const Documents = () => {
    const docs = [
        "Plan de Gestión de Convivencia Escolar",
        "Reglamento Interno de Convivencia Escolar 2024",
        "Plan de Apoyo a la Inclusión",
        "Plan de Seguridad Integral",
        "Proyecto Educativo Institucional",
        "Plan Desarrollo Profesional Docente",
        "Plan Formación Ciudadana",
        "Plan de Trabajo 2024"
    ];

    return (
        <Section>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Documentos Oficiales</h1>

                <Card>
                    <ul style={{ display: 'grid', gap: '1rem' }}>
                        {docs.map((doc, index) => (
                            <li key={index} style={{
                                borderBottom: '1px solid #eee',
                                paddingBottom: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span style={{ fontWeight: 500 }}>📄 {doc}</span>
                                <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                                    Descargar
                                </button>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </Section>
    );
};

export default Documents;
