// import { useEffect, useState } from "react"

// import "./Slider.scss"
// import { SliderData } from "./slider-data"

// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
// import Button from "../button/Button"

// const Slider = () => {

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = SliderData.length;
//   console.log(slideLength);

//   const autoScroll = true
//   let slideInterval;
//   let intervalTime = 4000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };
//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

//   useEffect(() => {
//     setCurrentSlide(0)
//   }, [])

//   // function auto() {
//   //   slideInterval = setInterval(nextSlide, intervalTime)
//   // }

//   useEffect(() => {
//     if (autoScroll) {
//       function auto() {
//         slideInterval = setInterval(nextSlide, intervalTime)
//       };
//       auto();
//     }
//     return () => clearInterval(slideInterval);
//   }, [currentSlide, slideInterval, autoScroll]);

//   return (
//     <div className="slider">
//       <AiOutlineArrowLeft 
//         className="arrow prev"
//         onClick={nextSlide}
//       />
//       <AiOutlineArrowRight 
//         className="arrow next"
//         onClick={prevSlide}
//       />
      
//       {SliderData.map((slide, index) => {
//         const { image, heading, desc } = slide;
//         return (
//           <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
//             {index === currentSlide && (
//               <>
//                 <img src={image} alt="slides" />
//                 <div className="content">
//                   <h2>{heading}</h2>
//                   <p>{desc}</p>
//                   <hr />
//                   <Button text="BOOK NOW" />
//                 </div>
//               </>
//             )}
//           </div>
//         );
//       })}
//     </div>
  
//   )
// }

// export default Slider