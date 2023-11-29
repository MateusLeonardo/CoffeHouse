import { FaStar } from "react-icons/fa6";
import styles from "./styles.module.scss";

export function CardMenu({ menuItems }) {
  return (
    <div className={styles.container}>
      {menuItems.map((response) => {
        return (
          <div key={response.id}>
            <div>
              <span>
                {response.itemAvaliacao} <FaStar color="#fd9d08" />
              </span>
              <img src={response.itemImagem} alt="" />
            </div>
            <h3>
              {response.itemNome} <span>{response.itemPreco}</span>
            </h3>
            <p>{response.itemDescricao}</p>
            <button>Pedir Agora</button>
          </div>
        );
      })}
    </div>
  );
}
