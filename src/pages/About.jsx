import Section from '../components/UI/Section';
import Card from '../components/UI/Card';

const About = () => {
    return (
        <>
            <Section className="bg-gray-50" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <h1 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Nuestra Historia</h1>
                    <Card>
                        <div style={{ lineHeight: '1.8', color: 'var(--text-color)' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                En el año 2000 nace la idea de crear un nuevo colegio básico para la ciudad de Linares.
                                Este es un anhelo de una familia de clase media, compuesta por padres profesores, con más de 20 años de experiencia docente y más de 8000 horas de perfeccionamiento y luego de que sus dos hijas mayores también estudiaran Pedagogía Básica.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Arriendan una casa, ubicada en calle Yumbel Nº 676 de la ciudad de Linares, pidiendo asesoría técnica jurídica en la Secretaría Ministerial de Educación de Talca. Realizan dos visitas al colegio, la primera para dejar observación y la segunda para aprobar.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                El 31 de enero del año 2001, por resolución exenta Nº 0168 se autoriza el funcionamiento según Rol Base de Datos (R.B.D.) Nº 16518-2 del 31/01/01, con capacidad de 52 alumnos por jornada.
                                Siendo la Sostenedora y Directora la Señora Marisol de las Mercedes González González. El 03 de marzo del 2001 inician las clases con 24 alumnos de primero a cuarto año básico.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                El año 2002 se autoriza el funcionamiento de la Educación Pre-Básica. En el año 2003 se crea quinto básico. Así se sigue creando un curso por año, hasta llegar al 8vo año saliendo la primera promoción el año 2006.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Gracias a los grandes esfuerzos de la sostenedora y directora el año 2012 se logra la construcción del nuevo edificio, contando con una infraestructura anti sismica y mayores espacios que permiten un aumento de matriculas.
                            </p>
                            <p>
                                Desde Septiembre del año 2015, con una matricula de 176 alumnos de Pre Kinder a 8° Básico se comienza a trabajar en Jornada Escolar Completa (J.E.C).
                            </p>
                        </div>
                    </Card>
                </div>
            </Section>
        </>
    );
};

export default About;
