import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h3><span>WALEED</span>CODES</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                    <div className="footer-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5>Quick Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h5>Quick Links</h5>
                    <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                    <p><i class="fa-solid fa-envelope"></i> waleedishfaq1515@gmail.com</p>
                    <p><i class="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
                </div>
            </div>
        </div>
    </div>
    <div className='Last-footer'>
        <p>Design By Waleed Ishfaq</p>
    </div>
</>
)
}

 
