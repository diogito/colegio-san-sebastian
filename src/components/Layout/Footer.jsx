import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.column}>
                    <h3>Colegio San Sebastián</h3>
                    <div className={styles.contactInfo}>
                        <p>📍 Yumbel 971, Linares, Chile</p>
                        <p>📞 (73) 250 2556</p>
                        <p>✉️ colegiosansebastian23@gmail.com</p>
                        <p>⏰ Lun - Vie: 08:30 - 18:00 hrs</p>
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
                        {/* Social Icons Placeholders */}
                        <a href="#" className={styles.socialIcon} aria-label="Facebook">Face</a>
                        <a href="#" className={styles.socialIcon} aria-label="Instagram">Insta</a>
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
