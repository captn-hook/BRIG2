import styles from "./page.module.css";
import ClientOnly from './ClientOnly';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ClientOnly>
        </ClientOnly>
      </div>
    </main>
  );
}
