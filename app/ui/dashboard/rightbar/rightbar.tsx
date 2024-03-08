import { MdPlayCircleFilled } from "react-icons/md";
import styles from "./rightbar.module.css";
import Image from "next/image";
export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/new-brand.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Disponible Ahora!</span>
          <h3 className={styles.title}>
            Incorporams Nuevos Productos de Belleza
          </h3>
          <span className={styles.subtitle}>
            Pídelos en Perfumeria, están en oferta!!
          </span>
          <p className={styles.description}>
            Nuevas marcas se incorporan a nuestro stock cada mes, asi es que
            revisa esta sección.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Visitar
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Disponible Ahora!</span>
          <h3 className={styles.title}>
            Incorporams Nuevos Productos de Belleza
          </h3>
          <span className={styles.subtitle}>
            Pídelos en Perfumeria, están en oferta!!
          </span>
          <p className={styles.description}>
            Nuevas marcas se incorporan a nuestro stock cada mes, asi es que
            revisa esta sección.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Visitar
          </button>
        </div>
      </div>
    </div>
  );
}
