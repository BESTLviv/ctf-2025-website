'use client';
import styles from './FormatSection.module.css';
import Image from 'next/image';

const FormatSection: React.FC = () => {
  return (
    <section className={styles.formatSection} id="format">
      <div className={styles.formatContent}>
        <div className={styles.formatContainer}>
          <div className={styles.fingerprintFrame}>
            <Image
              src="/images/finger.png" 
              alt="Fingerprint design"
              width={260}
              height={290}
              className={styles.fingerprintImage}
            />
          </div>
          <div className={styles.frame}>
            <h1>Формат змагань - <span className={`${styles.highlightRed} ${styles.jeopardyFont}`}>Jeopardy</span></h1>
                <p>
                Завдання поділяються на категорії, кожна з яких має власну кількість балів залежно від рівня складності. Протягом відведеного часу учасники намагаються виконати якомога більше завдань, а їхня позиція в рейтингу оновлюється в реальному часі відповідно до набраних балів.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;