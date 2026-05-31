import React from 'react';
import Container from './Container';

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'soft' | 'dark' | 'red';
}

export default function Section({
  children,
  id,
  className = '',
  variant = 'default',
}: SectionProps) {
  // Variantes obligatorias del sistema visual por bloques cromáticos
  const variants = {
    default: 'bg-[#FFFFFF] text-[#0F0F0F]',
    soft: 'bg-[#F5F5F5] text-[#0F0F0F]',
    dark: 'bg-[#0F0F0F] text-white',
    red: 'bg-[#E31E24] text-white',
  };

  // Respiración visual robusta e inductiva para consumo/retail moderno
  return (
    <section
      id={id}
      className={`py-16 md:py-24 transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}