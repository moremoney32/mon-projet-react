import thunder from "../../../icons/thunder.svg";
import rightMain from "../../../icons/rightMain.svg";
import arrowLeft from "../../../icons/arrowLeft.svg";
import arrowRight from "../../../icons/arrowRight.svg";
import hearth from "../../../icons/hearth.svg";
import barRed from "../../../icons/barRed.svg";
import star from "../../../icons/star.svg";
import starNoColor from "../../../icons/starNoColor.svg";
import "./main-section1.css";
import { useRef, useState} from "react";
import { NavLink } from "react-router-dom";
import { mockTendances } from "../../mockdonnees/mockTendances";
import { mockPromotions } from "../../mockdonnees/mockPromotions";
import { mockTopCategories } from "../../mockdonnees/mockTopCategories";
import { mockPreferees } from "../../mockdonnees/mockPreferees";
import { Input } from "../../input/Input.jsx";
import { Header } from "../../header/Header.jsx";
import { MainHeader } from "../mainheader/MainHeader.jsx";


export const MainSection = ({ mainArticle, h2, h3, h4, h5,name }) => {
      const [counter, setCounter] = useState(0);
      const [counterLikes, setCounterLikes] = useState(12);
      const [etat, setEtat] = useState(false);
      const [currentIndex1, setCurrentIndex1] = useState(0);
      const [currentIndex2, setCurrentIndex2] = useState(0);
      const [currentIndex3, setCurrentIndex3] = useState(0);
      const [currentIndex4, setCurrentIndex4] = useState(0);
      const [visible,setVisible] = useState(true)
      const [visiblePromo,setVisiblePromo] = useState(true)
      const [bloc,setBloc] = useState(false)
      const [blocPromo,setBlocPromo] = useState(false)
      const [visibleCategories,setVisibleCategories] = useState(true)
      const [title, setTitle] = useState(false);
      const [titlePromo, setTitlePromo] = useState(false);
      const [titlePreferees, setTitlePreferees] = useState(false);
      const [blocPreferees, setBlocPreferees] = useState(false);
      const [visiblePreferees,setVisiblePreferees] = useState(true)
      const left =useRef()
      const right =useRef()
      const parentImg = useRef()
      let TotalQuantityPanier = JSON.parse(localStorage.getItem("quantityPanier"))
      console.log(TotalQuantityPanier)

      function closeGetPanier() {
            setBloc(false);
      }
      function closeGetPanierPromo() {
            setBlocPromo(false);
      }

      function next1() {
            const nextIndex = currentIndex1 + 4;
            
           
                        if (currentIndex1 === mockTendances.length - 4) {
                              setCurrentIndex1(0); // Revenir au début si à la fin
                            } else if (currentIndex1 + 4 <= mockTendances.length) {
                              setCurrentIndex1(nextIndex); // Avancer de 4 si possible
                            
                            } 
          }
          function next2() {
            const nextIndex = currentIndex2 + 4;
            
           
                        if (currentIndex2 === mockPromotions.length - 4) {
                              setCurrentIndex2(0); // Revenir au début si à la fin
                            } else if (currentIndex2 + 4 <= mockPromotions.length) {
                              setCurrentIndex2(nextIndex); // Avancer de 4 si possible
                            
                            } 
          }
          function next3() {
            const nextIndex = currentIndex3 + 4;
            
           
                        if (currentIndex3 === mockTopCategories.length - 4) {
                              setCurrentIndex3(0); // Revenir au début si à la fin
                            } else if (currentIndex3 + 4 <= mockPromotions.length) {
                              setCurrentIndex3(nextIndex); // Avancer de 4 si possible
                            
                            } 
          }
          function next4() {
            const nextIndex = currentIndex4 + 4;
            
           
                        if (currentIndex4 === mockTopCategories.length - 4) {
                              setCurrentIndex4(0); // Revenir au début si à la fin
                            } else if (currentIndex4 + 4 <= mockPromotions.length) {
                              setCurrentIndex4(nextIndex); // Avancer de 4 si possible
                            
                            } 
          }
      function preview1() {
            const previousIndex = currentIndex1 - 4;
            if (currentIndex1 === 0) {
              setCurrentIndex1(mockTendances.length - 4);
            } else if (currentIndex1 - 4 >= 0) {
              setCurrentIndex1(currentIndex1 - 4);
            }
            const numImages = Math.min(4, mockTendances.length - currentIndex1); // Ensure smooth transition for last group

  for (let i = 0; i < numImages; i++) { // Iterate over visible images
    setTimeout(() => {
      const image = document.querySelector(`.main-article-section1-one-article:nth-child(${i + 1})`);
      image.classList.add("image-sent");
    }, i * 100);
  }
      }
      function preview2() {
            const previousIndex = currentIndex2 - 4;
            if (currentIndex2 === 0) {
              setCurrentIndex2(mockPromotions.length - 4);
            } else if (currentIndex2 - 4 >= 0) {
              setCurrentIndex2(currentIndex2 - 4);
            }
            const numImages = Math.min(4, mockPromotions.length - currentIndex2); // Ensure smooth transition for last group

  for (let i = 0; i < numImages; i++) { // Iterate over visible images
    setTimeout(() => {
      const image = document.querySelector(`.main-article-section1-one-article:nth-child(${i + 1})`);
      image.classList.add("image-sent");
    }, i * 100);
  }
      }
      function preview3() {
            const previousIndex = currentIndex3 - 4;
            if (currentIndex3 === 0) {
              setCurrentIndex3(mockTopCategories.length - 4);
            } else if (currentIndex3 - 4 >= 0) {
              setCurrentIndex3(currentIndex3 - 4);
            }
            const numImages = Math.min(4, mockTopCategories.length - currentIndex3); // Ensure smooth transition for last group

  for (let i = 0; i < numImages; i++) { // Iterate over visible images
    setTimeout(() => {
      const image = document.querySelector(`.main-article-section1-one-article:nth-child(${i + 1})`);
      image.classList.add("image-sent");
    }, i * 100);
  }
      }
      function preview4() {
            const previousIndex = currentIndex4 - 4;
            if (currentIndex4 === 0) {
              setCurrentIndex4(mockTopCategories.length - 4);
            } else if (currentIndex4 - 4 >= 0) {
              setCurrentIndex4(currentIndex4 - 4);
            }
            const numImages = Math.min(4, mockTopCategories.length - currentIndex4); // Ensure smooth transition for last group

  for (let i = 0; i < numImages; i++) { // Iterate over visible images
    setTimeout(() => {
      const image = document.querySelector(`.main-article-section1-one-article:nth-child(${i + 1})`);
      image.classList.add("image-sent");
    }, i * 100);
  }
      }
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
      const handleEtat = (e) => {
           setBloc(!bloc)
      };
      const handleClickOutside = (event) => {
            // Cacher le bloc des catégories et le filtre lorsque l'utilisateur clique en dehors
            if (etat && !event.target.closest(".handle-article")) {
                  setEtat(false);
            }
      };
      const changeStructure = (e)=>{
                  setVisible(false) 
      }
      const rechangeStructure = ()=>{
            setVisible(true)
      }
      const changeStructurePromo = (e)=>{
            setVisiblePromo(false) 
}
const rechangeStructurePromo = ()=>{
      setVisiblePromo(true)
}
const changeStructureCategories = (e)=>{
      setVisibleCategories(false) 
}
const rechangeStructureCategories = ()=>{
setVisibleCategories(true)
}
const changeStructurePreferees = ()=>{
      setVisiblePreferees(false) 
}
const rechangeStructurePreferees = ()=>{
setVisiblePreferees(true)
}
function updateRecette(menu) {
      const special = document.querySelector(".button");
      localStorage.setItem("objectPlats", JSON.stringify(menu));
}
function getPanier(index) {
      let specialTitle = document.querySelectorAll(
            ".special-plats-title"
      );
      for (let i = 0; i <= specialTitle.length; i++) {
            return (
                  setTitle(specialTitle[index].textContent), setBloc(true)
            );
      }
}
function getPanierPromo(index) {
      let specialTitle = document.querySelectorAll(
            ".special-plats-title-promo"
      );
      for (let i = 0; i <= specialTitle.length; i++) {
            return (
                  setTitlePromo(specialTitle[index].textContent), setBlocPromo(true)
            );
      }
}
function getPanierPreferees(index) {
      let specialTitle = document.querySelectorAll(
            ".special-plats-title-preferees"
      );
      for (let i = 0; i <= specialTitle.length; i++) {
            return (
                  setTitlePreferees(specialTitle[index].textContent), setBlocPreferees(true)
            );
      }
}
function closeGetPanierPreferees(){
      setBlocPreferees(false);
}
function close() {
      let inputPanier = document.querySelector(".input-panier");
      return (
            (inputPanier.style.display = "none"),
            setBloc(false)
            
      );
}

      return (
            <>
            <Header panierCounter={TotalQuantityPanier}/>
            <MainHeader/>
            <div
                  style={mainArticle}
                  onClick={handleClickOutside}
                  className="main-article-section1"
            >
                  <div className="main-article-section1-title">
                        <div className="main-article-section1-title-left">
                              <img src={thunder} alt="" />
                              <h2>{h2}</h2>
                        </div>
                        <div className="main-article-section1-title-right">
                              {visible?<span onClick={changeStructure} className="view-all">view all</span>:<span onClick={rechangeStructure} className="view-all">preview</span>}
                              <img src={rightMain} alt="" />
                        </div>
                  </div>
                  
                  {visible ? <div className="main-article-section1-all-pictures">
                        <img src={arrowLeft} alt="" className="arrow-left" onClick={preview1}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next1} id ="button-next1"/>
                       
                        
                       <div   className="parent-img">
                       {mockTendances.slice(currentIndex1, currentIndex1 + 4).map((tendances,index) => {
                          
                              return(
                                   
                              <div className="main-article-section1-one-article" key={index}  data-id={tendances.id} onClick={() => updateRecette(tendances)}>                              
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={() =>
                                                getPanier(
                                                      index
                                                )
                                          }
                                          
                                          className={currentIndex1 === index + currentIndex1 && "image-sent"} data-id={tendances.id}/>
                                    <div className="main-article-section1-one-article-detail">
                                          
                                          <div className="parent-hearth">
                                                <h4 className="special-plats-title">{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                          
                                                
                                         
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>:<div className="main-article-section1-all-pictures">
                      {/*  <img src={arrowLeft} alt="" className="arrow-left" onClick={preview} ref={left}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next} ref={right}/>*/}
                       
                        
                       <div   className="parent-img-active">
                       {mockTendances.map((tendances, index) => {
                          
                              return(
                                   
                                    <div className="main-article-section1-one-article" key={index}  data-id={tendances.id} onClick={() => updateRecette(tendances)}>
                                    <a href="#input"><img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={() =>
                                                getPanier(
                                                      index
                                                )
                                          }
                                          
                                          className={currentIndex1 === index + currentIndex1 && "image-sent"} data-id={tendances.id}/></a>
                                    <div className="main-article-section1-one-article-detail">
                                          
                                          <div className="parent-hearth">
                                                <h4 className="special-plats-title">{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                          
                                                
                                         
                                    </div>
                              </div>
                                 
                             
                                   
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
                  {bloc ? (
                        <Input close={close}
                        title={title}
                        closeGetPanier={closeGetPanier}/>
                              
                        
                  ) : (
                        ""
                  )}
                   <div className="main-article-section1-title">
                        <div className="main-article-section1-title-left">
                              <img src={thunder} alt="" />
                              <h2>{h3}</h2>
                        </div>
                        <div className="main-article-section1-title-right">
                        {visiblePromo?<span onClick={changeStructurePromo} className="view-all">view all</span>:<span onClick={rechangeStructurePromo} className="view-all">preview</span>}
                              <img src={rightMain} alt="" />
                        </div>
                  </div>
                  {visiblePromo ? <div className="main-article-section1-all-pictures">
                        <img src={arrowLeft} alt="" className="arrow-left" onClick={preview2}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next2} id ="button-next2"/>
                       
                        
                       <div   className="parent-img">
                       {mockPromotions.slice(currentIndex2, currentIndex2 + 4).map((tendances, index) => {
                          
                              return(
                                   
                                    <div className="main-article-section1-one-article" key={index}  data-id={tendances.id} onClick={() => updateRecette(tendances)}>                              
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={() =>
                                                getPanierPromo(
                                                      index
                                                )
                                          }
                                          
                                          className={currentIndex1 === index + currentIndex1 && "image-sent"} data-id={tendances.id}/>
                                    <div className="main-article-section1-one-article-detail">
                                          
                                          <div className="parent-hearth">
                                                <h4 className="special-plats-title-promo">{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                          
                                                
                                         
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>:<div className="main-article-section1-all-pictures">
                      {/*  <img src={arrowLeft} alt="" className="arrow-left" onClick={preview} ref={left}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next} ref={right}/>*/}
                       
                        
                       <div   className="parent-img-active">
                       {mockPromotions.map((tendances, index) => {
                          
                              return(
                                   
                                    <div className="main-article-section1-one-article" key={index}  data-id={tendances.id} onClick={() => updateRecette(tendances)}>
                                    <a href="#input"><img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={() =>
                                                getPanierPromo(
                                                      index
                                                )
                                          }
                                          
                                          className={currentIndex1 === index + currentIndex1 && "image-sent"} data-id={tendances.id}/></a>
                                    <div className="main-article-section1-one-article-detail">
                                          
                                          <div className="parent-hearth">
                                                <h4 className="special-plats-title-promo">{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                          
                                                
                                         
                                    </div>
                              </div>
                                 
                             
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
                  {blocPromo ? (
                        <Input close={close}
                        title={titlePromo}
                        closeGetPanier={closeGetPanierPromo}/>
                              
                        
                  ) : (
                        ""
                  )}
                  
                  <div className="main-article-section1-title">
                        <div className="main-article-section1-title-left">
                              <img src={barRed} alt="" />
                              <h2>{h4}</h2>
                        </div>
                        <div className="main-article-section1-title-right">
                        {visibleCategories?<span onClick={changeStructureCategories} className="view-all">view all</span>:<span onClick={rechangeStructureCategories} className="view-all">preview</span>}
                              <img src={rightMain} alt="" />
                        </div>
                  </div>
                  {visibleCategories ? <div className="main-article-section1-all-pictures">
                        <img src={arrowLeft} alt="" className="arrow-left" onClick={preview3}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next3}/>
                       
                        
                       <div   className="parent-img">
                       {mockTopCategories.slice(currentIndex3, currentIndex3 + 4).map((tendances, index) => {
                          
                              return(
                                   
                              <div className="main-article-section1-one-article" key={index}>
                                    <NavLink to={`/menu/${name}`}><img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt={name}
                                          className={currentIndex3 === index + currentIndex3 && "image-sent"}/></NavLink>
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>:<div className="main-article-section1-all-pictures">
                      {/*  <img src={arrowLeft} alt="" className="arrow-left" onClick={preview} ref={left}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next} ref={right}/>*/}
                       
                        
                       <div   className="parent-img-active">
                       {mockTopCategories.map((tendances, index) => {
                          
                              return(
                                   
                              <div className="main-article-section1-one-article">
                                     <NavLink to={`/menu/${name}`}><img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={handleEtat}
                                          className={currentIndex3 === index + currentIndex3 && "image-sent"}/></NavLink>
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
                  <div className="main-article-section1-title">
                        <div className="main-article-section1-title-left">
                              <img src={thunder} alt="" />
                              <h2>{h5}</h2>
                        </div>
                        <div className="main-article-section1-title-right">
                        {visiblePreferees?<span onClick={changeStructurePreferees} className="view-all">view all</span>:<span onClick={rechangeStructurePreferees} className="view-all">preview</span>}
                              <img src={rightMain} alt="" />
                        </div>
                  </div>
                  
                  {visiblePreferees ? <div className="main-article-section1-all-pictures">
                        <img src={arrowLeft} alt="" className="arrow-left" onClick={preview4}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next4} id ="button-next1"/>
                       
                        
                       <div   className="parent-img">
                       {mockPreferees.slice(currentIndex4, currentIndex4 + 4).map((tendances,index) => {
                          
                              return(
                                   
                              <div className="main-article-section1-one-article" key={index}  data-id={tendances.id} onClick={() => updateRecette(tendances)}>                              
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={() =>
                                                getPanierPreferees(
                                                      index
                                                )
                                          }
                                          
                                          className={currentIndex4 === index + currentIndex4 && "image-sent"} data-id={tendances.id}/>
                                    <div className="main-article-section1-one-article-detail">
                                          
                                          <div className="parent-hearth">
                                                <h4 className="special-plats-title-preferees">{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                          
                                                
                                         
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>:<div className="main-article-section1-all-pictures">
                      {/*  <img src={arrowLeft} alt="" className="arrow-left" onClick={preview} ref={left}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next} ref={right}/>*/}
                       
                        
                       <div   className="parent-img-active">
                       {mockPreferees.map((tendances, index) => {
                          
                              return(
                                   
                                    <div className="main-article-section1-one-article" key={index}  data-id={tendances.id} onClick={() => updateRecette(tendances)}>
                                    <a href="#input"><img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={() =>
                                                getPanierPreferees(
                                                      index
                                                )
                                          }
                                          
                                          className={currentIndex4 === index + currentIndex4 && "image-sent"} data-id={tendances.id}/></a>
                                    <div className="main-article-section1-one-article-detail">
                                          
                                          <div className="parent-hearth">
                                                <h4 className="special-plats-title-preferees">{tendances.h2}</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      price
                                                </span>
                                                <span className="price">
                                                      {tendances.price}xaf
                                                </span>
                                          </div>
                                          
                                          
                                                
                                         
                                    </div>
                              </div>
                                 
                             
                                   
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
                  {blocPreferees ? (
                        <Input close={close}
                        title={titlePreferees}
                        closeGetPanier={closeGetPanierPreferees}/>
                              
                        
                  ) : (
                        ""
                  )}
                  
                  
            </div>
            </>
      );
};
