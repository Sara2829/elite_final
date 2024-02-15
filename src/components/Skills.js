import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="home-container">
    <div className="profile-card">
        <div className="img">
            <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
            <h3>Tom Cruise</h3>
            <p>Full Stack Developer</p>
            <div className="social-links">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    </div>
    <div className="profile-card">
        <div className="img">
            <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
            <h3>David Wornar</h3>
            <p>Front End Developer</p>
            <div className="social-links">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    </div>
    <div className="profile-card">
        <div className="img">
            <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
            <h3>Vin Diesel</h3>
            <p>Back End Developer</p>
            <div className="social-links">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    </div>
</div>
  )
}
