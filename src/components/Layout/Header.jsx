import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => location.pathname === path ? styles.activeLink : '';

    const navItems = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Comunidad', path: '/comunidad' },
        { name: 'Documentos', path: '/documentos' },
        { name: 'Noticias', path: '/noticias' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <header className={styles.header}>
            {/* Top Bar for quick contact */}
            <div className={styles.topBar}>
                <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', fontSize: '0.9rem' }}>
                    <span>📞 (73) 250 2556</span>
                    <span>✉️ colegiosansebastian23@gmail.com</span>
                </div>
            </div>

            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link to="/" onClick={closeMenu}>
                        {/* Displaying extracted logo image */}
                        <img src={logo} alt="Insignia Colegio San Sebastián" className={styles.logoImg} />
                        <div className={styles.logoText}>
                            <span className={styles.schoolName}>Colegio San Sebastián</span>
                            <span className={styles.city}>de Linares</span>
                        </div>
                    </Link>
                </div>

                <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    ☰
                </button>

                <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`${styles.navLink} ${isActive(item.path)}`}
                            onClick={closeMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a href="/contacto" className={styles.ctaButton}>Admisión 2025</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
