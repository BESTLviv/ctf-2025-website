'use client';
import styles from './Swiper.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ImageSwiper: React.FC = () => {
  const images = [
    { src: "/images/swiper1.png", alt: "Photo 1" },
    { src: "/images/swiper2.png", alt: "Photo 2" },
    { src: "/images/swiper3.png", alt: "Photo 3" },
    { src: "/images/swiper4.png", alt: "Photo 4" },
    { src: "/images/swiper5.png", alt: "Photo 5" },
    { src: "/images/swiper6.png", alt: "Photo 6" },
    { src: "/images/swiper7.png", alt: "Photo 7" },
    { src: "/images/swiper8.png", alt: "Photo 8" },
  ];

  return (
    <div style={{ overflowX: "visible", position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <section className={`${styles.swiperSection} swiper-section`}>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.swiperContainer}>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: `.${styles.swiperButtonNext}`,
                  prevEl: `.${styles.swiperButtonPrev}`,
                }}
                autoplay={{ delay: 1200, disableOnInteraction: false }}
                spaceBetween={40}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 }, 
                  768: { slidesPerView: 2, spaceBetween: 20 }, 
                  1024: { slidesPerView: 3, spaceBetween: 40 }, 
                }}
                direction="horizontal"
                loop={true}
                effect="slide"
                speed={1000}
                allowTouchMove={true}
                loopAdditionalSlides={1}
                className={styles.swiper}
                onSwiper={(swiper) => console.log("Swiper initialized", swiper)}
                onSlideChange={(swiper) => console.log("Slide changed to", swiper.realIndex)}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.swiperSlide}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className={styles.swiperPhoto}
                        width={1200}
                        height={300}
                        style={{ width: "auto", height: "100%" }}
                        onLoadingComplete={() => console.log(`Image ${image.alt} loaded`)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className={styles.swiperButtonPrev}>
                <span className={styles.arrow}>&lt;</span>
              </button>
              <button className={styles.swiperButtonNext}>
                <span className={styles.arrow}>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSwiper;