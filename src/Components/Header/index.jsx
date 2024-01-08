import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Badge } from "antd";
import { useCart } from "../CartContext/CartContext";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export function Header() {
  const { cartSize } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>
          Coffee House
        </p>

        {menuOpen ? (
          <IoClose size={35} color="#F5F6F6" onClick={handleToggleMenu} />
        ) : (
          <IoMenu size={35} color="#F5F6F6" onClick={handleToggleMenu} />
        )}

        <nav className={`${styles.navMenu} ${menuOpen && styles.active}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#eventos">Eventos</a>
            </li>
            <li>
              <a href="#galeria">Galeria</a>
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
        </nav>
      </div>
    </header>
  );
}
