'use client';
import "./hero.css";
import Image from "next/image";
import HeaderPage from "../header/header";
import NumberCounter from 'number-counter';

const cripsy = '/asset/rodo.jpg'
const kripsy = '/asset/doughnuts.jpg'

const HeroPage = () => {
  return (
    <div id="Home" className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <HeaderPage />
        <div className="the-best-ad">
          <div></div>
          <span>unleash your culinary creativity with a great view</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">nourish </span>
            <span>and </span>
          </div>

          <div>
            <span> fuel your body</span>
          </div>
          <div>
            <span>
              Nourishing food that your body will appreciate. Thats why we
              encourage you to spend on something valuable.
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+5</span>
            <span>senior chefs</span>
          </div>
          <div>
<span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
            <span>members joined</span>
          </div>
          <div>
            <span>+10</span>
            <span>ongoing programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn ">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn tt">Join Now</button>

        <Image
          className="hero-image"
          src={kripsy}
          alt=""
          width={100}
          height={100}
        />
        <div className="calories">
          <Image
            className="calo"
            src={cripsy}
            alt=""
            width={100}
            height={100}
          />
          <div>
            <span>Food Cooked </span>
            <span>  <NumberCounter end={200} start={2} delay='4' preFix="+" />  Still Counting</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroPage;
