import React from 'react';

const Card = ({ title, children, className = '' }) => {
    return (
        <div className={className}
            style={{
                backgroundColor: 'var(--white)',
                padding: '2rem',
                borderLeft: '4px solid var(--secondary-color)', // Red accent on left
                boxShadow: 'var(--shadow-md)',
                height: '100%',
                position: 'relative',
                transition: 'transform 0.3s'
            }}>
            {title && (
                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: 'var(--primary-color)',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase'
                }}>
                    {title}
                </h3>
            )}
            <div style={{ color: 'var(--text-light)', fontFamily: 'var(--font-body)', fontSize: '1.1rem' }}>
                {children}
            </div>
        </div>
    );
};

export default Card;
