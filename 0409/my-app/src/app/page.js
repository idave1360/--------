import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello Next.js
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <img src="https://picsum.photos/536/354"/>

      <div className={styles.grid}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            A <span>-&gt;</span>
          </h2>
          <p>A stands for apple.</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            B <span>-&gt;</span>
          </h2>
          <p>B stands for banana.</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            C <span>-&gt;</span>
          </h2>
          <p>C stands for cherry.</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            D <span>-&gt;</span>
          </h2>
          <p>D stands for durian.</p>
        </a>
      </div>
    </main>
  );
}
