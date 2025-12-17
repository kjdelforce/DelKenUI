import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to DelKenUI</h1>

        <p className={styles.description}>
          A modern Next.js application with Vercel Speed Insights enabled
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>⚡ Speed Insights</h2>
            <p>Monitor real user experience with Core Web Vitals</p>
          </div>

          <div className={styles.feature}>
            <h2>🚀 Next.js</h2>
            <p>React framework with built-in optimization</p>
          </div>

          <div className={styles.feature}>
            <h2>📊 Analytics</h2>
            <p>Track performance metrics and improve user experience</p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="https://vercel.com/docs/speed-insights" target="_blank" rel="noopener noreferrer">
            Learn about Speed Insights →
          </a>
        </div>
      </div>
    </main>
  );
}
