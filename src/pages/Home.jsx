import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaMedal, FaClock } from 'react-icons/fa';
import Section from '../components/UI/Section';
import styles from './Home.module.css';
import sellosImg from '../assets/images/sellos.png';

const Home = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        COLEGIO SAN SEBASTIÁN
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Jornada Escolar Completa de Pre-Kínder a 8° Básico
                    </motion.p>
                    <motion.div
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="/nosotros" className="btn">Nuestra Historia</a>
                        <a href="/contacto" className="btn btn-outline">Contáctanos</a>
                    </motion.div>
                </div>
            </div>

            {/* Impact Statistics Section */}
            <Section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <motion.div
                            className={styles.statItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <FaClock className={styles.statIcon} />
                            <h3>+40 Años</h3>
                            <p>De Trayectoria</p>
                        </motion.div>
                        <motion.div
                            className={styles.statItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ delay: 0.1 }}
                        >
                            <FaGraduationCap className={styles.statIcon} />
                            <h3>J.E.C.</h3>
                            <p>Excelencia Académica</p>
                        </motion.div>
                        <motion.div
                            className={styles.statItem}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                        >
                            <FaUsers className={styles.statIcon} />
                            <h3>Familiar</h3>
                            <p>Comunidad Unida</p>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Mission & Vision - Split Layout with clean typography */}
            <Section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className={styles.sectionTitleDark}>Misión Institucional</h2>
                            <p className={styles.leadText}>
                                Nuestro establecimiento educacional pone su acento en la <strong>excelencia académica</strong>,
                                la <strong>inclusión</strong> y la formación de personas con <strong>valores sólidos</strong>.
                            </p>
                            <p className={styles.bodyText}>
                                Buscamos desarrollar el potencial de cada estudiante en un ambiente familiar y seguro, promoviendo el respeto y la responsabilidad como pilares fundamentales del aprendizaje.
                            </p>
                        </motion.div>

                        <motion.div
                            className={styles.visionBox}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>Nuestra Visión</h3>
                            <p>
                                "Entregar una educación de calidad basada en valores, que permita formar personas íntegras, autónomas y responsables."
                            </p>
                            <div className={styles.visionDecoration}></div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Sellos Section - Glassmorphism */}
            <div className={styles.sellosSection}>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Nuestros Sellos Educativos
                    </motion.h2>
                    <motion.div
                        className={styles.selloGrid}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className={styles.selloItem} variants={fadeIn}>
                            <div className={styles.selloIconWrapper}>
                                <FaGraduationCap size={40} color="var(--primary-color)" />
                            </div>
                            <h3>Alta Motivación</h3>
                            <p>Fomentamos el interés y la participación activa de nuestros estudiantes.</p>
                        </motion.div>
                        <motion.div className={styles.selloItem} variants={fadeIn}>
                            <div className={styles.selloIconWrapper}>
                                <FaUsers size={40} color="var(--primary-color)" />
                            </div>
                            <h3>Comunidad Activa</h3>
                            <p>Promovemos la integración de padres y apoderados en la vida escolar.</p>
                        </motion.div>
                        <motion.div className={styles.selloItem} variants={fadeIn}>
                            <div className={styles.selloIconWrapper}>
                                <FaMedal size={40} color="var(--primary-color)" />
                            </div>
                            <h3>Formación Integral</h3>
                            <p>Desarrollo cognitivo, afectivo, social y valórico de cada estudiante.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Home;
