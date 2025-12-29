import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail } from 'lucide-react';
import styles from './ProfileCard.module.css';

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
                className={styles.horizontalWrapper}
            >
                {/* Photo */}
                <div className={styles.horizontalImageContainer}>
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className={styles.image}
                            style={{ filter: 'grayscale(10%)' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <div style={{ width: '100%', height: '100%', display: image ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', color: '#cbd5e1', position: 'absolute', top: 0, left: 0 }}>
                        <User size={48} />
                    </div>
                </div>

                {/* Content */}
                <div className={styles.horizontalContent}>
                    <div>
                        <span className={styles.horizontalRole}>
                            {role}
                        </span>
                        <h3 className={styles.horizontalName}>
                            {name}
                        </h3>
                    </div>

                    <div className={styles.divider}></div>

                    {email && (
                        <a href={`mailto:${email}`} className={styles.emailLink}>
                            <Mail size={16} />
                            <span>{email}</span>
                        </a>
                    )}
                </div>
            </motion.div>
        );
    }

    // Vertical Layout (Staff / Grid)
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay * 0.05 }}
            className={styles.cardWrapper}
        >
            <div className={styles.verticalHeader}></div>

            <div className={styles.imageContainer}>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className={styles.image}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                <div style={{ width: '100%', height: '100%', display: image ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', color: '#cbd5e1', position: 'absolute', top: 0, left: 0 }}>
                    <User size={32} />
                </div>

                {category && (
                    <div className={styles.categoryOverlay}>
                        <p className={styles.categoryText}>
                            {category}
                        </p>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div>
                    <h4 className={styles.name}>
                        {name}
                    </h4>
                    <p className={styles.role}>
                        {role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
