'use client';
import React from 'react';
import styles from './TimelineSection.module.css';

interface StepData {
  id: number;
  date: string;
  tasks: string[];
  side: 'left' | 'right';
}

const timelineData: StepData[] = [
  {
    id: 1,
    date: 'До 7 листопада',
    tasks: ['Зареєструйся та відправ CV'],
    side: 'left',
  },
  {
    id: 2,
    date: '15 листопада',
    tasks: ['Виконай тестове завдання'],
    side: 'right',
  },
  {
    id: 3,
    date: '17 листопада',
    tasks: ['Зачекай на результат відбору'],
    side: 'left',
  },
  {
    id: 4,
    date: '22 листопада',
    tasks: [
      'Івент: лекції, нетворкінг, змагання,',
      'додаткові активності (King of the hill, Write-up competition)',
    ],
    side: 'right',
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className={styles.timelineSection}>
      <div className={styles.content}>
        <h2 className={styles.timelineTitle}>
          Як потрапити на BEST Capture The Flag та що на вас чекає?
        </h2>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineAxis}></div>

          {timelineData.map(step => (
            <div key={step.id} className={styles.timelineItem}>
              {step.side === 'left' && (
                <div className={`${styles.timelineBlock} ${styles.left}`}>
                  <div className={styles.dateCard}>
                    <h3 className={styles.dateTitle}>{step.date}</h3>
                  </div>
                  <ul className={styles.details}>
                    {step.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}

              {step.side === 'left' && (
                <div className={styles.timelineBlock} style={{ visibility: 'hidden' }}></div>
              )}

              <div className={styles.timelineNumber}>{step.id}</div>

              {step.side === 'right' && (
                <div className={styles.timelineBlock} style={{ visibility: 'hidden' }}></div>
              )}

              {step.side === 'right' && (
                <div className={`${styles.timelineBlock} ${styles.right}`}>
                  <div className={styles.dateCard}>
                    <h3 className={styles.dateTitle}>{step.date}</h3>
                  </div>
                  <ul className={styles.details}>
                    {step.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;