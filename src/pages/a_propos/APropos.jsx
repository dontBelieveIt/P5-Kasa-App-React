import "./APropos_Style.scss";
import { useEffect, useState } from "react";
import logo2 from "../../assets/Image2.png";
import arrowBack from "../../assets/arrowBack.png";

import AProposContent from "./AProposContent"

export default function AProposIndex() {
  const [toggle, setToggle] = useState(false)

  return (   
  <div className="a-propos-layout">
    <img
          src={logo2}
          className="banner-cover"
          alt="Chez vous, partout et ailleurs"
        />
    <ul className="ul-container">
      {AProposContent.map((item) => (
        <li key={item.id}>
          <div className="li-container">
            <div className="apropos-collapse__category" onClick={(e) => setToggle(!toggle)}>
              {item.category}
              <img src={arrowBack} alt="Open menu" /> 
              </div>
              {toggle && (
                <div className="apropos-menu-collapse__content">
                {item.content}
              </div>)}
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}