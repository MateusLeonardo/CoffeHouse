import { Header } from "../../Components/Header";
import { LinkButton } from "../../Components/LinkButton";
import { SectionTitle } from "../../Components/SectionTitle";
import styles from "./styles.module.scss";

import { CiFaceSmile, CiCalendarDate } from "react-icons/ci";
import { PiCoffeeThin } from "react-icons/pi";

import mulherTomandoCafe from '../../assets/mulherTomandoCafé.png'
import { CardMenu } from "../../Components/CardMenu";
import { menuItems } from "../../../ArrayMenuItens";


export function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Café fresco</h1>
            <h1>E</h1>
            <h1>Doces caseiros</h1>
            <p>
              Onde cada xícara conta uma história: Experimente os ricos sabores
              do nosso café artesanal e guloseimas caseiras
            </p>

            <LinkButton
              href="#"
              children="Visite-nos hoje"
              padding="1.3rem 4.3rem"
              borderRadius="1rem"
              color="#f9ebd4"
              fontSize="1.2rem"
            />
          </div>
        </div>
      </main>
      <section className={styles.aboutsCoffee}>
        <div className={styles.container}>
          <div>
            <CiFaceSmile size={50} color="#b77820" />
            <h2>5k+</h2>
            <span>Clientes Satisfeitos</span>
          </div>
          <div>
            <PiCoffeeThin size={50} color="#b77820" />
            <h2>70k+</h2>
            <span>Copos de Café Preparados</span>
          </div>
          <div>
            <CiCalendarDate size={50} color="#b77820" />
            <h2>12+</h2>
            <span>Anos de trabalho</span>
          </div>
        </div>
      </section>

      <SectionTitle title="Sobre nós" />

      <section className={styles.sobre}>
        <div className={styles.content}>
        <h2>Café preparado com amor</h2>
        <p>
          Na Coffe House somos apaixonados por servir aos nossos clientes
          deliciosos cafés, doces e guloseimas em um ambiente caloroso e
          acolhedor. nosso café foi fundado com a visão de criar um espaço
          comunitário com bebidas e lanches de qualidade.
        </p>
        <p className={styles.horarioFuncionamento}>Horario de funcionamento:</p>
        <span>Segunda à sexta: 08:00am - 18:00pm</span>
        <span>Sábado: 08:00am - 14:00pm</span>
        <span>Domingo: Fechado</span>
        </div>
        <div className={styles.foto}>
          <img src={mulherTomandoCafe} alt="" />
        </div>
      </section>

      <SectionTitle title="Menu" />

      <CardMenu menuItems={menuItems}/>

    </>
  );
}
