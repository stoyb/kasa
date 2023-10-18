import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import styles from "../styles/error.module.css";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header/>
      <main className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitleMobile}>Oups! La page que<br/> vous demandez n'existe pas.</p>
        <p className={styles.subtitleDesktop}>Oups! La page que vous demandez n'existe pas.</p>
        <Link className={styles.link}to="/">Retourner sur la page d'accueil </Link>
      </main>
    </div>
  );
}
export default Error