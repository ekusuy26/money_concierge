import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import CfExcerpt from "./CfExcerpt";

export default function ChartSwiper({ data, isChange }) {
  const handleSlideChange = (swiper) => {
    const activeData = Object.values(data)[swiper.activeIndex];
    activeData && isChange(activeData.list, activeData.payment);
  };
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mj-chartSwiper"
        dir="rtl"
        onSlideChange={handleSlideChange}
      >
        {Object.keys(data).map((key) => (
          <SwiperSlide key={key}>
            <CfExcerpt period={key} data={data[key].chart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
