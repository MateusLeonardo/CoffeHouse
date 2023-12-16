import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";
import { useCart } from "../CartContext/CartContext";
import { toast } from "react-toastify"; // Importa o toast
import "react-toastify/dist/ReactToastify.css";
import { FiShoppingCart } from "react-icons/fi";

export function MenuItem({ response }) {
  const { addToCart } = useCart();

  const handleSelectItem = () => {
    addToCart(response);

    toast.success("Item adicionado ao carrinho!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
          {response.itemNome} <span>{new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(response.itemPreco)}</span>
        </h3>
        <p>{response.itemDescricao}</p>
      </div>
      <button onClick={handleSelectItem}>Pedir Agora <FiShoppingCart /></button>
    </div>
  );
}
