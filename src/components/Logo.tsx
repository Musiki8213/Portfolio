interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'initials';
}

export const Logo = ({ className = '', size = 'md', variant = 'full' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-5xl md:text-6xl lg:text-7xl',
  };

  if (variant === 'initials') {
    return (
      <div className={`font-bold ${sizeClasses[size]} ${className}`}>
        <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          MS
        </span>
      </div>
    );
  }

  return (
    <div className={`font-bold ${sizeClasses[size]} ${className} leading-tight`}>
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
        <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          Musiki
        </span>
        <span className="text-[#000000] dark:text-[#e5e5e5] font-semibold">
          Sithomola
        </span>
      </div>
    </div>
  );
};

