import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Changed rounded-full to rounded-xl (0.75rem)
  const baseStyles = "px-8 py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-95 text-sm tracking-wider uppercase";
  
  const variants = {
    primary: "bg-brand-gold text-primary-green hover:bg-[#c59d45] hover:shadow-lg shadow-md",
    outline: "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white",
    ghost: "text-primary-green hover:text-brand-gold bg-transparent px-4"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};