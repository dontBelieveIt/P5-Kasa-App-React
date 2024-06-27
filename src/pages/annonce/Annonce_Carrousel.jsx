// import arrowBack from "../../assets/collapsible/arrow_back.svg";
import { useState } from "react";

export default function AnnonceCarrousel({cover, pictures}) {
  const [ count, setCount ] = useState(0); 
  const [ active, setActive ] = useState(false)
  const nbSlides = pictures.length; 
  console.log(nbSlides)

  const previousSlide = () => { 
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount(nbSlides - 1)
    }
    setActive(true)
    console.log()
  }
  const nextSlide = () => { 
    if (count < nbSlides - 1) {
      setCount(count + 1)
    } else {
      setCount(0)
    }
    setActive(true)
  } 

    return(
      <>
        <div className="fiche-log-carrousel">
          <div className="carrousel-slider">
            {pictures.map((slide, index) =>
              <img className={`carrousel-img ${index === count ? 'active' : 'none'}`} key={index + 1} src={slide} alt={`Image ${index +1}`} />
            )}
            <div className="carrousel-btn">
              <div className="carrousel-previous" alt="Go to previous photo" onClick={previousSlide}></div>
              <div href="#" className="carrousel-next" alt="Go to next photo" onClick={nextSlide}></div>
            </div>
          </div>
        </div>
    </>
    )
  }
  