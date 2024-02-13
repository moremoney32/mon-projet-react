import "../cart/cart.css";
import "./deliverer.css";
import bar from "../../icons/bar.svg";
import down from "../../icons/down.svg";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
export const Deliverer = () => {
      const [latitude, setLatitude] = useState(null);
      const [longitude, setLongitude] = useState(null);
      const [autorise, setAutorise] = useState(false);
      const [address, setAddress] = useState(null);
      const [radius, setRadius] = useState(30);
      const [date, setDate] = useState("");
      const dateInputRef = useRef(null);

      const handleChange = (event) => {
            setRadius(event.target.value);
      };
      const handleChangeDate = (e) => {
            setDate(e.target.value);
      };

      const handleClick = () => {
            if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                        (position) => {
                              setLatitude(position.coords.latitude);
                              setLongitude(position.coords.longitude);
                        },
                        (error) => {
                              console.error(error);
                        }
                  );
            } else {
                  console.error("Geolocalisation n est pas supporte.");
            }
      };

      return (
            <div className="bloc-cart">
                  <div className="bloc-cart-header">
                        <span className="mon-panier">1. Mon panier</span>
                        <span className="corde-panier"></span>
                        <span className="fournisseurs">2. fournisseurs</span>
                        <span className="corde-paniers"></span>
                        <span className="fin">3. Fin</span>
                  </div>
                  <div className="bloc-cart-main">
                        <div className="bloc-deliverer-main-left">
                              <span className="bloc-deliverer-main-left-title">
                                    Critères de recherche des fournisseurs
                              </span>
                              <div className="bloc-deliverer-main-left-position">
                                    <span>Zone de recherche</span>
                                    <div className="bloc-deliverer-main-left-localisation">
                                          <img
                                                src={bar}
                                                alt=""
                                                onClick={handleClick}
                                          />
                                          <div className="geolocalisation">
                                                {longitude && (
                                                      <span>
                                                            {longitude},
                                                            {latitude}
                                                      </span>
                                                )}
                                                <span>
                                                      Ma position actuelle
                                                </span>
                                          </div>
                                          <span className="alternative">
                                                ou
                                          </span>

                                          <input
                                                type="text"
                                                placeholder="Rechercher par quartier,ville,pays"
                                                className="adress-position"
                                          />
                                          <img
                                                src={down}
                                                alt=""
                                                className="down-localisation"
                                          />
                                    </div>
                                    <div className="bloc-raduis">
                                          <label htmlFor="radius">
                                                Rayon de recherche (en km):
                                          </label>
                                          <div className="input-raduis">
                                                <input
                                                      type="range"
                                                      id="radius"
                                                      min="1"
                                                      max="100"
                                                      value={radius}
                                                      onChange={handleChange}
                                                />
                                                <span>{radius}</span>
                                          </div>
                                    </div>
                                    <div className="bloc-checkbox">
                                          <input type="checkbox" />
                                          <span>
                                                Je veux uniquement les
                                                fournisseurs qui détiennent
                                                l'intégralité de mes articles
                                          </span>
                                    </div>
                                    <div className="livraison">
                                          <span className="livraison-title">
                                                livraison
                                          </span>
                                          <div className="all-select-user">
                                                <select className="select-livraison-user">
                                                      <option value="Comment souhaitez vous obtenir vos articles.">
                                                            Comment souhaitez
                                                            vous obtenir vos
                                                            articles.
                                                      </option>
                                                      <option
                                                            value="Je veux etre livrer"
                                                            className="option"
                                                      >
                                                            Je veux etre livrer
                                                      </option>
                                                      <option
                                                            value="Je veux recuperer mes articles moi meme"
                                                            className="option"
                                                      >
                                                            Je veux recuperer
                                                            mes articles moi
                                                            meme
                                                      </option>
                                                      <option
                                                            value="Peu importe"
                                                            className="option"
                                                      >
                                                            Peu importe
                                                      </option>
                                                </select>

                                                <div className="select-calendrier">
                                                      <input
                                                            type="date"
                                                            onChange={
                                                                  handleChangeDate
                                                            }
                                                            ref={dateInputRef}
                                                      />
                                                </div>
                                          </div>
                                    </div>
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
                        <button className="panier-achats">
                              Revenir Au panier
                        </button>
                        <button className="panier-fourniseurs">
                              <NavLink to="/login" className="nav-panier">
                                    Lancer La Recherche
                              </NavLink>
                        </button>
                  </div>
            </div>
      );
};
