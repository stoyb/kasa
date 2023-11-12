import { Link } from "react-router-dom";
import styles from "./error.module.css";

function Error() {

  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitleMobile}>Oups! La page que<br/> vous demandez n'existe pas.</p>
        <p className={styles.subtitleDesktop}>Oups! La page que vous demandez n'existe pas.</p>
        <Link className={styles.link}to="/">Retourner sur la page d'accueil </Link>
      </main>
    </>
  );
}
export default Error