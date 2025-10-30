'use client';
import styles from './Faq.module.css';
import { useState } from 'react';
import React from 'react';

interface RectangleData {
  title: string;
  text: string;
}

const rectanglesData: RectangleData[] = [
  {
    title: "Хто може взяти участь у змаганнях?",
    text: "Студенти будь-якого ЗВО.",
  },
  {

    title: "Яка кількість людей має бути в команді?",
    text: "Від 3 до 4 учасників.",
  },
  {
    title: "Що робити, якщо у мене немає команди?",
    text: "Не проблема! Заходь в телеграм бот, реєструйся і шукай команду в нашому чаті учасників.",
  },
  {
    title: "Участь у змаганнях безкоштовна?",
    text: "Так, участь безкоштовна, всього  потрібно пройти тестове завдання!",
  },
  {
    title: "Чи можу я взяти участь, якщо перебуваю не у Львові?",
    text: "Ні. Змагання цього року відбуваються в офлайн-форматі.",
  },
];


const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleRectangle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>ТИПОВІ ЗАПИТАННЯ</h1>
          </div>
          <div className={styles.rectangles}>
            {rectanglesData.map((rect, index) => (
              <div
                key={index}
                className={`${styles.rectangle} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => toggleRectangle(index)}
              >
                <div className={styles.dropdownTrigger}>
                  <h3 className={styles.rectangleTitle}>{rect.title}</h3>
                  <div className={`${styles.triangle} ${activeIndex === index ? styles.rotated : ''}`}>
                    &#9650; 
                  </div>
                </div>
                <div className={styles.dropdownContent}>
                  <p className={styles.rectangleText}>{rect.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.glowBlob}></div>
    </section>
  );
};

export default FaqSection;