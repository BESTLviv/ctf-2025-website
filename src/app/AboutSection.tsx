'use client';

import styles from './AboutSection.module.css';
import Image from 'next/image';

const aboutFrameImage: string = '/images/AbouttFrame.png';

const AboutSection = () => {
  const ctfText = "CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF ";

  return (
    <section className={styles.aboutSection} id="about">
      <a
        href="https://t.me/ctf_2025_bot"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.registerButtonManual}
        aria-label="Зареєструватися на BEST Capture The Flag через Telegram-бот"
      >
        ЗАРЕЄСТРУВАТИСЯ
      </a>

      <div className={styles.separatorLine}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.mainContentFrame}>
          <div className={styles.textFrameContainer}>
            <Image
              src={aboutFrameImage}
              alt="About section frame"
              fill
              className={styles.aboutFrameImage}
              priority
            />
            <div className={styles.textInsideFrame}>
              <p className={styles.frameParagraph}>
                <strong>BEST Capture The Flag</strong> – це змагання з кібербезпеки, де
                учасники конкурують у вирішенні практичних завдань.
              </p>
              <p className={styles.frameParagraph}>
                <strong>Основна мета</strong> – знайти так званий &quot;прапор&quot; (фрагмент коду
                або рядок), який підтверджує, що завдання виконано правильно.
              </p>
              <p className={styles.frameParagraph}>
                <strong>CTF</strong> – це можливість перевірити себе, навчитися мислити, як
                хакер і зробити перший крок у світ професійної кібербезпеки
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.ctfTickerStrip}>
        <div className={styles.ctfTickerContent}>
          {ctfText}
          {ctfText}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;