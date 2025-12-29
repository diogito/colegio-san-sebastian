
import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const TeamMemberCard = ({
    name,
    role,
    image,
    icon,
    color = "blue", // blue, red, purple, etc.
    delay = 0
}) => {

    // Color maps for subtle gradients/accents
    const colorMap = {
        blue: {
            border: "hover:border-blue-500",
            text: "text-blue-700",
            bg: "bg-blue-50",
            iconBot: "bg-blue-600"
        },
        red: {
            border: "hover:border-red-500",
            text: "text-red-700",
            bg: "bg-red-50",
            iconBot: "bg-red-600"
        },
        indigo: {
            border: "hover:border-indigo-500",
            text: "text-indigo-700",
            bg: "bg-indigo-50",
            iconBot: "bg-indigo-600"
        },
        rose: {
            border: "hover:border-rose-500",
            text: "text-rose-700",
            bg: "bg-rose-50",
            iconBot: "bg-rose-600"
        }
    };

    const currentTheme = colorMap[color] || colorMap.blue;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 ${currentTheme.border}`}
        >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}

                {/* Fallback specific logic handled via CSS adjacent sibling or conditional if we prefer cleaner JS */}
                <div
                    className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-100 absolute top-0 left-0"
                    style={{ display: image ? 'none' : 'flex' }} // Hidden by default if image exists
                >
                    <User size={64} />
                </div>

                {/* Floating Icon (Initial State: Hidden or subtle, Hover: Distinct) */}
                {icon && (
                    <div className={`absolute top-4 right-4 p-2 rounded-full glassmorphism text-white opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 ${currentTheme.iconBot}`}>
                        {React.cloneElement(icon, { size: 20 })}
                    </div>
                )}

                {/* Hover Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-medium text-sm tracking-widest uppercase border-b border-white/30 pb-2 inline-block mb-1">
                        Colegio San Sebastián
                    </p>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-6 relative bg-white z-20">
                {/* Decorative line */}
                <div className={`w-12 h-1 rounded-full mb-4 ${currentTheme.bg.replace('bg-', 'bg-').replace('50', '500')}`}></div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 leading-tight group-hover:text-blue-900 transition-colors">
                    {name}
                </h3>
                <p className={`text-sm font-bold uppercase tracking-wider ${currentTheme.text}`}>
                    {role}
                </p>
            </div>
        </motion.div>
    );
};

export default TeamMemberCard;
