import "./Home.scss";
import { 
  whatsappStyle, 
  instagramStyle, 
  discoverStyle,
  cardFeatures1,
  cardFeatures2,
  cardFeatures3,
  cardFeatures4,
  cardFeatures5
} from "./HomeData";

import Button from "../../components/button/Button";
import GalleryCard from "../../components/galleryCard/GalleryCard";
import ImageCard from "../../components/image-card/ImageCard"
// import Slider from "../../components/slider/Slider";
import Pricing from "../../components/pricing/Pricing";
import HomeSwiper from "../../components/swiper/Swiper";


import { AiFillCamera } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import ReviewSlider from "../../components/review/Review";

const Home = () => {

  return (
    <div className="home">
      <HomeSwiper />
      {/* <Slider /> */}

      {/*----------------- GET iNFORMATION ----------------*/}
      <div className="info">
        <h1>Get Information</h1>
        <div className="buttons">
          <Button 
            icon={<FaWhatsapp />} 
            text="+90-501-333-8248" 
            style={whatsappStyle}
            className="button"
            link="https://api.whatsapp.com/send?phone=+905013338248"
          />
          <Button 
            icon={<FaInstagram />} 
            text="TAHT.ISTANBUL" 
            style={instagramStyle}
            className="button"
            link="https://www.instagram.com/taht.istanbul"
          />
        </div>
      </div>

      {/*----------------- MAP DIRECTION ----------------*/}
      <div className="map">
        {/* <img src="/assets/map.jpg" alt="map location" /> */}
        <Button 
            icon={<TfiLocationPin />} 
            text="How to get there" 
            // style={instagramStyle}
            className="button bgImage"
            link="https://www.google.com/maps/place/S%C3%BCleymaniye,+Siyavu%C5%9F+Pa%C5%9Fa+Sk.+No:12,+34116+Fatih%2F%C4%B0stanbul/@41.0155867,28.9637985,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab992c5e12ff3:0xd3cdd3556860933b!8m2!3d41.0155867!4d28.9663734!16s%2Fg%2F11bw4hp6b1?entry=ttu"
          />
      </div>

      {/*----------------- IMAGE CARDS ----------------*/}
      <div className="cardList">
        <div className="cardTitle">
          <h1>The World's Most Unique Photo Studio</h1>
          <p>Enjoy Istanbul’s best view in our studio with different concepts, feel the Turkish atmosphere at the top.</p>
        </div>
        <ImageCard
          imageUrl="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Carpet"
          title3="Collection"
          link="https://www.google.com"
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/1477199/pexels-photo-1477199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Taht deLight"
          title3="Collection"
          link="https://www.google.com"
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Flower Cafe"
          title3="Collection"
          link="https://www.google.com"
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/1477199/pexels-photo-1477199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Throne"
          title3="Collection"
          link="https://www.google.com"
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/1477199/pexels-photo-1477199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Barbie"
          title3="Collection"
          link="https://www.google.com"
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Library"
          title3="Collection"
          link="https://www.google.com"
        />
        <ImageCard
          imageUrl="https://images.pexels.com/photos/87477/winter-snow-tree-den-87477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title1="The"
          title2="Phone Booth"
          title3="Collection"
          link="https://www.google.com"
        />
      </div>

      {/*----------------- IMAGE GALLERY ----------------*/}

      <div className="discover">
        <div className="discover-titles item-1">
          <div className="discover-title">  
            <h1>Discover Taht Istanbul</h1>
            <p>See the best moments from different corners of our studio.</p>
            <div className="buttons">
              <Button 
                text="BOOK NOW"
                className="button"
                link="#"
              />
              <Button 
                text="DISCOVER"
                className="button"
                link="#"
              />
            </div>
          </div>
        </div>
        <GalleryCard
          className="item-2"
          imageSrc="/assets/imgGallery3.jpg"
          title={
            <Button 
              icon={<AiFillCamera style={{ fontSize: '20px' }}/>} 
              text="DISCOVER" 
              style={discoverStyle}
              className="button"
              link="#"
            />
          }
        />
        <GalleryCard
          className="item-3"
          imageSrc="/assets/imgGallery1.jpg"
          title={
            <Button 
              icon={<AiFillCamera style={{ fontSize: '20px' }}/>} 
              text="DISCOVER" 
              style={discoverStyle}
              className="button"
              link="#"
            />
          }
        />
        <GalleryCard
          className="item-4"
          imageSrc="/assets/imgGallery2.jpg"
          title={
            <Button 
              icon={<AiFillCamera style={{ fontSize: '20px' }}/>} 
              text="DISCOVER" 
              style={discoverStyle}
              className="button"
              link="#"
            />
          }
        />
        <GalleryCard
          className="item-5"
          imageSrc="/assets/imgGallery5.jpg"
          title={
            <Button 
              icon={<AiFillCamera style={{ fontSize: '20px' }}/>} 
              text="DISCOVER" 
              style={discoverStyle}
              className="button"
              link="#"
            />
          }
        />
        <GalleryCard
          className="item-4"
          imageSrc="/assets/imgGallery4.jpg"
          title={
            <Button 
              icon={<AiFillCamera style={{ fontSize: '20px' }}/>} 
              text="DISCOVER" 
              style={discoverStyle}
              className="button"
              link="#"
            />
          }
        />
      </div>

      {/*----------------- CLIENTS REVIEW ----------------*/}

      <div className="review">
        <h1>What our Clients say about us</h1>
        <ReviewSlider />
      </div>


      {/*----------------- PRICING PLANS ----------------*/}
      
      <div className="pricing">
        <div className="pricing-title">
          <h1>Pricing Plans</h1>
          <p>See our professional photography packages here with details.</p>
        </div>
        <div className="pricing-card">
          <Pricing
            title="Full Studio"
            icon="∞"
            price="80"
            person="Person"
            features={cardFeatures1} // Pass the features array
            buttonText="BOOK NOW"
          />
          <Pricing
            title="Flying Dress Package"
            icon="∞"
            price="100"
            person="Person"
            features={cardFeatures2} // Pass the features array
            buttonText="BOOK NOW"
          />
          <Pricing
            title="CoupleFlying Dress Package"
            icon="∞"
            price="100"
            person="Couple"
            features={cardFeatures3} // Pass the features array
            buttonText="BOOK NOW"
          />
          <Pricing
            title="Wedding / Engagement"
            icon="∞"
            price="100"
            person="Event"
            features={cardFeatures4} // Pass the features array
            buttonText="BOOK NOW"
          />
          <Pricing
            title="Video"
            icon="∞"
            price="100"
            person="Person"
            features={cardFeatures5} // Pass the features array
            buttonText="BOOK NOW"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
