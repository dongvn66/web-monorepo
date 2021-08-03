import * as React from 'react';
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant: 'primary' | 'error' | 'outline';
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=button.d.ts.map