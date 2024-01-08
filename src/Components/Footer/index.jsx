import { useEffect } from "react";
import styles from "./styles.module.scss";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Maps from "../Maps";

export function Footer() {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.content}>
        <div>
          <h3>Horários de funcionamento</h3>
          <span>Segunda à sexta: 08:00am - 18:00pm</span>
          <span>Sábado: 08:00am - 14:00pm</span>
          <span>Domingo: Fechado</span>
        </div>
        <div>
          <h3>Redes sociais</h3>
          <span>Nos siga no Instagram e Facebook para mais atualizações</span>
          <a href="">
            <FaFacebook size={30} color="#fff" />
          </a>
          <a href="">
            <FaInstagram size={30} color="#fff" />
          </a>
          <a href="">
            <FaTiktok size={30} color="#fff" />
          </a>
          <a href="">
            <FaWhatsapp size={30} color="#fff" />
          </a>
        </div>
      </div>
      <p className={styles.copy}>Todos os direitos reservados</p>
    </footer>
  );
}
