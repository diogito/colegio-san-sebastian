
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

    // Stronger color maps for impact
    const colorMap = {
        blue: {
            borderTop: "border-t-blue-600",
            badge: "bg-blue-600 text-white",
            iconBg: "bg-blue-600",
            shadow: "hover:shadow-blue-900/20"
        },
        red: {
            borderTop: "border-t-red-600",
            badge: "bg-red-600 text-white",
            iconBg: "bg-red-600",
            shadow: "hover:shadow-red-900/20"
        },
        indigo: {
            borderTop: "border-t-indigo-900",
            badge: "bg-indigo-900 text-white",
            iconBg: "bg-indigo-900",
            shadow: "hover:shadow-indigo-900/20"
        },
        rose: {
            borderTop: "border-t-rose-500",
            badge: "bg-rose-500 text-white",
            iconBg: "bg-rose-500",
            shadow: "hover:shadow-rose-900/20"
        }
    };

    const currentTheme = colorMap[color] || colorMap.blue;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay * 0.05 }}
            className={`group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 border-t-4 ${currentTheme.borderTop} ${currentTheme.shadow} hover:-translate-y-2`}
        >
            {/* Image Container with Overlay */}
            <div className="relative h-72 overflow-hidden bg-slate-200">
                {/* Icon Badge Floating */}
                {icon && (
                    <div className={`absolute top-0 right-0 p-3 rounded-bl-xl text-white shadow-md z-20 ${currentTheme.iconBg}`}>
                        {React.cloneElement(icon, { size: 22 })}
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}

                <div
                    className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 absolute top-0 left-0"
                    style={{ display: image ? 'none' : 'flex' }}
                >
                    <User size={64} />
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/50 px-2 py-1 rounded">
                        Ver Perfil
                    </span>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-5 text-center relative">
                <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3 ${currentTheme.badge}`}>
                    {role}
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {name}
                </h3>
            </div>
        </motion.div>
    );
};

export default TeamMemberCard;
