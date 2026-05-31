import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  // Base refinada: tracking más fino, transición fluida para efectos de elevación
  const baseStyles = 'inline-flex items-center justify-center font-sans font-bold uppercase tracking-[0.1em] rounded-none transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  
  // Variantes con glows sutiles (shadow) y elevación premium
  const variants = {
    primary: 'bg-[#E31E24] text-white border border-transparent hover:bg-[#B71518] hover:shadow-[0_8px_20px_rgba(227,30,36,0.25)] hover:-translate-y-0.5 focus:ring-[#E31E24]',
    secondary: 'bg-[#0F0F0F] text-white border border-transparent hover:bg-[#1A1A1A] hover:shadow-[0_8px_20px_rgba(15,15,15,0.2)] hover:-translate-y-0.5 focus:ring-[#0F0F0F]',
    outline: 'border border-[#E8E8E8] text-[#0F0F0F] bg-white hover:border-[#0F0F0F] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 focus:ring-[#0F0F0F]',
    ghost: 'text-[#0F0F0F] bg-transparent hover:bg-[#F5F5F5] focus:ring-[#1A1A1A]',
    dark: 'bg-[#FFFFFF] text-[#0F0F0F] hover:bg-[#F5F5F5] focus:ring-[#FFFFFF]',
  };

  // Paddings ajustados para una proporción comercial más esbelta
  const sizes = {
    sm: 'text-[11px] px-5 py-2.5',
    md: 'text-[12px] px-7 py-3.5',
    lg: 'text-[13px] px-9 py-4',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternalLink = external || href.startsWith('http') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}