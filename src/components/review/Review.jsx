import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import ReviewData from './ReviewData';
import './Review.scss';
import { FaStar } from "react-icons/fa";


const ReviewSlider = () => {

    return (
        <Swiper 
            modules={[Navigation, EffectFade, Autoplay]}
            spaceBetween={10} 
            slidesPerView={1}
            loop
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
        >
            {ReviewData.map((review, index) => (
            <SwiperSlide key={index}>
                <div className="review-card">
                    <div className="rating">
                        {Array.from({ length: review.rating }).map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                        ))}
                    </div>
                    <div className="content">{review.content}</div>
                    <div className="author">
                        {review.name} - {review.country}
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewSlider;
