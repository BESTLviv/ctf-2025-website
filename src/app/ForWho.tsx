'use client';
import styles from './ForWho.module.css';
import { useState } from 'react';

interface RectangleData {
  title: string;
  text: string;
}

const ForWhoSection: React.FC = () => {
  const rectanglesData: RectangleData[] = [
    {
      title: "Студентам, які навчаються на спеціальності \"Кібербезпека\"",
      text: "Які хочуть застосовувати свої знання на практиці, спробувати себе у вирішенні реальних кейсів з кібербезпеки та розвинути технічне мислення.",
    },
    {
      title: "Студентам інших технічних спеціальностей",
      text: "Які цікавляться ІТ та безпекою, прагнуть прокачати навички командної роботи, логіки й аналізу, а також відкрити для себе нові можливості у сфері технологій.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleRectangle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);

    document.querySelectorAll(`.${styles.rectangle}`).forEach((rect: Element, i: number) => {
      if (i !== index) {
        const element = rect as HTMLElement;
        element.classList.remove(styles.active);
      }
    });
  };

  return (
    <section className={styles.forWho}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>Кому буде корисно?</h1> 
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
          <div className={styles.glowBlob}></div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;