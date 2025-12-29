
import React, { useMemo } from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import ProfileCard from '../../components/UI/ProfileCard';

const docentesData = [
    {
        name: "FABIOLA RIVAS",
        role: "EDUCADORA DE PÁRVULOS",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/IMG_4164-3.heic",
        category: "Educación Parvularia"
    },
    {
        name: "NICOL MOYA",
        role: "1° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8413-scaled-e1713379176806-1024x1024.jpg",
        category: "Primer Ciclo Básico"
    },
    {
        name: "NATALIE GONZÁLEZ",
        role: "2° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8392-scaled-e1713379128599-1024x1024.jpg",
        category: "Primer Ciclo Básico"
    },
    {
        name: "EMILIA ROSALES",
        role: "3° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-at-11.42.30-472x1024.jpeg",
        category: "Primer Ciclo Básico"
    },
    {
        name: "INÉS ROJAS",
        role: "4° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8407-scaled-e1713379194459-1024x1024.jpg",
        category: "Primer Ciclo Básico"
    },
    {
        name: "MARCIA REINOSO",
        role: "5° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8367-scaled-e1713379326901-1024x1024.jpg",
        category: "Segundo Ciclo Básico"
    },
    {
        name: "PAULA ORELLANA",
        role: "6° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8403-scaled-e1713379722635-1024x1024.jpg",
        category: "Segundo Ciclo Básico"
    },
    {
        name: "PATRICIO VALENZUELA",
        role: "7° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8359-scaled-e1713379229842-1024x1024.jpg",
        category: "Segundo Ciclo Básico"
    },
    {
        name: "CASANDRA MAUREIRA",
        role: "8° BÁSICO",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8388-scaled-e1713379289791-1024x1024.jpg",
        category: "Segundo Ciclo Básico"
    },
    {
        name: "PÍA MUÑOZ",
        role: "EDUCACIÓN FÍSICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2025/10/DSC_0410-150x150.jpg",
        category: "Asignaturas"
    },
    {
        name: "CLAUDIO SEPÚLVEDA",
        role: "EDUCACIÓN FÍSICA",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8399-scaled-e1713379308409-1024x1024.jpg",
        category: "Asignaturas"
    },
    {
        name: "ESTEFANI MÉNDEZ",
        role: "ED. DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8374-scaled-e1713379359277-1024x1024.jpg",
        category: "Apoyo PIE Aula"
    },
    {
        name: "FRANCIS REYES",
        role: "ED. DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8382-scaled-e1713379375143-1024x1024.jpg",
        category: "Apoyo PIE Aula"
    },
    {
        name: "SARA RIVERA",
        role: "ED. DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8380-scaled-e1713379410453-1024x1024.jpg",
        category: "Apoyo PIE Aula"
    },
    {
        name: "ESTEFANÍA LARA",
        role: "ED. DIFERENCIAL",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/05/IMG_8729-scaled-e1716651773693-1024x1024.jpg",
        category: "Apoyo PIE Aula"
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

    const categoryOrder = ["Educación Parvularia", "Primer Ciclo Básico", "Segundo Ciclo Básico", "Asignaturas", "Apoyo PIE Aula"];

    return (
        <SidebarLayout title="Cuerpo Docente" sidebarTitle="Nosotros" sidebarLinks={sidebarLinks}>
            <div className="prose max-w-none">

                {/* Intro */}
                <div className="mb-8 border-l-4 border-blue-800 pl-4 py-2 bg-slate-50">
                    <h3 className="text-xl font-bold text-slate-900 m-0">Excelencia Académica</h3>
                    <p className="text-slate-600 m-0 text-sm">Nuestros educadores guían el proceso de aprendizaje con vocación.</p>
                </div>

                {/* Grouped Grids */}
                {categoryOrder.map((category) => {
                    const items = groupedDocentes[category];
                    if (!items) return null;

                    return (
                        <div key={category} className="mb-12">
                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="text-lg font-bold text-navy-900 border-b-2 border-slate-200 pb-1 pr-6 uppercase tracking-wider">{category}</h4>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {items.map((docente, index) => (
                                    <ProfileCard
                                        key={index}
                                        name={docente.name}
                                        role={docente.role}
                                        image={docente.image}
                                        layout="vertical"
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
