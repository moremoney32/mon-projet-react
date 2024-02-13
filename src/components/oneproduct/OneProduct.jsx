import React, { useState, useRef } from "react";
import "./oneproduct.css";
import "../oneProductMobile/oneproductmobile.css";
import up from "../../icons/up.svg";
import rightMain from "../../icons/rightMain.svg";
import star from "../../icons/star.svg";
import starDarkGray from "../../icons/starDarkGray.svg";
import hearth from "../../icons/hearth.svg";
import iphone from "../../images/iphone.jpg";
import "../main/mainsection1/main-section1.css";
import { OneProductMobile } from "../oneProductMobile/OneProductMobile";

export const OneProduct = () => {
  const [optionVisible, setOptionVisible] = useState(false);
  const [optionName, setOptionName] = useState("");
  const [rotateIcon, setRotateIcon] = useState(false);
  const [rotateCategories, setRotateCategories] = useState(false);
  const [divVisible, setDivVisible] = useState(false);
  const [counter, setCounter] = useState(0);
const menuCategoriesRef = useRef(null);

  //a partir de la classe main-article-one-section c est le css de

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
  const changeCategories = () => {
    setRotateCategories(!rotateCategories);
    if (rotateCategories) {
      setDivVisible(false);
    } else {
      setDivVisible(true);
    }
  };

  const handleChildClick = (value) => {
    setOptionName(value);
    setOptionVisible(false);
    setRotateIcon(!rotateIcon);
  };

  return (
      <>
      <div className="oneproductmobile">
            <OneProductMobile/>
      </div>
    <div className="parent-one-product">
      <div className="sous-parent-one-product">
        <div className="search-product">
          <div className="name-of-search">
            <span>Recherche de “{optionName}”</span>
            <span>5 résultats trouvés</span>
          </div>
          <div className="trier-of-search">
            <span className="trier-of-search-span">Trier par:</span>
            <div className="select-trier">
              <div className={`select-trie-name ${rotateIcon ? 'focused' : ''}`}>
                <span>{optionName || "Nom"}</span>
                <img
                  src={up}
                  alt=""
                  onClick={changeIcon}
                  style={{ transform: rotateIcon && "rotate(180deg)" }}
                />
              </div>
              {optionVisible && (
                <div className="option">
                  <span onClick={() => handleChildClick("Nom")}>Nom</span>
                  <span onClick={() => handleChildClick("Prix croissant")}>
                    Prix croissant
                  </span>
                  <span onClick={() => handleChildClick("Prix decroissant")}>
                    Prix decroissant
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="categories-product">
            <div className="categories">
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
            </div>
            <div className="menu-categories" ref={menuCategoriesRef}>
           
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
        </div>
      </div>
    </div>
    </>
  );
};
