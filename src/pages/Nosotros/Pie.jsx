import SidebarLayout from '../../components/Layout/SidebarLayout';

const Pie = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Programa de Integración Escolar (PIE)" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <h2>Equipo Multidisciplinario PIE</h2>
            <p>El Programa de Integración Escolar (PIE) es una estrategia inclusiva del sistema escolar, que tiene el propósito de contribuir al mejoramiento continuo de la calidad de la educación.</p>

            <div style={{ marginTop: '2rem', padding: '2rem', background: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid var(--glow-color)' }}>
                <h3>Nuestro Objetivo</h3>
                <p>Favorecer la presencia y participación en la sala de clases, el logro de los objetivos de aprendizaje y la trayectoria educativa de "todos y cada uno de los estudiantes", especialmente de aquellos que presentan Necesidades Educativas Especiales (NEE).</p>
            </div>
        </SidebarLayout>
    );
};

export default Pie;
