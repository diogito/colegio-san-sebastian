import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.column}>
                    <h3>Colegio San Sebastián</h3>
                    <div className={styles.contactInfo}>
                        <p><FaMapMarkerAlt /> Yumbel 971, Linares, Chile</p>
                        <p><FaPhone /> (73) 250 2556</p>
                        <p><FaEnvelope /> colegiosansebastian23@gmail.com</p>
                        <p><FaClock /> Lun - Vie: 08:30 - 18:00 hrs</p>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Enlaces Rápidos</h3>
                    <ul style={{ listStyle: 'none' }}>
                        <li><a href="/nosotros" style={{ color: '#e5e7eb' }}>Nosotros</a></li>
                        <li><a href="/comunidad" style={{ color: '#e5e7eb' }}>Comunidad</a></li>
                        <li><a href="/documentos" style={{ color: '#e5e7eb' }}>Documentos</a></li>
                        <li><a href="/contacto" style={{ color: '#e5e7eb' }}>Contacto</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Síguenos</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://web.facebook.com/ColegioParticularSanSebastian" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com/colsansebastianlinares" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Colegio San Sebastián de Linares. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
