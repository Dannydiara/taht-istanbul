import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "./Swiper.scss"
import SliderData from "./slider-data";
import Button from "../button/Button";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const animationDelay = 0.1;


const HomeSwiper = () => {

    return (
        <div className="container">
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                navigation
                effect={'fade'}
                speed={800}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4000 }}
                className="mySwiper"
            >
                {SliderData.map((slide, index) => (
                    <SwiperSlide key={index} className="swiperSlide">
                        <div className="socialIcons">
                            <a href="http://" className="icon-link">
                                <AiOutlineInstagram size={20}/>
                            </a>
                            <a href="http://" className="icon-link">
                                <GrFacebookOption size={20}/>
                            </a>
                            <a href="http://" className="icon-link">
                                <FaXTwitter size={20}/>
                            </a>
                        </div>
                        <img src={slide.image} alt={slide.heading} />
                        <div 
                            className="content"
                            style={{
                                animationDelay: `${animationDelay * index}s`,
                            }}
                        >
                            <h2>{slide.heading}</h2>
                            <p>{slide.desc}</p>
                            <hr />
                            <Button text="BOOK NOW" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomeSwiper;