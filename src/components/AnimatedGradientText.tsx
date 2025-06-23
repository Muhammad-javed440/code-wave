import { ReactNode } from 'react';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      style={{
        animation: 'gradient-animation 6s ease-in-out infinite',
        backgroundSize: '300%',
      }}
      className={`bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
} 