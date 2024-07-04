import { NavLink, useParams, redirect } from "react-router-dom";
import Logements from "../../datas/logements.json"
import "./Cards.scss"
import { useEffect } from "react";

export default function Cards() {
    const { routeId } = useParams();
    const checkId = () => { 
      if (!routeId) {
      return redirect("/*");
    }
    }
    // useEffect to redirect user if there is an error on the announce id
    useEffect(() => { 
      checkId();
    }, [routeId]);

    return(
    <div className="cards__container">
        <ul className="cards__ul">

          {Logements.map((item) => (
            <li key={item.id}>
                
              <article className="cards">
                <NavLink to={`logement/${item.id}`}>

                <div className="cards__overlay"></div>
                
                  <img
                    src={item.cover}
                    className="cards__img"
                    alt="Logement"
                  />
                  <div className="cards__title">
                    {item.title}
                    {routeId}
                  </div>
                </NavLink>
              </article>
            </li>
          ))}
        </ul>
      </div>
    )
}