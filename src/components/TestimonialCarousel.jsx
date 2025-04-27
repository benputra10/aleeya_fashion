import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import testimonials from "../data/Testimonials.jsx";

const TestimonialCarousel = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-pink-50 to-white"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 font-poppins">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="mt-2 text-pink-400 max-w-2xl mx-auto">
            Testimoni nyata dari ibu-ibu yang sudah membeli gamis Aleeya untuk
            buah hati mereka
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-pink-200",
            bulletActiveClass: "swiper-pagination-bullet-active bg-pink-500",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="!pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className="transition-all duration-300 hover:scale-105 hover:z-10"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full border border-pink-100 hover:shadow-xl transition-shadow duration-300">
                {/* Customer Avatar */}
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-pink-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-pink-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Customer Info */}
                <h3 className="text-lg font-semibold text-pink-700">
                  {item.name}
                </h3>
                <p className="text-pink-400 text-sm mb-3">{item.location}</p>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`${item.id}-star-${i}`} // Key yang lebih unik
                      className={`w-5 h-5 ${
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-4 italic relative before:content-['\0022'] before:text-4xl before:text-pink-200 before:absolute before:-top-2 before:-left-1 before:font-serif after:content-['\0022'] after:text-4xl after:text-pink-200 after:absolute after:-bottom-4 after:-right-1 after:font-serif">
                  {item.comment}
                </p>

                {/* Product Info */}
                <div className="mt-auto pt-3 border-t border-pink-100 w-full">
                  <p className="text-xs text-pink-500 font-medium">
                    Membeli:{" "}
                    <span className="text-pink-700">
                      {item.productPurchased}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
