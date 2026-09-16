import styles from './page.module.css';

export const metadata = {
  title: 'Collection — MINIMAL',
  description: 'The MINIMAL wardrobe system.',
};

const pieces = [
  {name:'Essential Form 01', tone:'Chalk', image:'/look-essential.png', href:'/product/essential-form-01'},
  {name:'Leather Structure 02', tone:'Black', image:'/look-leather.png'},
  {name:'Utility Layer 03', tone:'Umber', image:'/look-utility.png'},
  {name:'Scale Trouser 04', tone:'Washed Grey', image:'/editorial-scale.png'},
  {name:'Motion Layer 05', tone:'Stone', image:'/editorial-motion.png'},
  {name:'Leather Boot 06', tone:'Black', image:'/editorial-boots.png'},
];

export default function CollectionPage(){
  return <main className={styles.page}>
    <header className={styles.header}>
      <a href="/" className={styles.logo}><img src="/minimal-logo.svg" alt="MINIMAL" /></a>
      <nav><a href="/collection">Collection</a><a href="/about">About</a></nav>
    </header>

    <section className={styles.intro}>
      <div><div className={styles.kicker}>NEW FORM / 01</div><h1>Wardrobe<br/>System</h1></div>
      <p>A study in balance, proportion and repetition. Each piece is designed to exist alone, then become quieter and stronger as part of the whole.</p>
    </section>

    <div className={styles.toolbar}><span>Collection 01 / 06 pieces</span><div><button>All</button><button>Outerwear</button><button>Essentials</button><button>Objects</button></div></div>

    <section className={styles.grid}>
      {pieces.map((p,i)=><a className={`${styles.card} ${i===0||i===3?styles.wide:''}`} href={p.href||'#'} key={p.name}>
        <div className={styles.image}><img src={p.image} alt={p.name}/><span>{String(i+1).padStart(2,'0')}</span></div>
        <div className={styles.meta}><strong>{p.name}</strong><span>{p.tone}</span></div>
      </a>)}
    </section>

    <section className={styles.statement}>
      <div className={styles.mark}><img src="/open-m.svg" alt="MINIMAL Open-M mark"/></div>
      <div><span>THE SYSTEM / 2026</span><h2>Nothing added<br/>without reason.</h2><p>MINIMAL is built around the space between restraint and expression. Details earn their place. Silhouettes carry the identity.</p></div>
    </section>

    <footer><img src="/minimal-logo.svg" alt="MINIMAL"/><span>Balance / Form / Function</span><span>© 2026 MINIMAL</span></footer>
  </main>
}
