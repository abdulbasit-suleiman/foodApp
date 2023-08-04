import "./hero.css";
import Image from "next/image";
import HeaderPage from "../header/header";
import Logo from "../../../public/asset/rodo.jpg";
import Chicken from "../../../public/asset/chicken.jpg";
import Chicken2 from "../../../public/asset/beans2.jpg";
import Cripsy from "../../../public/asset/turkey.jpg";
import kripsy from "../../../public/asset/cripsy.jpg";

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
            <span>+2</span>
            <span>senior chefs</span>
          </div>
          <div>
            <span>+5</span>
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
            src={Cripsy}
            alt=""
            width={100}
            height={100}
          />
          <div>
            <span>Food Cooked </span>
            <span>   +220  Still Counting</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroPage;
