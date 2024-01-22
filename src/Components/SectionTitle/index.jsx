import React from 'react';
import styles from './styles.module.scss';

export const SectionTitle = React.forwardRef(({ title, color, id }, ref) => {
  return (
    <div className={styles.container} id={id} ref={ref}>
      <h1 className={styles.title} style={{ color: color }}>
        {title}
      </h1>
    </div>
  );
});

