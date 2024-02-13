import "./footer.css";
import miscrosoft from "../../images/miscrosoft.png";
import Google from "../../images/Google.png";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import youTube from "../../icons/youTube.svg";
import twitter from "../../icons/twitter.svg";
import google from "../../icons/google.svg";
import user from "../../icons/user.svg";
import home from "../../icons/home.svg";
import categories from "../../icons/categories.svg";
import bag from "../../icons/bag.svg";
import "../reset/reset.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
      return (
            <>
                  <div className="footer">
                        <div className="sous-footer">
                              <div className="sous-footer-1">
                                    <span className="bazaar">bazaars</span>
                                    <span className="lorem">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Auctor
                                          libero id et, in gravida. Sit diam
                                          duis mauris nulla cursus. Erat et
                                          lectus vel ut sollicitudin elit at
                                          amet.
                                    </span>
                                    <div className="sous-footer-img">
                                          <img src={Google} alt="" />
                                          <img src={miscrosoft} alt="" />
                                    </div>
                              </div>
                              <div className="sous-footer-2">
                                    <h3>About Us</h3>
                                    <div className="sous-footer-2-span">
                                          <span>Careers</span>
                                          <span>Our Stores</span>
                                          <span>Our Cares</span>
                                          <span>Terms & Conditions</span>
                                          <span>Privacy Policy</span>
                                    </div>
                              </div>
                              <div className="sous-footer-3">
                                    <h3>Customer Care</h3>
                                    <div className="sous-footer-2-span">
                                          <span>Help Center</span>
                                          <span>How to Buy</span>
                                          <span>Track Your Order</span>
                                          <span>
                                                Corporate & Bulk Purchasing
                                          </span>
                                          <span>Returns & Refunds</span>
                                    </div>
                              </div>
                              <div className="sous-footer-4">
                                    <h3>Contact Us</h3>
                                    <span>
                                          70 Washington Square South, New York,
                                          NY 10012, United States
                                    </span>
                                    <span>Email: uilib.help@gmail.com</span>
                                    <span>Phone: +1 1123 456 780</span>
                                    <div className="sous-footer-4-img">
                                          <img src={facebook} alt="" />
                                          <img src={instagram} alt="" />
                                          <img src={youTube} alt="" />
                                          <img src={google} alt="" />
                                          <img src={twitter} alt="" />
                                    </div>
                              </div>
                        </div>
                        </div>
                        <div className="position-sticked">
         <div className="child-position-sticked">
               <NavLink to="/">
                     <img src={home} alt="" />
               </NavLink>
               <span
                     className={
                           window.location.pathname === "/"
                                 ? "nav-link-panier"
                                 : ""
                     }
               >
                     Accueil
               </span>
         </div>
         <div className="child-position-sticked">
               <NavLink to="/categories">
                     <img src={categories} alt="" />
               </NavLink>
               <span
                     className={
                           window.location.pathname ===
                           "/categories"
                                 ? "nav-link-panier"
                                 : ""
                     }
               >
                     Categories
               </span>
         </div>
         <div className="child-position-sticked">
               <NavLink to="/profilcart">
                     <img src={bag} alt="" />
               </NavLink>
               <span
                     className={
                           window.location.pathname === "/profilcart"
                                 ? "nav-link-panier"
                                 : ""
                     }
               >
                     Panier
               </span>
         </div>
         <div className="child-position-sticked">
               <NavLink to="/login">
                     <img src={user} alt="" />
               </NavLink>
               <span
                     className={
                           window.location.pathname === "/login"
                                 ? "nav-link-panier"
                                 : ""
                     }
               >
                     Se connecter
               </span>
         </div>
   </div>
                 
                  
            </>
      );
};
