'use client';
import React from 'react';
import styles from './HowWhereWhen.module.css'; 

interface InfoData {
  header: string; 
  value: string;  
}

const cardsData: InfoData[] = [
  {
    header: "ДЕНЬ ПРОВЕДЕННЯ",
    value: "22 листопада",
  },
  {
    header: "ТРИВАЛІСТЬ ЗМАГАНЬ",
    value: "5 годин", 
  },
  {
    header: "ФОРМАТ ЗМАГАНЬ",
    value: "офлайн",
  },
];

const HowWhereWhenSection: React.FC = () => {
  return (
    <section className={styles.howWhereWhenSection} id="steps">
      <div className={styles.content}>
        <div className={styles.container}>
          
          <div className={styles.titleContainerWithBg}> 
            <h1 className={styles.titleHowWhereWhen}>Як? Де? Коли?</h1>
          </div>

          <div className={styles.infoContainerWrapper}>
            {cardsData.map((data, index) => (
              <div key={index} className={styles.infoBlock}>
                
                <div className={styles.rectPlaceholder}>
                    <h3 className={styles.blockHeader}>{data.header}</h3>
                </div>
                
                <p className={styles.blockValue}>{data.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.glowBlob}></div> 
        </div>
      </div>
    </section>
  );
};

export default HowWhereWhenSection;