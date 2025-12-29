import SidebarLayout from '../../components/Layout/SidebarLayout';

const Convivencia = () => {
    const sidebarLinks = [
        { label: 'Convivencia Escolar', path: '/comunidad/convivencia' },
        { label: 'Centro de Padres', path: '/comunidad/padres' },
        { label: 'Centro de Alumnos', path: '/comunidad/alumnos' },
    ];

    return (
        <SidebarLayout title="Convivencia Escolar" sidebarTitle="Comunidad" sidebarLinks={sidebarLinks}>
            <h2>Un Ambiente de Respeto</h2>
            <p>La convivencia escolar se trata de la construcción de un modo de relación entre las personas de una comunidad, sustentada en el respeto mutuo y en la solidaridad recíproca.</p>

            <div style={{ marginTop: '2rem' }}>
                <h3>Nuestros Pilares</h3>
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '1rem' }}>
                    <li style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>🛡️ <strong>Respeto:</strong> Valoramos la dignidad de todas las personas.</li>
                    <li style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>💬 <strong>Diálogo:</strong> Resolvemos conflictos a través de la comunicación.</li>
                    <li style={{ padding: '1rem', background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>🤝 <strong>Solidaridad:</strong> Nos apoyamos mutuamente como comunidad.</li>
                </ul>
            </div>
        </SidebarLayout>
    );
};

export default Convivencia;
