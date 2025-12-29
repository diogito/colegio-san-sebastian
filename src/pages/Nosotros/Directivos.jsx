
import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import ProfileCard from '../../components/UI/ProfileCard';

const staff = [
    {
        name: "MARISOL ORELLANA",
        role: "DIRECTORA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8364-scaled-e1713379657168-1024x1024.jpg",
        email: "direccion@colegiosansebastiandelinares.cl"
    },
    {
        name: "MARISOL GONZÁLEZ",
        role: "ADMINISTRADORA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/IMG_4189-826x1024.jpg",
        email: "administracion@colegiosansebastiandelinares.cl"
    },
    {
        name: "EMILIA ORELLANA",
        role: "JEFA UNIDAD TÉCNICO PEDAGÓGICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8424-scaled-e1713379703288-1024x1024.jpg",
        email: "utp@colegiosansebastiandelinares.cl"
    },
    {
        name: "PAULA ORELLANA",
        role: "COORDINADORA NIVEL PARVULARIO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8403-scaled-e1713379722635-1024x1024.jpg",
        email: "coordinacion@colegiosansebastiandelinares.cl"
    }
];

const Directivos = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Equipo Directivo" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="max-w-4xl mx-auto">

                {/* Simple Header */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-slate-800">Liderazgo & Gestión</h2>
                    <div className="w-16 h-1 bg-red-600 mt-2 mx-auto md:mx-0"></div>
                    <p className="mt-4 text-slate-600">
                        Nuestro equipo de gestión es el pilar fundamental que sostiene y guía la visión educativa de nuestra institución.
                    </p>
                </div>

                {/* Directory List */}
                <div className="flex flex-col gap-6">
                    {staff.map((member, index) => (
                        <ProfileCard
                            key={index}
                            {...member}
                            layout="horizontal"
                            delay={index}
                        />
                    ))}
                </div>

            </div>
        </SidebarLayout>
    );
};

export default Directivos;
