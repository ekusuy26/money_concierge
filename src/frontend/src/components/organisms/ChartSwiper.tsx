"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import CfExcerpt from "./CfExcerpt";

export default function ChartSwiper() {
  const karidata = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
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
      >
        {karidata.map((data, i) => (
          <SwiperSlide key={i}>
            <CfExcerpt />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
