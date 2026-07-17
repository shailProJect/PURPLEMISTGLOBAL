import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/company';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="section-pad navy-gradient relative overflow-hidden">
      <div className="container-px mx-auto max-w-5xl relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-4">Client Trust</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="glass-dark rounded-3xl p-10 md:p-12 text-center max-w-3xl mx-auto">
                <FaQuoteLeft className="text-gold text-3xl mx-auto mb-6" />
                <p className="text-white/85 text-lg leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                <h4 className="font-heading font-semibold text-white">{t.name}</h4>
                <p className="text-gold text-sm">{t.company}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonial-swiper .swiper-pagination-bullet { background: rgba(255,255,255,0.4); opacity: 1; }
        .testimonial-swiper .swiper-pagination-bullet-active { background: #D4AF37; }
      `}</style>
    </section>
  );
}
