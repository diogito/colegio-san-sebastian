
import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Award, ChevronRight } from 'lucide-react';

/**
 * ProfileCard Component
 * @param {string} name - Staff name
 * @param {string} role - Job title
 * @param {string} image - URL to photo
 * @param {string} category - Optional category label
 * @param {string} layout - 'horizontal' (Directivos style) | 'vertical' (Grid style)
 * @param {number} delay - Animation delay
 */
const ProfileCard = ({
    name,
    role,
    image,
    category,
    email,
    layout = 'vertical',
    delay = 0
}) => {

    if (layout === 'horizontal') {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay * 0.1 }}
                className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
            >
                {/* Photo Section */}
                <div className="w-full sm:w-48 h-56 sm:h-auto overflow-hidden relative shrink-0">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300 absolute top-0 left-0" style={{ display: image ? 'none' : 'flex' }}>
                        <User size={48} />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors font-heading tracking-wide">
                                {name}
                            </h3>
                            <div className="w-12 h-1 bg-red-600 my-2"></div>
                        </div>
                        <Award className="text-slate-200 group-hover:text-blue-600 transition-colors" size={24} />
                    </div>

                    <p className="text-blue-700 font-bold uppercase text-sm tracking-wider mb-3">
                        {role}
                    </p>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Profesional comprometido con la excelencia educativa y el desarrollo integral de los estudiantes del Colegio San Sebastián.
                    </p>

                    {email && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-blue-600 transition-colors">
                            <Mail size={14} />
                            <span>{email}</span>
                        </div>
                    )}
                </div>
            </motion.div>
        );
    }

    // Vertical (Grid) Layout - Compact, Clean, Professional
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay * 0.05 }}
            className="bg-white rounded-lg border border-slate-100 p-4 hover:shadow-md hover:border-blue-200 transition-all duration-200 group text-center"
        >
            {/* Avatar Circle */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-slate-50 group-hover:border-blue-50 transition-colors shadow-inner relative">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300 absolute top-0 left-0" style={{ display: image ? 'none' : 'flex' }}>
                    <User size={32} />
                </div>
            </div>

            {/* Text Details */}
            <h4 className="text-base font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors line-clamp-1" title={name}>
                {name}
            </h4>

            <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                {role}
            </p>

            {category && (
                <span className="inline-block bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tight">
                    {category}
                </span>
            )}
        </motion.div>
    );
};

export default ProfileCard;
