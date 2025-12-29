
import React from 'react';
import SidebarLayout from '../../components/Layout/SidebarLayout';
import { Heart, Brain, Speech } from 'lucide-react';

const pieTeam = [
    {
        name: "ESTEFANI MÉNDEZ",
        role: "COORDINADORA PIE",
        image: "https://colegiosansebastiandelinares.cl/wp-content/uploads/2024/04/IMG_8374-scaled-e1713379359277-1024x1024.jpg",
        icon: <Brain />
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
    return (
        <SidebarLayout title="Equipo PIE (Programa de Integración Escolar)">
            <div className="prose max-w-none">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8">
                    <p className="text-gray-700 m-0">
                        El <strong>Programa de Integración Escolar (PIE)</strong> es una estrategia inclusiva del sistema escolar, que tiene el propósito de contribuir al mejoramiento continuo de la calidad de la educación que se imparte en el establecimiento educacional, favoreciendo la presencia en la sala de clases, la participación y el logro de los objetivos de aprendizaje de todos y cada uno de los estudiantes, especialmente de aquellos que presentan Necesidades Educativas Especiales (NEE).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pieTeam.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="h-64 relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=E11D48&color=fff&size=400`;
                                    }}
                                />
                            </div>
                            <div className="p-5 relative">
                                <div className="absolute -top-6 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-rose-600 p-2">
                                    {React.cloneElement(member.icon, { size: 24 })}
                                </div>
                                <h3 className="text-lg font-extrabold text-gray-800 leading-tight mb-1">{member.name}</h3>
                                <p className="text-sm font-semibold text-rose-600 uppercase tracking-wider">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SidebarLayout>
    );
};

export default Pie;
