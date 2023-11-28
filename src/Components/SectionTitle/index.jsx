import styles from './styles.module.scss'

export function SectionTitle({title, color}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{color: color}}>{title}</h1>
    </div>
  )
}