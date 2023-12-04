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
            <Link to="/">
              <LinkButton
                children="Home"
                color="#C7C3C0"
                fontSize="1.3rem"
                padding="10px 15px"
              />
            </Link>
          </li>
          <li>
            <LinkButton
              href="/"
              children="Menu"
              color="#C7C3C0"
              fontSize="1.3rem"
              padding="10px 15px"
            />
          </li>
          <li>
            <LinkButton
              href="/"
              children="Eventos"
              color="#C7C3C0"
              fontSize="1.3rem"
              padding="10px 15px"
            />
          </li>
          <li>
            <LinkButton
              href="/"
              children="Galeria"
              color="#C7C3C0"
              fontSize="1.3rem"
              padding="10px 15px"
            />
          </li>
          <li>
            <LinkButton
              href="/"
              children="Reviews"
              color="#C7C3C0"
              fontSize="1.3rem"
              padding="10px 15px"
            />
          </li>
        </ul>

        <div>
          <button>
            <FiSearch size={23} color="#C7C3C0" />
          </button>
          <button>
            <FiShoppingCart size={23} color="#C7C3C0" />
          </button>
          <button>
            <Link to="/login">
              <FiUser size={23} color="#C7C3C0" />
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
