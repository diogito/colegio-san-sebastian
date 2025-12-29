import SidebarLayout from '../../components/Layout/SidebarLayout';

const Organizacion = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Organización Institucional" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <h2>Estructura Organizacional</h2>
            <p>El Colegio San Sebastián de Linares cuenta con una estructura sólida diseñada para apoyar el aprendizaje y desarrollo integral de nuestros estudiantes.</p>

            <div style={{ marginTop: '2rem' }}>
                <h3>Organigrama</h3>
                <p>Nuestra institución se organiza jerárquicamente para asegurar un funcionamiento eficiente y coordinado:</p>
                <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', lineHeight: '1.8', marginTop: '1rem' }}>
                    <li><strong>Sostenedor:</strong> Responsable legal y administrador de los recursos.</li>
                    <li><strong>Dirección:</strong> Lidera el proyecto educativo y la gestión pedagógica.</li>
                    <li><strong>Unidad Técnico Pedagógica (UTP):</strong> Coordina y supervisa el proceso de enseñanza-aprendizaje.</li>
                    <li><strong>Inspectoría General:</strong> Vela por la convivencia y disciplina escolar.</li>
                    <li><strong>Orientación:</strong> Apoya el desarrollo personal y vocacional de los estudiantes.</li>
                    <li><strong>Equipo PIE:</strong> Especialistas dedicados al apoyo de necesidades educativas especiales.</li>
                </ul>
            </div>
        </SidebarLayout>
    );
};

export default Organizacion;
