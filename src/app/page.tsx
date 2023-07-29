import styles from "./page.module.css";
import SingUp from "./components/singUp/SingUp";

export default function Home() {
  return (
    <div className={styles.container}>
      <SingUp />
    </div>
  );
}
