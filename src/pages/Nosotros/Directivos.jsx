
import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import TeamMemberCard from '../../components/UI/TeamMemberCard';
import { UserCheck, Users, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const staff = [
    {
        name: "MARISOL GONZÁLEZ",
        role: "ADMINISTRADORA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/IMG_4189-826x1024.jpg",
        icon: <Users />
    },
    {
        name: "EMILIA ORELLANA",
        role: "JEFA UNIDAD TÉCNICO PEDAGÓGICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8424-scaled-e1713379703288-1024x1024.jpg",
        icon: <BookOpen />
    },
    {
        name: "PAULA ORELLANA",
        role: "COORDINADORA NIVEL PARVULARIO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8403-scaled-e1713379722635-1024x1024.jpg",
        icon: <UserCheck />
    }
];

const directora = {
    name: "MARISOL ORELLANA",
    role: "DIRECTORA",
    image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8364-scaled-e1713379657168-1024x1024.jpg",
    icon: <Award />
};

const Directivos = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Equipo Directivo y de Gestión" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="max-w-4xl mx-auto">

                {/* Intro */}
                <div className="prose max-w-none mb-12">
                    <p className="lead text-xl text-slate-600">
                        Nuestro equipo directivo lidera con el compromiso de mantener la excelencia académica y formativa que caracteriza al Colegio San Sebastián.
                    </p>
                </div>

                {/* Director Spotlight */}
                <div className="mb-16">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100/50 rounded-3xl -rotate-1 scale-105 transform translate-y-2 z-0"></div>
                        <div className="relative z-10 w-full md:w-2/3 mx-auto">
                            <TeamMemberCard
                                {...directora}
                                color="indigo"
                                delay={1}
                                className="shadow-2xl"
                            />
                            {/* Decorative Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="absolute -top-6 -right-6 md:-right-12 bg-yellow-400 text-yellow-900 font-black p-4 rounded-full shadow-lg rotate-12 hidden md:block"
                            >
                                Directory
                            </motion.div>
                        </div>
                    </div>
                    <div className="text-center mt-8 max-w-2xl mx-auto">
                        <h3 className="italic text-slate-500">"Liderando con visión de futuro y cercanía humana."</h3>
                    </div>
                </div>

                {/* Separator */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-slate-200 flex-1"></div>
                    <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest text-center">Equipo de Gestión</h2>
                    <div className="h-px bg-slate-200 flex-1"></div>
                </div>

                {/* Grid for the rest */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staff.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            {...member}
                            delay={index + 2}
                            color="blue"
                        />
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 rounded-2xl border border-slate-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-2 rounded-lg text-white shrink-0">
                            <Award size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Nuestro Compromiso</h3>
                            <p className="text-slate-600 leading-relaxed">
                                El equipo de gestión trabaja incansablemente para asegurar un ambiente propicio para el aprendizaje,
                                coordinando los esfuerzos de docentes, asistentes y familias en pos del desarrollo integral de nuestros estudiantes.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </SidebarLayout>
    );
};

export default Directivos;
