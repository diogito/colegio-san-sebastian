import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => location.pathname === path ? styles.activeLink : '';

    const navItems = [
        { name: 'Inicio', path: '/' },
        {
            name: 'Nosotros',
            path: '/nosotros',
            subItems: [
                { name: 'Organización', path: '/nosotros/organizacion' },
                { name: 'Directivos', path: '/nosotros/directivos' },
                { name: 'Docentes', path: '/nosotros/docentes' },
                { name: 'Equipo PIE', path: '/nosotros/pie' },
            ]
        },
        {
            name: 'Comunidad',
            path: '/comunidad',
            subItems: [
                { name: 'Convivencia Escolar', path: '/comunidad/convivencia' }
            ]
        },
        { name: 'Documentos', path: '/documentos' },
        { name: 'Noticias', path: '/noticias' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <header className={styles.header}>
            {/* Top Bar for quick contact */}
            <div className={styles.topBar}>
                <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '2rem', fontSize: '0.9rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaPhone /> (73) 250 2556</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaEnvelope /> colegiosansebastian23@gmail.com</span>
                    <a href="https://web.facebook.com/ColegioParticularSanSebastian" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}><FaFacebook size={16} /></a>
                    <a href="https://www.instagram.com/colsansebastianlinares" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}><FaInstagram size={16} /></a>
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
                        <div key={item.path} className={styles.navItemWrapper}>
                            <Link
                                to={item.path}
                                className={`${styles.navLink} ${isActive(item.path)}`}
                                onClick={!item.subItems ? closeMenu : undefined}
                            >
                                {item.name}
                            </Link>
                            {item.subItems && (
                                <div className={styles.dropdown}>
                                    {item.subItems.map(subItem => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            className={styles.dropdownLink}
                                            onClick={closeMenu}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <a href="/contacto" className={styles.ctaButton}>Admisión 2025</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
