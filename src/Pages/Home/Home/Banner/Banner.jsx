import { Carousel } from "react-responsive-carousel";
import './Banner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../assets/yoga1.jpg'
import img2 from '../../../../assets/yoga2.jpg'
import img3 from '../../../../assets/yoga3.jpg'
import img4 from '../../../../assets/yoga4.jpg'
import img5 from '../../../../assets/yoga5.jpg'



const Banner = () => {
    
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
      <div className="slider-item">
        <img src={img1} alt="Yoga Image 1" />
        <div className="slider-content">
          <h2>Discover Inner Peace</h2>
          <p>Join our yoga and meditation school to find balance and tranquility in your life.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={img2} alt="Yoga Image 2" />
        <div className="slider-content">
          <h2>Boost Your Energy</h2>
          <p>Experience the power of yoga and meditation to enhance your physical and mental energy levels.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={img3} alt="Yoga Image 3" />
        <div className="slider-content">
          <h2>Nurture Your Body and Mind</h2>
          <p>Our expert instructors will guide you in achieving holistic well-being through yoga and meditation.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={img4} alt="Yoga Image 3" />
        <div className="slider-content">
          <h2>Nurture Your Body and Mind</h2>
          <p>Our expert instructors will guide you in achieving holistic well-being through yoga and meditation.</p>
        </div>
      </div>
      <div className="slider-item">
        <img src={img5} alt="Yoga Image 3" />
        <div className="slider-content">
          <h2>Nurture Your Body and Mind</h2>
          <p>Our expert instructors will guide you in achieving holistic well-being through yoga and meditation.</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
