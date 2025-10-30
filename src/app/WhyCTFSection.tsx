'use client';
import styles from './WhyCTF.module.css';

interface CardData {
  iconClass: string; 
  title: string;
  text: string;
}

const WhyCTFSection: React.FC = () => {
  const cardsData: CardData[] = [
    {
      iconClass: styles.iconHappyMask,
      title: "Яскраві враження та нові знайомства",
      text: "Зарядитися енергією, відчути драйв командної роботи та ближче познайомитися з організаторами і учасниками.",
    },
    {
      iconClass: styles.iconPeople,
      title: "Практика у кібербезпеці",
      text: "Спробувати себе в різних категоріях кібербезпеки, навчитися шукати вразливості та прокачати свої технічні навички.",
    },
    {
      iconClass: styles.iconZoomMeeting,
      title: "Нетворкінг з IT-компаніями",
      text: "Поспілкуватися з представниками компаній, дізнатися більше про них і їхню роботу.",
    },
  ];

  return (
    <section className={styles.whyCTFSection}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Чому варто спробувати себе в CTF-змаганнях?</h1>
          
          <div className={styles.cardContainer}>
            {cardsData.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={card.iconClass}></div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
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

export default WhyCTFSection;