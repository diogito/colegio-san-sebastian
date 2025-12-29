
import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import TeamMemberCard from '../../components/UI/TeamMemberCard';
import { Heart, Brain, Speech, Users } from 'lucide-react';

const pieTeam = [
    {
        name: "ESTEFANI MÉNDEZ",
        role: "COORDINADORA PIE",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8374-scaled-e1713379359277-1024x1024.jpg",
        icon: <Users />
    },
    {
        name: "SARA RIVERA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8380-scaled-e1713379410453-1024x1024.jpg",
        icon: <Heart />
    },
    {
        name: "FRANCIS REYES",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8382-scaled-e1713379375143-1024x1024.jpg",
        icon: <Heart />
    },
    {
        name: "ESTEFANÍA LARA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8729-scaled-e1716651773693-1024x1024.jpg",
        icon: <Heart />
    },
    {
        name: "ANA HERNÁNDEZ",
        role: "PSICÓLOGA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8416-scaled-e1713379481410-1024x1024.jpg",
        icon: <Brain />
    },
    {
        name: "FELIPE BELTRÁN",
        role: "FONOAUDIÓLOGO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8386-scaled-e1713379499875-1024x1024.jpg",
        icon: <Speech />
    },
    {
        name: "CRISTÓBAL MEDINA",
        role: "PSICÓLOGO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8735-scaled-e1716651880109-1024x1024.jpg",
        icon: <Brain />
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
        <SidebarLayout title="Equipo PIE (Integración Escolar)" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="max-w-5xl mx-auto">

                {/* Definition Card */}
                <div className="bg-rose-50 border border-rose-100 rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-rose-100 p-4 rounded-full shrink-0">
                        <Heart className="text-rose-600 w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-rose-900 mb-2">Compromiso con la Inclusión</h3>
                        <p className="text-rose-800/80 leading-relaxed">
                            El <strong>Programa de Integración Escolar (PIE)</strong> es nuestra estrategia inclusiva para asegurar que todos los estudiantes, especialmente aquellos con Necesidades Educativas Especiales (NEE), alcancen sus objetivos de aprendizaje con el apoyo necesario en el aula.
                        </p>
                    </div>
                </div>

                {/* Coordinador Highlight (Optionally we could highlight the coordinator, but let's keep grid for now) */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pieTeam.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            {...member}
                            color="rose" // Using the 'rose' theme for PIE to distinguish from Academic Blue
                            delay={index}
                        />
                    ))}
                </div>

            </div>
        </SidebarLayout>
    );
};

export default Pie;
