import up from "../../icons/up.svg";
import down from "../../icons/down.svg";
import "./oneproductmobile.css";
import rightMain from "../../icons/rightMain.svg";
import star from "../../icons/star.svg";
import starDarkGray from "../../icons/starDarkGray.svg";
import hearth from "../../icons/hearth.svg";
import iphone from "../../images/iphone.jpg";
import React, { useState, useRef } from "react";
export const OneProductMobile = () => {
      const [optionVisible, setOptionVisible] = useState(false);
      const [optionName, setOptionName] = useState("");
      const [rotateIcon, setRotateIcon] = useState(false);
      const [divVisible, setDivVisible] = useState(false);
      const [blocCategories, setBlocCategories] = useState(false);
      const [rotateCategories, setRotateCategories] = useState(false);
      const [background, setBackground] = useState(false);
      const [counter, setCounter] = useState(0);
      const changeIcon = () => {
            setRotateIcon(!rotateIcon);
            if (rotateIcon) {
                  // Deuxième clic : masquer les options
                  setOptionVisible(false);
            } else {
                  // Premier clic : afficher les options
                  setOptionVisible(true);
            }
      };
      const handleChildClick = (value) => {
            setOptionName(value);
            setOptionVisible(false);
            setRotateIcon(!rotateIcon);
      };
      const handleCategories =()=>{
        setBlocCategories(!blocCategories)
        setBackground(!background)

      }
      const changeCategories = () => {
        setRotateCategories(!rotateCategories);
        if (rotateCategories) {
          setDivVisible(false);
        } else {
          setDivVisible(true);
        }
      };
      const handleClickOutside = (event) => {
        // Cacher le bloc des catégories et le filtre lorsque l'utilisateur clique en dehors
        if (blocCategories && !event.target.closest('.categories-mobile')) {
          setBlocCategories(false);
          setBackground(false)
        }
      };
      return (
            <div className ={`parent-categories-mobile ${background ? "black" : ""}`} onClick={handleClickOutside}>
                  <div className="search-categories-mobile">
                        <div className="search-name-mobile">
                              <h4>Recherche de “”</h4>
                              <span>5 résultats trouvés</span>
                        </div>
                        <div className="bloc-search-mobile-product">
                              <div className="search-mobile-product">
                                    <span>Trier par:</span>
                                    <div className="select-trier-mobile">
                                          <div
                                                className={`select-trie-name-mobile ${
                                                      rotateIcon
                                                            ? "focused"
                                                            : ""
                                                }`}
                                          >
                                                <span>
                                                      {optionName || "Nom"}
                                                </span>
                                                <img
                                                      src={up}
                                                      alt=""
                                                      onClick={changeIcon}
                                                      style={{
                                                            transform:
                                                                  rotateIcon &&
                                                                  "rotate(180deg)",
                                                      }}
                                                />
                                          </div>
                                          {optionVisible && (
                                                <div className="option-mobile">
                                                      <span
                                                            onClick={() =>
                                                                  handleChildClick(
                                                                        "Nom"
                                                                  )
                                                            }
                                                      >
                                                            Nom
                                                      </span>
                                                      <span
                                                            onClick={() =>
                                                                  handleChildClick(
                                                                        "Prix croissant"
                                                                  )
                                                            }
                                                      >
                                                            Prix croissant
                                                      </span>
                                                      <span
                                                            onClick={() =>
                                                                  handleChildClick(
                                                                        "Prix decroissant"
                                                                  )
                                                            }
                                                      >
                                                            Prix decroissant
                                                      </span>
                                                </div>
                                          )}
                                    </div>
                              </div>
                              <img
                              src={down}
                              alt=""
                              className="icon-categories-mobile"
                        onClick={handleCategories}/>
                        </div>
                       
                  </div>
                  
                  {blocCategories && (<div className="categories-mobile">
                <div className="categories1">
                    <h4>Categories</h4>
                    <div className="sous-categories1" >
                        <span>Bath Preparations</span>
                        <img src={rightMain} alt=""  style={{ transform: rotateCategories && "rotate(90deg)" }} onClick={changeCategories}/>
                    </div>{divVisible && (
                    <div className="sous-categories1-img">
                        <span>Bubble Bath</span>
                        <span>Bath Capsules</span>
                        <span>Others</span>
                    </div>)}
                    <div className="sous-categories1-span">
                        <span>Eye Makeup Preparations</span>
                        <span>Fragrance</span>
                        <span>Hair Preparations</span>

                    </div>
                    
                </div>
                <div className="categories2">
                    <h4>Price Range</h4>
                    <div className="sous-categories2">
                        <input type="number" min={0}/>
                        <span>-</span>
                        <input type="number" min={0}/>
                    </div>
                    <div className="sous-categories2-span">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="categories3">
                    <h4>Ratings</h4>
                    <div className="all-ratings-checkbox">
                        <input type="checkbox" />
                        <div className="all-ratings">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                    <div className="all-ratings-checkbox">
                        <input type="checkbox" />
                        <div className="all-ratings">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={starDarkGray} alt="" />
                        </div>
                    </div>
                    <div className="all-ratings-checkbox">
                        <input type="checkbox" />
                        <div className="all-ratings">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={starDarkGray} alt="" />
                            <img src={starDarkGray} alt="" />
                        </div>
                    </div>
                    <div className="all-ratings-checkbox">
                        <input type="checkbox" />
                        <div className="all-ratings">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={starDarkGray} alt="" />
                            <img src={starDarkGray} alt="" />
                            <img src={starDarkGray} alt="" />
                        </div>
                    </div>
                    <div className="all-ratings-checkbox">
                        <input type="checkbox" />
                        <div className="all-ratings">
                            <img src={star} alt="" />
                            <img src={starDarkGray} alt="" />
                            <img src={starDarkGray} alt="" />
                            <img src={starDarkGray} alt="" />
                            <img src={starDarkGray} alt="" />
                        </div>
                    </div>
                    <span></span>
                </div>
            </div>)}
                  
                  <div className="search-categories-mobile-product">
                  <div className="main-article-section1-one-article">
                                    <img src={iphone} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>IPHONES</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                </div>
                                                <span className="counter">
                                                      {counter}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      iphone13
                                                </span>
                                                <span className="price">
                                                      550000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={iphone} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>IPHONES</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                </div>
                                                <span className="counter">
                                                      {counter}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      iphone13
                                                </span>
                                                <span className="price">
                                                      550000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                  </div>
                  <div className="search-categories-mobile-pagination">
                    <span>Afiichage 1-9 de 1.3k Articles</span>
                    <div></div>
                  </div>
            </div>
      );
};
