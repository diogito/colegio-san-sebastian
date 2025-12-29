
import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Award, ArrowRight } from 'lucide-react';

const ProfileCard = ({
    name,
    role,
    image,
    category,
    email,
    layout = 'vertical',
    delay = 0
}) => {

    // Horizontal Layout (Leadership / Detailed)
    if (layout === 'horizontal') {
        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay * 0.1 }}
                className="flex flex-col sm:flex-row bg-white rounded-r-xl border-l-4 border-l-navy-900 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
                {/* Photo - Fixed Aspect Ratio */}
                <div className="w-full sm:w-48 h-64 sm:h-auto relative shrink-0">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
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

                {/* Content - Left Aligned & Clean */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-white">
                    <div className="mb-1">
                        <span className="inline-block px-2 py-1 bg-navy-50 text-navy-800 text-xs font-black uppercase tracking-widest rounded mb-2">
                            {role}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-heading leading-tight">
                            {name}
                        </h3>
                    </div>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-red-600 my-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                    {email && (
                        <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors text-sm font-medium w-fit">
                            <Mail size={16} />
                            <span>{email}</span>
                        </a>
                    )}
                </div>
            </motion.div>
        );
    }

    // Vertical Layout (Staff / Grid) - Structured Card
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay * 0.05 }}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden border border-slate-100 flex flex-col"
        >
            {/* Header Color Line */}
            <div className="h-1 w-full bg-gradient-to-r from-navy-900 to-blue-800"></div>

            {/* Photo Top (Not Circle) */}
            <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300 absolute top-0 left-0" style={{ display: image ? 'none' : 'flex' }}>
                    <User size={32} />
                </div>

                {/* Category Overlay (Bottom of Image) */}
                {category && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                        <p className="text-white text-[10px] font-bold uppercase tracking-wider opacity-90">
                            {category}
                        </p>
                    </div>
                )}
            </div>

            {/* Info - Left Aligned */}
            <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="text-lg font-bold text-slate-800 leading-tight mb-1 group-hover:text-blue-800 transition-colors">
                        {name}
                    </h4>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide">
                        {role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
