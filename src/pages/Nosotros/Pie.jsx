import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import ProfileCard from '../../components/UI/ProfileCard';
import styles from '../../components/UI/StaffGrid.module.css';

const pieTeam = [
    {
        name: "ESTEFANI MÉNDEZ",
        role: "COORDINADORA PIE",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8374-scaled-e1713379359277-1024x1024.jpg",
        category: "Coordinación"
    },
    {
        name: "SARA RIVERA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8380-scaled-e1713379410453-1024x1024.jpg",
        category: "Equipo de Aula"
    },
    {
        name: "FRANCIS REYES",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8382-scaled-e1713379375143-1024x1024.jpg",
        category: "Equipo de Aula"
    },
    {
        name: "ESTEFANÍA LARA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8729-scaled-e1716651773693-1024x1024.jpg",
        category: "Equipo de Aula"
    },
    {
        name: "ANA HERNÁNDEZ",
        role: "PSICÓLOGA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8416-scaled-e1713379481410-1024x1024.jpg",
        category: "Especialistas"
    },
    {
        name: "FELIPE BELTRÁN",
        role: "FONOAUDIÓLOGO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8386-scaled-e1713379499875-1024x1024.jpg",
        category: "Especialistas"
    },
    {
        name: "CRISTÓBAL MEDINA",
        role: "PSICÓLOGO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8735-scaled-e1716651880109-1024x1024.jpg",
        category: "Especialistas"
    }
];

const Pie = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Equipo PIE" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="max-w-5xl mx-auto">

                {/* Definition Card */}
                <div className={styles.introBox} style={{ borderLeftColor: '#DD0B35' }}>
                    <h3 className={styles.introTitle}>Programa de Integración Escolar</h3>
                    <p className={styles.introText}>
                        Estrategia inclusiva para asegurar que todos los estudiantes, especialmente con NEE, alcancen sus objetivos.
                    </p>
                </div>

                <div className={styles.gridContainer}>
                    {pieTeam.map((member, index) => (
                        <ProfileCard
                            key={index}
                            {...member}
                            layout="vertical"
                            delay={index}
                        />
                    ))}
                </div>

            </div>
        </SidebarLayout>
    );
};

export default Pie;
