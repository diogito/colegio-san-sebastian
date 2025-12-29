
import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import { BookOpen, GraduationCap } from 'lucide-react';

const docentes = [
    {
        name: "FABIOLA RIVAS",
        role: "EDUCADORA DE PÁRVULOS",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/IMG_4164-3.heic"
    },
    {
        name: "NICOL MOYA",
        role: "PROFESORA PRIMERO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8413-scaled-e1713379176806-1024x1024.jpg"
    },
    {
        name: "NATALIE GONZÁLEZ",
        role: "PROFESORA SEGUNDO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8392-scaled-e1713379128599-1024x1024.jpg"
    },
    {
        name: "EMILIA ROSALES",
        role: "PROFESORA TERCERO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-at-11.42.30-472x1024.jpeg"
    },
    {
        name: "PAULA ORELLANA",
        role: "PROFESORA SEXTO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8403-scaled-e1713379722635-1024x1024.jpg"
    },
    {
        name: "PÍA MUÑOZ",
        role: "PROFESORA DE EDUCACIÓN FÍSICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/DSC_0410-150x150.jpg"
    },
    {
        name: "INÉS ROJAS",
        role: "PROFESORA 4° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8407-scaled-e1713379194459-1024x1024.jpg"
    },
    {
        name: "PATRICIO VALENZUELA",
        role: "PROFESOR SÉPTIMO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8359-scaled-e1713379229842-1024x1024.jpg"
    },
    {
        name: "CLAUDIO SEPÚLVEDA",
        role: "PROFESOR DE EDUCACIÓN FÍSICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8399-scaled-e1713379308409-1024x1024.jpg"
    },
    {
        name: "MARCIA REINOSO",
        role: "PROFESORA QUINTO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8367-scaled-e1713379326901-1024x1024.jpg"
    },
    {
        name: "CASANDRA MAUREIRA",
        role: "PROFESORA OCTAVO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8388-scaled-e1713379289791-1024x1024.jpg"
    },
    {
        name: "ESTEFANI MÉNDEZ",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8374-scaled-e1713379359277-1024x1024.jpg"
    },
    {
        name: "FRANCIS REYES",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8382-scaled-e1713379375143-1024x1024.jpg"
    },
    {
        name: "SARA RIVERA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8380-scaled-e1713379410453-1024x1024.jpg"
    },
    {
        name: "ESTEFANÍA LARA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8729-scaled-e1716651773693-1024x1024.jpg"
    }
];

const Docentes = () => {
    const sidebarLinks = [
        { label: 'Historia', path: '/nosotros' },
        { label: 'Organización Institucional', path: '/nosotros/organizacion' },
        { label: 'Equipo Directivo', path: '/nosotros/directivos' },
        { label: 'Docentes y Asistentes', path: '/nosotros/docentes' },
        { label: 'Equipo PIE', path: '/nosotros/pie' },
    ];

    return (
        <SidebarLayout title="Equipo Docente" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="prose max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                    Nuestros profesores son el corazón del Colegio San Sebastián, dedicados a inspirar y guiar a cada estudiante en su camino de aprendizaje.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {docentes.map((docente, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                            <div className="h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={docente.image}
                                    alt={docente.name}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${docente.name}&background=1E3A8A&color=fff&size=400`;
                                    }}
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">{docente.name}</h3>
                                <div className="flex items-center justify-center gap-2 text-blue-600">
                                    <BookOpen size={14} />
                                    <spam className="text-xs font-semibold uppercase">{docente.role}</spam>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SidebarLayout>
    );
};

export default Docentes;
