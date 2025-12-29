import { Link, useLocation } from 'react-router-dom';
import styles from './SidebarLayout.module.css';

const SidebarLayout = ({ title, children, sidebarTitle, sidebarLinks }) => {
    const location = useLocation();

    return (
        <div className={styles.layoutContainer}>
            {/* Page Header */}
            <header className={styles.pageHeader}>
                <div className="container">
                    <h1>{title}</h1>
                </div>
            </header>

            <div className={`container ${styles.contentWrapper}`}>
                {/* Sidebar Navigation */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>{sidebarTitle}</h3>
                    <nav className={styles.sidebarNav}>
                        {sidebarLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`${styles.sidebarLink} ${location.pathname === link.path ? styles.active : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className={styles.mainContent}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default SidebarLayout;
