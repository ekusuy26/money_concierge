"use client";

import useSWR from "swr";
import { fetcher } from "@/Fetcher";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination } from "swiper/modules";

import Load from "@/components/molecules/Load";
import CfExcerpt from "./CfExcerpt";

export default function ChartSwiper({ isChange }) {
  const {
    data: chartData,
    error: error,
    isLoading: isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/finance/summary/chart`,
    fetcher
  );

  const handleSlideChange = (swiper) => {
    const activeData = chartData[swiper.activeIndex];
    isChange(activeData.year, activeData.month);
  };
  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;

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
        {chartData.map((data, i) => (
          <SwiperSlide key={i}>
            <CfExcerpt data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
