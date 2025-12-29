import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

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
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <Link to="/" onClick={closeMenu}>
                        <span>Colegio San Sebastián</span>
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
                </nav>
            </div>
        </header>
    );
};

export default Header;
