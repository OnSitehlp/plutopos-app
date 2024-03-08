import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
export default function Card() {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Toral Users</span>
        <span className={styles.number}>20.452</span>
        <span className={styles.detail}>          
          <span className={styles.positive}>15%</span> more than previous week
          </span>
        
      </div>
    </div>
  );
}
