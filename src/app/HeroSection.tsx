"use client";
import styles from './HeroSection.module.css';
import Image from 'next/image';

const heroImage: string = '/images/bigmask.png';
const mitkaIcon: string = '/images/mitka.svg';
const candelarIcon: string = '/images/Group 950 (1).png';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.Uppertext}>
          <div className={styles.UppertitleContainer1}>
             <Image src={mitkaIcon} alt="Mitka" width={20} height={20} className={styles.mitkaIcon} />
             <p className={styles.nearMitka}>Lviv</p>
          </div>
          <div className={styles.UppertitleContainer2}>
             <Image src={candelarIcon} alt="Calendar" width={20} height={20} className={styles.candelarIcon} />
             <p className={styles.nearcalendar}>22.11</p>
          </div>
          </div>
           <h1 className={styles.heroTitle}>
            <span className={styles.titleBest}>BEST</span>
            <span className={styles.titleCTF}>
              <span className={styles.redC}>C</span>apture
              <span className={styles.redT}> T</span>he
              <span className={styles.redF}> F</span>lag
            </span>
          </h1>
          <div className={styles.heroSubtitleContainer}>
            <p className={styles.heroQuote}>Щоб захищати, треба вміти атакувати</p>
          </div>
        </div>
        <div className={styles.heroMask}>
          <Image src={heroImage} alt="Фон чела" width={600} height={400} className={styles.heroMaskImage} />
        </div>
        <div className={styles.heroCode}></div>
      </div>
    </section>
  );
};

export default HeroSection;