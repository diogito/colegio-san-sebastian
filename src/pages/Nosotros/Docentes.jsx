
import React, { useMemo } from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import TeamMemberCard from '../../components/UI/TeamMemberCard';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const docentesData = [
    {
        name: "FABIOLA RIVAS",
        role: "EDUCADORA DE PÁRVULOS",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/IMG_4164-3.heic",
        category: "Pre-Básica"
    },
    {
        name: "NICOL MOYA",
        role: "PROFESORA PRIMERO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8413-scaled-e1713379176806-1024x1024.jpg",
        category: "Primer Ciclo"
    },
    {
        name: "NATALIE GONZÁLEZ",
        role: "PROFESORA SEGUNDO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8392-scaled-e1713379128599-1024x1024.jpg",
        category: "Primer Ciclo"
    },
    {
        name: "EMILIA ROSALES",
        role: "PROFESORA TERCERO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-at-11.42.30-472x1024.jpeg",
        category: "Primer Ciclo"
    },
    {
        name: "INÉS ROJAS",
        role: "PROFESORA 4° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8407-scaled-e1713379194459-1024x1024.jpg",
        category: "Primer Ciclo"
    },
    {
        name: "MARCIA REINOSO",
        role: "PROFESORA QUINTO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8367-scaled-e1713379326901-1024x1024.jpg",
        category: "Segundo Ciclo"
    },
    {
        name: "PAULA ORELLANA",
        role: "PROFESORA SEXTO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8403-scaled-e1713379722635-1024x1024.jpg",
        category: "Segundo Ciclo"
    },
    {
        name: "PATRICIO VALENZUELA",
        role: "PROFESOR SÉPTIMO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8359-scaled-e1713379229842-1024x1024.jpg",
        category: "Segundo Ciclo"
    },
    {
        name: "CASANDRA MAUREIRA",
        role: "PROFESORA OCTAVO BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8388-scaled-e1713379289791-1024x1024.jpg",
        category: "Segundo Ciclo"
    },
    {
        name: "PÍA MUÑOZ",
        role: "PROFESORA DE EDUCACIÓN FÍSICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/DSC_0410-150x150.jpg",
        category: "Especialistas"
    },
    {
        name: "CLAUDIO SEPÚLVEDA",
        role: "PROFESOR DE EDUCACIÓN FÍSICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8399-scaled-e1713379308409-1024x1024.jpg",
        category: "Especialistas"
    },
    {
        name: "ESTEFANI MÉNDEZ",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8374-scaled-e1713379359277-1024x1024.jpg",
        category: "Programa Integración"
    },
    {
        name: "FRANCIS REYES",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8382-scaled-e1713379375143-1024x1024.jpg",
        category: "Programa Integración"
    },
    {
        name: "SARA RIVERA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8380-scaled-e1713379410453-1024x1024.jpg",
        category: "Programa Integración"
    },
    {
        name: "ESTEFANÍA LARA",
        role: "EDUCADORA DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8729-scaled-e1716651773693-1024x1024.jpg",
        category: "Programa Integración"
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

    // Grouping logic
    const groupedDocentes = useMemo(() => {
        return docentesData.reduce((acc, curr) => {
            const category = curr.category || 'General';
            if (!acc[category]) acc[category] = [];
            acc[category].push(curr);
            return acc;
        }, {});
    }, []);

    // Order of categories
    const categoryOrder = ["Pre-Básica", "Primer Ciclo", "Segundo Ciclo", "Especialistas", "Programa Integración"];

    return (
        <SidebarLayout title="Equipo Docente" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="prose max-w-none">

                {/* Intro Banner */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 mb-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <GraduationCap size={150} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white !mt-0">Formando el Futuro</h2>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
                        Nuestros profesores son el corazón del Colegio San Sebastián, dedicados a inspirar y guiar a cada estudiante en su camino de aprendizaje con vocación y excelencia.
                    </p>
                </div>

                {/* Grouped Grids */}
                {categoryOrder.map((category) => {
                    const items = groupedDocentes[category];
                    if (!items) return null;

                    return (
                        <div key={category} className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-blue-600 w-1 h-8 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-800 !my-0">{category}</h3>
                                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{items.length} Docentes</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                {items.map((docente, index) => (
                                    <TeamMemberCard
                                        key={index}
                                        name={docente.name}
                                        role={docente.role} // Keep original specific role
                                        image={docente.image}
                                        icon={<BookOpen />}
                                        color="blue"
                                        delay={index}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}

            </div>
        </SidebarLayout>
    );
};

export default Docentes;
