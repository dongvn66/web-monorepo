import * as React from 'react';
import cx from 'classnames';

export interface SectionProps
  extends React.ComponentPropsWithoutRef<'section'> {}

export const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section {...props} className={cx(className)}>
      {children}
    </section>
  );
};
