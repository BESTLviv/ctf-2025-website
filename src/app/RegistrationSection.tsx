'use client';
import React from 'react';
import styles from './RegistrationSection.module.css';

const ctfText = "CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF CTF ";
const TG_BOT_LINK = "https://t.me/ctf_2025_bot"; 

const RegistrationSection: React.FC = () => {
  return (
    <section className={styles.registrationSection} id="register">
      <div className={styles.content}>

        <div className={styles.ctfTickerStrip1}>
          <div className={styles.ctfTickerContent}>
              {ctfText}
              {ctfText}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <a 
            href={TG_BOT_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerButtonImage} 
            aria-label="Зареєструватися через Telegram-бота @ctf_2025_bot"
          >
            ЗАРЕЄСТРУВАТИСЯ 
          </a>
        </div>

        <div className={styles.ctfTickerStrip2}>
          <div className={styles.ctfTickerContent}>
              {ctfText}
              {ctfText}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default RegistrationSection;