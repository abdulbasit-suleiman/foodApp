import "./plans.css";
import Logo from "../../public/asset/logo.jpg";
import { plansData } from "../components-data/plans-data";
import Image from "next/image";
import Link from "next/link";
export const PlansPage = () => {
  return (
    <div id="plans" className="plans-container">
      <div className="blur plans-blur-a"></div>
      <div className="blur plans-blur-b"></div>
      <div className="plans-header">
        <span className="stroke-text">{" "}ready to start</span>
        <span>{" "}your journey </span>
        <span className="stroke-text"> {" "}with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            <div dangerouslySetInnerHTML={{ __html: plan.icon }} />
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <Image className='image' src={Logo} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
              <div className="benefits">
                <span>see more benefits</span>
              </div>
              <button className="bttn">      <Link href="https://wa.me/08102444444">Join now</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
