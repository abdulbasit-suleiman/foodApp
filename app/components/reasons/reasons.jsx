import "./reasons.css";
import Image from "next/image";
import Logo from "../../../public/asset/logo.jpg";
import Rodo from "../../../public/asset/amala1.jpg";
import Chicken from "../../../public/asset/semo-egusi.jpg";
import Chicken2 from "../../../public/asset/jollof-chicken3.jpg";
import Lemon from "../../../public/asset/beans-dodo.jpg";
import beans from "../../../public/asset/beans2.jpg";
export function ReasonsPage() {
  return (
    <div id="availiable" className="reasons-page">
      <div className="left-r">
        <Image src={Rodo} alt="" />
        <Image src={beans} alt="" />
        <Image src={Chicken} alt="" />
        <Image src={Chicken2} alt="" />
        <Image src={Lemon} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <Image
              src={Logo}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <span>High and quality kitchen equipments</span>
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <span>Over 2+ senior chefs</span>
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <span>A lot of Culinary retreats</span>
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <span>1 free program for new members</span>
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
            <span>Reliable partners </span>
          </div>
        </div>
        <span>Our partners:</span>

        <div className="partners stroke-text">
                <span>logicGlide global solution limites</span>
                <span>Hungry citizens kitchen</span>
                <span>Chop belleful canteen</span>
        </div>
      </div>
    </div>
  );
}
