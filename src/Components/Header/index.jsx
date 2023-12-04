import { Link } from "react-router-dom";
import { LinkButton } from "../LinkButton";
import styles from "./styles.module.scss";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export function Header() {
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
            <FiShoppingCart size={23} color="#C7C3C0" />
          </Link>
          <Link to="/login">
            <FiUser size={23} color="#C7C3C0" />
          </Link>
        </div>
      </div>
    </header>
  );
}
