import { Header } from "../../Components/Header";
import { LinkButton } from "../../Components/LinkButton";
import styles from "./styles.module.scss";

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
    </>
  );
}
