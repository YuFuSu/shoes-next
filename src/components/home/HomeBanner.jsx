'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const banners = [
  '/images/home-banner-1.jpg',
  '/images/home-banner-2.jpg',
  '/images/home-banner-3.jpg',
  '/images/home-banner-4.jpg',
]

export default function HomeBanner() {
  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        }}
        loop={true}
        className="h-full"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-6xl font-bold mb-4">STEP INTO STYLE</h1>
                <p className="text-xl mb-8">探索最新潮流鞋款，找到屬於你的風格</p>
                <button className="bg-white text-gray-900 px-8 py-3 text-lg font-semibold hover:bg-gray-200">
                  立即選購
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 自訂導覽按鈕 */}
      <button className="banner-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/30 hover:bg-white/60 text-white rounded-full flex items-center justify-center text-xl transition">
        &lt;
      </button>
      <button className="banner-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/30 hover:bg-white/60 text-white rounded-full flex items-center justify-center text-xl transition">
        &gt;
      </button>
    </section>
  )
}