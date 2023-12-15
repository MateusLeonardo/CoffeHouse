import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";

export function MenuItem({ response }) {
  return (
    <div className={styles.container}>
      <div className={styles.itemImg}>
        <span>
          {response.itemAvaliacao} <FaStar color="#fd9d08" />
        </span>
        <img src={response.itemImagem} alt="" />
      </div>
      <div className={styles.itemContent}>
        <h3>
          {response.itemNome} <span>{response.itemPreco}</span>
        </h3>
        <p>{response.itemDescricao}</p>
      </div>
      <button>Pedir Agora</button>
    </div>
  );
}
