import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'red' | 'dark' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-sans text-xs font-bold uppercase tracking-widest px-2.5 py-1 transition-colors duration-150 rounded-none';

  const variants = {
    default: 'bg-[#F5F5F5] text-[#1A1A1A] border border-[#E8E8E8]',
    red: 'bg-[#E31E24] text-white',
    dark: 'bg-[#0F0F0F] text-white',
    outline: 'border border-[#E8E8E8] text-[#1A1A1A] bg-transparent',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}