import SidebarLayout from '../../components/Layout/SidebarLayout';

const Docentes = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Equipo Docente & Asistentes" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <h2>Nuestros Profesores y Asistentes</h2>
            <p>Contamos con un cuerpo docente altamente calificado y asistentes de la educación comprometidos con el bienestar de nuestros estudiantes.</p>

            <div style={{ marginTop: '2rem' }}>
                <h3>Profesorado</h3>
                <p>Nuestros profesores combinan experiencia y vocación para guiar a los alumnos en su proceso de aprendizaje, fomentando el pensamiento crítico y la creatividad.</p>

                <h3 style={{ marginTop: '2rem' }}>Asistentes de la Educación</h3>
                <p>El equipo de asistentes es fundamental para el funcionamiento diario del colegio, apoyando en la labor administrativa, de inspectoría y de mantención.</p>
            </div>
        </SidebarLayout>
    );
};

export default Docentes;
