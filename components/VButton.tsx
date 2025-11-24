import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface VButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const VButton = forwardRef<HTMLButtonElement, VButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-6 py-3 rounded-md font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' &&
            'bg-gold text-black hover:bg-gold/90 hover:-translate-y-0.5 shadow-gold',
          variant === 'secondary' &&
            'bg-primary-purple text-white hover:bg-primary-purple/90 hover:-translate-y-0.5',
          variant === 'outline' &&
            'border-2 border-gold text-gold hover:bg-gold hover:text-black hover:-translate-y-0.5',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

VButton.displayName = 'VButton';
