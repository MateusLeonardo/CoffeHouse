import styles from './styles.module.scss'

export function SectionTitle({title, color, id}) {
  return (
    <div className={styles.container} id={id}>
      <h1 className={styles.title} style={{color: color}}>{title}</h1>
    </div>
  )
}