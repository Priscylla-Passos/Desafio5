import clsx from 'clsx';
import React from 'react';
import './button.css';

export interface ButtonProps {
  
  backgroundColor?: string;
  
  size?: 'primaryBig' | 'primaryMedium' | 'secondarySmall' | 'secondaryMedium';
  
  label: string;
  
  onClick?: () => void;
}


export const Button = ({
  size = 'primaryBig',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
    return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
