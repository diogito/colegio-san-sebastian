import React from 'react';

const Card = ({ title, children, className = '' }) => {
    return (
        <div className={`
      bg-white 
      rounded-lg 
      shadow-md 
      p-6 
      transition-all 
      duration-300 
      hover:shadow-lg 
      hover:-translate-y-1 
      border 
      border-gray-100
      ${className}
    `}
            style={{
                backgroundColor: 'var(--white)',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                height: '100%'
            }}>
            {title && (
                <h3 style={{
                    fontSize: '1.25rem',
                    marginBottom: '1rem',
                    color: 'var(--primary-color)',
                    borderBottom: '2px solid var(--secondary-color)',
                    display: 'inline-block',
                    paddingBottom: '0.25rem'
                }}>
                    {title}
                </h3>
            )}
            <div style={{ color: 'var(--text-color)' }}>
                {children}
            </div>
        </div>
    );
};

export default Card;
