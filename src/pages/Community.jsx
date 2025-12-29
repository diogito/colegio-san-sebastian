import Section from '../components/UI/Section';
import Card from '../components/UI/Card';

const Community = () => {
    return (
        <Section>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Comunidad Educativa</h1>

                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
                    El propósito compartido de la comunidad se expresa en la adhesión al proyecto educativo del establecimiento y a sus reglas de convivencia establecidas en el reglamento interno.
                </p>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    <Card title="Centro General de Padres y Apoderados">
                        <p>
                            La misión del Centro de Padres y Apoderados del Colegio San Sebastián, es ser un espacio de integración y participación para padres, madres y apoderados de nuestra comunidad, en las actividades que desarrollan nuestros hijos, lo que permite fortalecer la preparación de sus integrantes para alcanzar el perfil de persona plena junto a su familia. Abriendo los caminos necesarios para que las familias participen más directamente en la educación de sus hijos.
                        </p>
                    </Card>

                    <Card title="Centro General de Estudiantes">
                        <p>
                            El Centro General de Estudiantes del Colegio San Sebastián, tiene como misión representar al alumnado, proyectando sus inquietudes, necesidades, ideas y/o intereses a la comunidad educativa. El Centro General de Estudiantes busca promover la amistad, solidaridad y compañerismo entre los estudiantes, para así incentivar y enriquecer los sellos de nuestro colegio.
                        </p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default Community;
