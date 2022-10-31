import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({size = 'lg', children, asChild}: TextProps){
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp 
            className={clsx(
                "text-lg text-black font-sans", 
                {
                    'text-md': size === 'sm',
                    'text-lg': size === 'md',
                    'text-xl': size === 'lg',
                    'text-2xl': size === 'xl',
                }
            )}
        >
            {children}
        </Comp>
    )
}