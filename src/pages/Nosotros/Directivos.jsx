import SidebarLayout from '../../components/Layout/SidebarLayout';

const Directivos = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    const directivos = [
        { role: "Directora", name: "Nombre Directora" },
        { role: "Jefe UTP", name: "Nombre Jefe UTP" },
        { role: "Inspector General", name: "Nombre Inspector" },
        { role: "Orientadora", name: "Nombre Orientadora" }
    ];

    return (
        <SidebarLayout title="Equipo Directivo & Gestión" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <h2>Liderazgo Educativo</h2>
            <p>Nuestro equipo directivo encabeza la gestión pedagógica y administrativa, trabajando comprometidamente para alcanzar las metas institucionales.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {directivos.map((person, index) => (
                    <div key={index} style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center', background: '#f9fafb' }}>
                        <div style={{ width: '80px', height: '80px', background: '#ddd', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>👤</div>
                        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{person.role}</h3>
                        <p style={{ color: '#666' }}>{person.name}</p>
                    </div>
                ))}
            </div>
        </SidebarLayout>
    );
};

export default Directivos;
