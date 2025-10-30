'use client';
import styles from './PartnersSection.module.css';
import Image from 'next/image';

const PartnersSection: React.FC = () => {
  
  return (
    <section className={styles.partnersSection}>
      
      <div className={styles.content}>
        <h2 className={styles.title}>НАС ПІДТРИМУВАЛИ</h2>
        
        <div className={styles.logosRow4x4}>
          <Image src="/images/logo_underdefense.svg" alt="UnderDefense Cybersecurity" width={250} height={100} className={styles.logo} />
          <Image src="/images/logo_sombra.svg" alt="Sombra" width={250} height={100} className={styles.logo} />
          <Image src="/images/logo_softserve.svg" alt="SoftServe" width={250} height={100} className={styles.logo} />
          <Image src="/images/logo_blackthorn_vision.svg" alt="Blackthorn Vision" width={250} height={100} className={styles.logo} />

          <Image src="/images/logo_kevych_solutions.svg" alt="Kevych Solutions" width={250} height={100} className={styles.logo} />
          <Image src="/images/logo_sigma.svg" alt="Sigma Software" width={250} height={100} className={styles.logo} />
          <Image src="/images/logo_beetroot.svg" alt="Beetroot" width={250} height={100} className={styles.logo} />
          <Image src="/images/logo_binance.svg" alt="Binance" width={250} height={100} className={styles.logo} />
        </div>
          
        <div className={styles.logosRow5}>
          <Image src="/images/logo_youth_capital.svg" alt="Львів - Молодіжна Столиця Європи 2025" width={200} height={150} className={styles.logoLarge} />
          <Image src="/images/logo_molofond.svg" alt="МолоФонд Львів" width={150} height={150} className={styles.logoLarge} />
         
          <Image src="/images/logo_germany.svg" alt="Співпраця з Німеччиною" width={250} height={150} className={styles.logoLarge} />
          <Image src="/images/logo_kfw.svg" alt="KfW" width={150} height={150} className={styles.logoLarge} />
          <Image src="/images/logo_unicef.svg" alt="UNICEF" width={200} height={150} className={styles.logoLarge} />
        </div>
      </div>

    </section>
  );
};

export default PartnersSection;