"use client";

import styles from './Bottom.module.css';
import Image from 'next/image';

const BottomSection: React.FC = () => {
  return (
    <section className={styles.bottomSection}>
      <div className={styles.bottomBlock}></div>

      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src="/images/bottomLeft.svg"
            alt="left"
            width={500}
            height={580}
          />
        </div>

        <div className={styles.right}>
          <Image
            src="/images/bottomRight.svg"
            alt="right"
            width={500}
            height={580}
          />
        </div>

        <Image
          src="/images/leftMobile.svg"
          alt="left mobile"
          width={300}
          height={300}
          className={styles.leftMobile}
        />
        <Image
          src="/images/rightMobile.svg"
          alt="right mobile"
          width={300}
          height={300}
          className={styles.rightMobile}
        />
      </div>

      <div className={styles.strip}>
        <div className={styles.stripItem}>
          <Image
            src="/images/logocopy.png"
            alt="CTF logo"
            width={75}
            height={50}
            className={`${styles.statIcon} ${styles.bestLogo}`}
          />
        </div>

        <div className={styles.stripItem}>
          <div className={styles.socialLogos}>
            <a href="https://t.me/bestlviv" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/telegram.png"
                alt="Telegram"
                width={35}
                height={35}
                className={styles.TgIcon}
              />
            </a>
            <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={35}
                height={35}
                className={styles.statIcon}
              />
            </a>
            <a href="https://ua.linkedin.com/company/bestlviv" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={35}
                height={35}
                className={styles.statIcon}
              />
            </a>
          </div>
        </div>

        <div className={styles.stripItem}>
          <p className={`${styles.year} ${styles.yearText}`}>2025</p>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;