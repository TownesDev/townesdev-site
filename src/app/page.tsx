import { HOLDING_MESSAGE, PORTFOLIO_URL, SITE_NAME } from "@/lib/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="site-title">
        <h1 id="site-title" className={styles.title}>
          {SITE_NAME}
        </h1>
        <p className={styles.message}>{HOLDING_MESSAGE}</p>
        <a className={styles.link} href={PORTFOLIO_URL}>
          View Donovan Townes
        </a>
      </section>
    </main>
  );
}
