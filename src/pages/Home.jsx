import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import styles from './Home.module.css';
import sellosImg from '../assets/images/sellos.png';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1>COLEGIO SAN SEBASTIÁN</h1>
                    <p>Jornada Escolar Completa de Pre-Kínder a 8° Básico</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/nosotros" className="btn">Nuestra Historia</a>
                        <a href="/contacto" className="btn btn-outline">Contáctanos</a>
                    </div>
                </div>
            </div>

            <hr className={styles.neonSeparator} />

            {/* Mission & Vision - Split Layout */}
            <Section className={styles.missionSection}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Misión Institucional</h2>
                            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#555' }}>
                                Nuestro establecimiento educacional, pone su acento en la <strong>excelencia académica</strong>,
                                la <strong>inclusión</strong> y la formación de personas con <strong>valores sólidos</strong>.
                            </p>
                            <p style={{ color: '#777' }}>
                                Buscamos desarrollar el potencial de cada estudiante en un ambiente familiar y seguro, promoviendo el respeto y la responsabilidad.
                            </p>
                        </div>

                        <div style={{
                            background: 'var(--secondary-color)',
                            padding: '3rem',
                            color: 'white',
                            position: 'relative'
                        }}>
                            <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem', marginBottom: '1.5rem' }}>Nuestra Visión</h3>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                "Entregar una educación de calidad basada en valores, que permita formar personas íntegras, autónomas y responsables."
                            </p>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                border: '5px solid var(--accent-color)',
                                zIndex: -1
                            }}></div>
                        </div>
                    </div>
                </div>
            </Section>

            <hr className={styles.neonSeparator} />

            {/* Sellos Section - Dark Navy */}
            <div className={styles.sellosSection}>
                <div className="container">
                    <h2>Nuestros Sellos Educativos</h2>
                    <div className={styles.selloGrid}>
                        <div className={styles.selloItem}>
                            <div className={styles.selloIconWrapper}>
                                {/* Visual placeholder for specific icon part of the sprite/image if needed, currently using generic image for demo */}
                                <span style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>🎓</span>
                            </div>
                            <h3>Alta Motivación</h3>
                            <p>Fomentamos el interés y la participación activa de nuestros estudiantes.</p>
                        </div>
                        <div className={styles.selloItem}>
                            <div className={styles.selloIconWrapper}>
                                <span style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>🤝</span>
                            </div>
                            <h3>Comunidad Activa</h3>
                            <p>Promovemos la integración de padres y apoderados en la vida escolar.</p>
                        </div>
                        <div className={styles.selloItem}>
                            <div className={styles.selloIconWrapper}>
                                <span style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>⭐</span>
                            </div>
                            <h3>Formación Integral</h3>
                            <p>Desarrollo cognitivo, afectivo, social y valórico de cada estudiante.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
