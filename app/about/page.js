import styles from './page.module.css';

export const metadata = {
  title: 'About — MINIMAL',
  description: 'The philosophy, balance and design system behind MINIMAL.',
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/" aria-label="MINIMAL home" className={styles.logoLink}>
          <img src="/minimal-logo.svg" alt="MINIMAL" className={styles.logo} />
        </a>
        <a href="/" className={styles.back}>Back / Home</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.kicker}>About MINIMAL / 01</div>
        <h1>Balance is<br />the structure.</h1>
        <p className={styles.lead}>MINIMAL is built on one idea: remove what does not belong, then give what remains enough space to matter.</p>
      </section>

      <section className={styles.split}>
        <div className={styles.imageWrap}>
          <img src="/editorial-grey.png" alt="MINIMAL monochrome editorial" />
          <span>Study / Proportion / 01</span>
        </div>
        <div className={styles.story}>
          <div className={styles.kicker}>Our point of view</div>
          <h2>Less is not the absence of design.</h2>
          <p>It is the discipline to know what deserves to stay. MINIMAL approaches clothing through proportion, movement, texture and restraint. The goal is not to make pieces disappear, but to make every decision feel deliberate.</p>
          <p>We work in systems rather than isolated statements. A garment should hold its own, but it should also belong beside everything around it. That is where balance becomes more than a visual idea — it becomes the method.</p>
        </div>
      </section>

      <section className={styles.balance}>
        <div className={styles.mark}>
          <img src="/open-m-crop.png" alt="MINIMAL Open-M mark" />
        </div>
        <div className={styles.balanceCopy}>
          <div className={styles.kicker}>The mark / Balance</div>
          <h2>Two sides. One form.</h2>
          <p>The Open-M symbol expresses the same principle as the wardrobe: tension held in balance. The structure remains recognizable while the centre stays open. Nothing is over-explained. Nothing is added without purpose.</p>
        </div>
      </section>

      <section className={styles.principles}>
        <article><span>01 / FORM</span><h3>Reduction before decoration.</h3><p>Silhouette comes first. Every remaining line must justify its place.</p></article>
        <article><span>02 / MATERIAL</span><h3>Texture becomes the detail.</h3><p>Weight, surface and construction create character without unnecessary ornament.</p></article>
        <article><span>03 / BALANCE</span><h3>Contrast without conflict.</h3><p>Soft and rigid. Quiet and present. Familiar and unfamiliar. The tension is intentional.</p></article>
        <article><span>04 / SYSTEM</span><h3>Designed to live together.</h3><p>Every piece belongs to a wider wardrobe, not a single moment.</p></article>
      </section>

      <section className={styles.statement}>
        <div className={styles.kicker}>MINIMAL / 2026</div>
        <p>Only what matters.</p>
      </section>

      <footer className={styles.footer}>
        <span>© 2026 MINIMAL</span>
        <a href="/">Return home →</a>
      </footer>
    </main>
  );
}
