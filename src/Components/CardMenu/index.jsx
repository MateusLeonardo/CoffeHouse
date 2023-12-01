import styles from "./styles.module.scss";
import { MenuItem } from "../MenuItem";

export function CardMenu({ menuItems }) {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        {menuItems.map((response) => {
          return <MenuItem key={response.id} response={response} />;
        })}
      </div>
    </div>
  );
}
