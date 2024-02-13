import "./cart.css";
import "../main/mainsection1/main-section1.css";
import panier from "../../icons/panier.svg";
import bar from "../../icons/bar.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Cart = () => {
      const [counter, setCounter] = useState(0);
      const [counterLikes, setCounterLikes] = useState(12);
      const [etat, setEtat] = useState(false);
      const incrementCounter = () => {
            if (counter >= 0) {
                  return setCounter((counter) => counter + 1);
            }
      };
      const decrementCounter = () => {
            if (counter <= 0) {
                  alert("pas de quantite negative");
            } else {
                  return setCounter((counter) => counter - 1);
            }
      };
      return (
            <div className="bloc-cart">
                  <div className="bloc-cart-header">
                        <span className={window.location.pathname === "/profilcart"? "mon-panier" : "fournisseurs"}>1. Mon panier</span>
                        <span className="corde-panier"></span>
                        <span  className={window.location.pathname === "/profildeliverer"? "mon-panier" : "fournisseurs"}>2. fournisseurs</span>
                        <span className="corde-paniers"></span>
                        <span className="fin">3. Fin</span>
                  </div>
                  <div className="bloc-cart-main">
                        <div className="bloc-cart-main-left">
                              <div className="sous-bloc-cart-main-left">
                                    <img src={panier} alt="" />
                                    <div className="sous-bloc-cart-main-left-panier">
                                          <span className="sous-bloc-cart-main-left-panier-header">
                                                Oeufs
                                          </span>
                                          <div className="sous-bloc-cart-main-left-panier-main">
                                                <span>
                                                      100000XAF x {counter}
                                                </span>
                                                <span>
                                                      {`${eval(
                                                            100000 * counter
                                                      )}`}
                                                      XAF
                                                </span>
                                          </div>
                                          <div className="sous-bloc-cart-main-left-panier-footer">
                                                <span
                                                      className="counter-decrement"
                                                      onClick={decrementCounter}
                                                >
                                                      -
                                                </span>
                                                <span className="counter-number">
                                                      {counter}
                                                </span>
                                                <span
                                                      className="counter-decrement"
                                                      onClick={incrementCounter}
                                                >
                                                      +
                                                </span>
                                          </div>
                                    </div>
                                    <img
                                          src={bar}
                                          alt=""
                                          className="close-panier"
                                    />
                              </div>
                              <div className="sous-bloc-cart-main-left">
                                    <img src={panier} alt="" />
                                    <div className="sous-bloc-cart-main-left-panier">
                                          <span className="sous-bloc-cart-main-left-panier-header">
                                                Oeufs
                                          </span>
                                          <div className="sous-bloc-cart-main-left-panier-main">
                                                <span>
                                                      100000XAF x {counter}
                                                </span>
                                                <span>
                                                      {`${eval(
                                                            100000 * counter
                                                      )}`}
                                                      XAF
                                                </span>
                                          </div>
                                          <div className="sous-bloc-cart-main-left-panier-footer">
                                                <span
                                                      className="counter-decrement"
                                                      onClick={decrementCounter}
                                                >
                                                      -
                                                </span>
                                                <span className="counter-number">
                                                      {counter}
                                                </span>
                                                <span
                                                      className="counter-decrement"
                                                      onClick={incrementCounter}
                                                >
                                                      +
                                                </span>
                                          </div>
                                    </div>
                                    <img
                                          src={bar}
                                          alt=""
                                          className="close-panier"
                                    />
                              </div>
                        </div>
                        <div className="bloc-cart-main-right">
                        <div className="sous-panier">
                                    <div className="sous-panier-header">
                                          <h4>Recapitulatif</h4>
                                          <span>estimation</span>
                                    </div>
                                    <div className="sous-panier-main">
                                          <span className="sous-panier-main-span1">
                                                Sous-total:
                                          </span>
                                          <span className="sous-panier-main-span">
                                                0.00XAF
                                          </span>
                                    </div>
                                    <div className="sous-panier-main">
                                          <span className="sous-panier-main-span1">
                                                Expedition:
                                          </span>
                                          <span className="sous-panier-main-span">
                                                -
                                          </span>
                                    </div>
                                    <div className="sous-panier-main">
                                          <span className="sous-panier-main-span1">
                                                Taxes:
                                          </span>
                                          <span className="sous-panier-main-span">
                                                0XAF
                                          </span>
                                    </div>
                                    <div className="sous-panier-main">
                                          <span className="sous-panier-main-span1">
                                                Reduction:
                                          </span>
                                          <span className="sous-panier-main-span">
                                                -
                                          </span>
                                    </div>
                                    <div className="sous-panier-footer">
                                          <span></span>
                                          <span>0.00XAF</span>
                                    </div>
                              </div>

                            
                              
                        </div>
                  </div>
                  <div className="bloc-cart-footer">
                    <button className="panier-achats"><NavLink className="nav-panier-achats" to ="/">Continuer Les Achats</NavLink></button>
                    <button className="panier-fourniseurs"><NavLink className="nav-panier" to = "/profildeliverer">Rechercher Les Fournisseurs</NavLink></button>
                  </div>
            </div>
      );
 };
