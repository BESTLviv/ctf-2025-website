'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './CoreteamSection.module.css';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
  instagram: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Дмитро Антончик', position: 'Corporate Relations Responsible', quote: 'Коли ти перестаєш мріяти, ти перестаєш жити', image: '/images/org2.JPG', instagram: 'https://www.instagram.com/exeramle?igsh=bjY1OG93aHVxeHU1' },
  { id: 2, name: 'Юлія Синичак', position: 'Main Organizer', quote: 'Нам потрібні найкращі, а не послідовники', image: '/images/org1.JPG', instagram: 'https://www.instagram.com/bulochka_xo_xo?igsh=MTZicHZla3QzNDExMg==' },
  { id: 3, name: 'Вікторія Галіпчак', position: 'Corporate Relations Responsible', quote: 'Мисліть сміливо. Будуйте красиво. Зростайте невпинно', image: '/images/org3.JPG', instagram: 'https://www.instagram.com/vi_vgkkkk?igsh=MTJ6ajMybmt5eHIxeQ==' },
  { id: 4, name: 'Юрій Бойко', position: 'Content Responsible', quote: 'Не втрачай жодної нагоди', image: '/images/org4.JPG', instagram: 'https://www.instagram.com/y.b0jko?igsh=MTRwOXd2M3Z2YWNxbw==' },
  { id: 5, name: 'Єлизавета Ясінська', position: 'IT Responsible', quote: 'Дивися на світ не очима, а серцем', image: '/images/org5.JPG', instagram: 'https://www.instagram.com/yaaasikkk?igsh=MWhieXgyOHdsaDU0ag==' },
  { id: 6, name: 'Діана Барило', position: 'Public Relations Responsible', quote: 'Кожен день – це можливість, не втрачай ці дні', image: '/images/org6.JPG', instagram: 'https://www.instagram.com/dienetta?igsh=MTg4M2RhaWJnbXZjZA==' },
  { id: 7, name: 'Маргарита Феник', position: 'Design Relations Responsible', quote: 'Можна втратити спокій, але не жагу дізнаватися більше', image: '/images/org7.JPG', instagram: 'https://www.instagram.com/frankshii_?igsh=ZG1vZXRsb3Q5bmRw' },
  { id: 8, name: 'Назар Смачило', position: 'Human Resourses Responsible', quote: 'Твої думки — це твій маленький Всесвіт, оберігай його', image: '/images/org8.JPG', instagram: 'https://www.instagram.com/qqspirixx?igsh=ZDk3cGQ3YmY1OXAy' },
  { id: 9, name: 'Павло Глинь', position: 'Logistics Responsible', quote: 'Якщо король не ворухнеться, то його піддані не підуть за ним', image: '/images/org9.JPG', instagram: 'https://www.instagram.com/_pavlo_glin?igsh=MWVjbXc0d2ZmanFlbA==' },
  { id: 10, name: 'Анна-Марія Кудь', position: 'Mentor', quote: 'Просто вір', image: '/images/org10.JPG', instagram: 'https://www.instagram.com/anyakud?igsh=MWk0aTJjdzA3enlwcg==' },
];

export default function CoreteamSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setActiveIndex(prev => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex(prev => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    isPaused.current = true;
    setTimeout(() => { isPaused.current = false; }, 3000);
  };

  const getVisibleMembers = () => {
    const prev = activeIndex === 0 ? teamMembers.length - 1 : activeIndex - 1;
    const next = activeIndex === teamMembers.length - 1 ? 0 : activeIndex + 1;
    return [
      { member: teamMembers[prev], idx: prev },
      { member: teamMembers[activeIndex], idx: activeIndex },
      { member: teamMembers[next], idx: next },
    ];
  };

  const visible = getVisibleMembers();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) nextSlide();
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isPaused.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }

    setTimeout(() => { isPaused.current = false; }, 3000);
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className={styles.section}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      id="coreteam"
    >
      <h2 className={styles.title}>КОМАНДА ОРГАНІЗАТОРІВ</h2>
      <div className={styles.sliderContainer}>
        <button onClick={prevSlide} className={`${styles.arrow} ${styles.left}`}>
          <Image src="/images/left-arrow.svg" alt="Previous" width={50} height={50} className={styles.arrowIcon} />
        </button>

        <div className={styles.slider}>
          {visible.map(({ member, idx }, pos) => {
            const isActive = pos === 1;
            const isClickable = !isActive;

            return (
              <div
                key={member.id}
                className={`${styles.card} ${isActive ? styles.active : ''} ${isClickable ? styles.clickable : ''}`}
                onClick={() => isClickable && goToSlide(idx)}
                style={{ cursor: isClickable ? 'pointer' : 'default' }}
              >
                <div className={styles.position}>{member.position}</div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={420}
                    className={styles.memberImage}
                    priority={isActive}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  {isActive && member.quote && (
                    <p className={styles.quote}>&quot;{member.quote}&quot;</p>
                  )}
                  {isActive && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.instagram}
                      onClick={e => e.stopPropagation()}
                    >
                      <Image src="/images/instagram.png" alt="Instagram" width={28} height={28} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={nextSlide} className={`${styles.arrow} ${styles.right}`}>
          <Image src="/images/right-arrow.svg" alt="Next" width={50} height={50} className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
}