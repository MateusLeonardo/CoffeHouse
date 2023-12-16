import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Badge } from "antd";
import { useCart } from "../CartContext/CartContext";

export function Header() {
  const { cartSize } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>
          Coffee <br /> House
        </p>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="eventos">Eventos</Link>
          </li>
          <li>
            <Link to="galeria">Galeria</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <div>
          <Link to="/carrinho">
            <Badge size="small" count={cartSize}>
              <FiShoppingCart size={23} color="#C7C3C0" />
            </Badge>
          </Link>
          <Link to="/login">
            <FiUser size={23} color="#C7C3C0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
