import * as React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'error' | 'outline';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant, ...rest }, ref) {
    return <button type='button' ref={ref} {...rest} />;
  }
);
