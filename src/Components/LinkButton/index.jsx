import styles from "./styles.module.scss";

export function LinkButton({
  href,
  children,
  background,
  color,
  padding,
  fontSize,
}) {
  return (
    <a
      className={styles.link}
      href={href}
      style={{
        background: background,
        color: color,
        padding: padding,
        fontSize: fontSize,
      }}
    >
      {children}
    </a>
  );
}
