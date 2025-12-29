import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className="container">
                    <h1>COLEGIO SAN SEBASTIÁN</h1>
                    <p>JORNADA ESCOLAR COMPLETA DE PRE KÍNDER A 8° BÁSICO</p>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="/nosotros" className="btn" style={{ marginRight: '1rem' }}>Conócenos</a>
                        <a href="/contacto" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Contáctanos</a>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <Section>
                <div className={styles.gridTwo}>
                    <Card title="Nuestra Misión">
                        <p>
                            Nuestro establecimiento educacional, pone su acento en la excelencia académica,
                            la inclusión y la formación de personas con valores sólidos. Buscamos desarrollar
                            el potencial de cada estudiante en un ambiente familiar y seguro, promoviendo
                            el respeto, la responsabilidad y el amor por el aprendizaje.
                        </p>
                    </Card>
                    <Card title="Nuestra Visión">
                        <p>
                            Entregar una educación de calidad basada en valores, que permita formar personas
                            íntegras, autónomas y responsables, capaces de enfrentar con éxito los desafíos
                            de la sociedad actual y contribuir positivamente a su comunidad.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Sellos */}
            <Section className="bg-gray-50" style={{ backgroundColor: '#f3f4f6' }}>
                <h2 className={styles.sectionTitle}>Nuestros Sellos Educativos</h2>
                <div className={styles.gridThree}>
                    <Card className={styles.selloItem}>
                        <div className={styles.selloNumber}>1</div>
                        <h3>Alta Motivación Escolar</h3>
                        <p>Fomentamos el interés y la participación activa de nuestros estudiantes en su propio proceso de aprendizaje.</p>
                    </Card>
                    <Card className={styles.selloItem}>
                        <div className={styles.selloNumber}>2</div>
                        <h3>Comunidad Activa</h3>
                        <p>Promovemos la integración y participación de padres, apoderados y docentes en la vida escolar.</p>
                    </Card>
                    <Card className={styles.selloItem}>
                        <div className={styles.selloNumber}>3</div>
                        <h3>Formación Integral</h3>
                        <p>Desarrollamos no solo aspectos cognitivos, sino también afectivos, sociales y valóricos.</p>
                    </Card>
                </div>
            </Section>
        </>
    );
};

export default Home;
