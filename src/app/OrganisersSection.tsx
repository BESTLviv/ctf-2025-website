'use client';

import React from 'react';
import styles from './OrganisersSection.module.css';
import Image from 'next/image';

const OrganisersSection = () => {
  return (
    <section className={styles.organisersSection}>
      <div className={`${styles.backgroundBlob} ${styles.blobMap}`}></div>
      <div className={`${styles.backgroundBlob} ${styles.blobTitle}`}></div>
      <div className={`${styles.backgroundBlob} ${styles.blobRight}`}></div>

      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Хто ми?</h2>

        <div className={styles.bestLvivBlock}>
          <div className={styles.bestLvivText}>
            <p className={styles.bestLvivHeader}>BEST LVIV</p>
            <p>
              (Board of European Students of Technology) – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розвиток студентів через обмін знаннями та співпрацю компаній, університетів та студентів Європи.
            </p>
          </div>
          <Image
            src="/images/bestlogo.svg"
            alt="BEST Logo"
            width={150}
            height={150}
            className={styles.bestLvivLogo}
            priority
          />
        </div>

        <div className={styles.mapAndStats}>
          <div className={styles.mapContainer}>
            <Image
              src="/images/best.svg"
              alt="Map of BEST locations"
              width={600}
              height={400}
              className={styles.mapImage}
              priority
            />
          </div>

          <ul className={styles.statsList}>
            <li className={styles.statItem}>
              <p className={styles.statHeader}>84 Осередки</p>
              <p className={styles.statDescription}>Майже у всіх країнах Європи</p>
            </li>
            <li className={styles.statItem}>
              <p className={styles.statHeader}>30 Країн</p>
              <p className={styles.statDescription}>Більше 15 тисяч бестівців по всьому світу</p>
            </li>
            <li className={styles.statItem}>
              <p className={styles.statHeader}>35 Років досвіду</p>
              <p className={styles.statDescription}>З 1989 року забезпечуємо співпрацю та комунікацію між студентами технічних спеціальностей</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganisersSection;