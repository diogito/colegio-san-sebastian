
import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import { UserCheck, Users, Award, BookOpen } from 'lucide-react';

const staff = [
    {
        name: "MARISOL GONZÁLEZ",
        role: "ADMINISTRADORA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/IMG_4189-826x1024.jpg",
        icon: <Users className="w-6 h-6" />
    },
    {
        name: "MARISOL ORELLANA",
        role: "DIRECTORA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8364-scaled-e1713379657168-1024x1024.jpg",
        icon: <Award className="w-6 h-6" />
    },
    {
        name: "EMILIA ORELLANA",
        role: "JEFA UNIDAD TÉCNICO PEDAGÓGICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8424-scaled-e1713379703288-1024x1024.jpg",
        icon: <BookOpen className="w-6 h-6" />
    },
    {
        name: "PAULA ORELLANA",
        role: "COORDINADORA NIVEL PARVULARIO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8403-scaled-e1713379722635-1024x1024.jpg",
        icon: <UserCheck className="w-6 h-6" />
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
        <SidebarLayout title="Equipo Directivo y de Gestión" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="prose max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                    Nuestro equipo directivo lidera con el compromiso de mantener la excelencia académica y formativa que caracteriza al Colegio San Sebastián.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {staff.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl border border-gray-100 group">
                            <div className="h-80 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=0D47A1&color=fff&size=400`;
                                    }}
                                />
                            </div>
                            <div className="p-6 relative">
                                <div className="absolute -top-8 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg">
                                    {member.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-blue-700 font-semibold text-sm tracking-wide uppercase">{member.role}</p>
                                <div className="w-12 h-1 bg-yellow-400 mt-4"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-900">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Nuestro Compromiso</h3>
                    <p className="text-gray-700">
                        El equipo de gestión trabaja incansablemente para asegurar un ambiente propicio para el aprendizaje,
                        coordinando los esfuerzos de docentes, asistentes y familias en pos del desarrollo integral de nuestros estudiantes.
                    </p>
                </div>
            </div>
        </SidebarLayout>
    );
};

export default Directivos;
