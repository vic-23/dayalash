import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface GalleryImage {
  id: number;
  alt: string;
  img: string;
}

const Gallery = ({ images }: { images: GalleryImage[] }) => {
  const handleSetTranslate = (swiper: SwiperClass) => {
    swiper.slides.forEach((slideEl: HTMLElement & { progress?: number }) => {
      const slideProgress = slideEl.progress || 0;
      const scale = 1 - Math.min(Math.abs(slideProgress) * 0.2, 0.4);
      const opacity = 1 - Math.min(Math.abs(slideProgress) * 0.5, 0.6);

      slideEl.style.transform = `scale(${scale})`;
      slideEl.style.opacity = `${opacity}`;
      slideEl.style.transition = 'transform 0.3s, opacity 0.3s';
    });
  };

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={16}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={5000}
      loop={true}
      modules={[Autoplay]}
      className="w-screen "
      freeMode={true}
      centeredSlides={true}
      watchSlidesProgress={true}
      onSetTranslate={handleSetTranslate}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id} className="!w-[350px] transition-transform duration-300">
          <img
            src={image.img}
            alt={image.alt}
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;