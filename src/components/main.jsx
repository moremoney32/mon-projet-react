import thunder from "../../../icons/thunder.svg";
import rightMain from "../../../icons/rightMain.svg";
import arrowLeft from "../../../icons/arrowLeft.svg";
import arrowRight from "../../../icons/arrowRight.svg";
import hearth from "../../../icons/hearth.svg";
import barRed from "../../../icons/barRed.svg";
import star from "../../../icons/star.svg";
import starNoColor from "../../../icons/starNoColor.svg";
import montre from "../../../images/montre.jpg";
import iphone from "../../../images/iphone.jpg";
import casque from "../../../images/casque.jpg";
import nivea from "../../../images/nivea.jpg";
import "./main-section1.css";
import { useRef, useState} from "react";
import { NavLink } from "react-router-dom";
import { mockTendances } from "../../mockdonnees/mockTendances";
import { mockPromotions } from "../../mockdonnees/mockPromotions";
import { mockTopCategories } from "../../mockdonnees/mockTopCategories";
import { mockDonnees } from "../../mockdonnees/mockDonnees";
import { mockPreferees } from "../../mockdonnees/mockPreferees";

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
      const [visibleCategories,setVisibleCategories] = useState(true)
      const [visiblePreferees,setVisiblePreferees] = useState(true)
      const left =useRef()
      const right =useRef()
      const parentImg = useRef()

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
            //setEtat(!etat)
            
            for(let i =0; i<mockDonnees.length; i++){
                  if(parseInt(mockDonnees[i].id) === parseInt(e.target.dataset.id)){
                       console.log(e.target.parentElement)
                       e.target.parentElement.children[1].children[0].style.display = "none"
                       console.log(e.target.parentElement.children[1].lastChildElement)
                       //e.target.parentElement.children[1].lastChildElement.style.display = "block"
                  }
                 
               /*if(parseInt(arrayRecette[i].id) === parseInt(e.target.dataset.id)){
                          arrayRecette[i].quantity = e.target.value
                      
                          localStorage.setItem("produitRecettes", JSON.stringify(arrayRecette)) 
                          arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
                       return  totalArticlesPrix(arrayRecette).then((totalArticlesPrice)=>{
                              console.log(totalArticlesPrice);
                              setEtatObject(totalArticlesPrice)
                          
                         })
                         
                          
                                          
                          }*/
             }  
            /*setEtat(!etat);*/
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
const changeStructurePreferees = (e)=>{
      setVisiblePreferees(false) 
}
const rechangeStructurePreferees = ()=>{
setVisiblePreferees(true)
}

      return (
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
                              {visible?<span onClick={(e)=>changeStructure} className="view-all">view all</span>:<span onClick={rechangeStructure} className="view-all">preview</span>}
                              <img src={rightMain} alt="" />
                        </div>
                  </div>
                  
                  {visible ? <div className="main-article-section1-all-pictures">
                        <img src={arrowLeft} alt="" className="arrow-left" onClick={preview1}/>
                        <img src={arrowRight} alt="" className="arrow-right" onClick={next1} id ="button-next1"/>
                       
                        
                       <div   className="parent-img">
                       {mockTendances.slice(currentIndex1, currentIndex1 + 4).map((tendances,index) => {
                          
                              return(
                                   
                              <div className="main-article-section1-one-article" key={index}  data-id={tendances.id}>
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={handleEtat}
                                          className={currentIndex1 === index + currentIndex1 && "image-sent"} data-id={tendances.id}/>
                                    <div className="main-article-section1-one-article-detail">
                                          <div>
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
                                          
                                                <div className="handle-article">
                                                      <span className="tiltle-panier">
                                                            {" "}
                                                            zara de chivenchy
                                                      </span>
                                                      <div className="total-qte-price">
                                                            <span className="price">
                                                                  25000xaf x{counter}
                                                                  
                                                            </span>
                                                            <span>
                                                                  {`${eval(
                                                                        25000 *counter
                                                                              
                                                                  )}`}
                                                                  XAF
                                                            </span>
                                                      </div>
                                                      <div className="bloc-counter">
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        decrementCounter
                                                                  }
                                                            >
                                                                  -
                                                            </span>
                                                            <span className="counter-number">
                                                                  {counter}
                                                            </span>
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        incrementCounter
                                                                  }
                                                            >
                                                                  +
                                                            </span>
                                                      </div>
                                                      <button className="validation-panier">
                                                            valider
                                                      </button>
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
                                   
                              <div className="main-article-section1-one-article">
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={handleEtat}
                                          className={currentIndex1 === index + currentIndex1 && "image-sent"}/>
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
                                          {etat && (
                                                <div className="handle-article">
                                                      <span className="tiltle-panier">
                                                            {" "}
                                                            zara de chivenchy
                                                      </span>
                                                      <div className="total-qte-price">
                                                            <span className="price">
                                                                  25000xaf x{" "}
                                                                  {counter}
                                                            </span>
                                                            <span>
                                                                  {`${eval(
                                                                        25000 *
                                                                              counter
                                                                  )}`}
                                                                  XAF
                                                            </span>
                                                      </div>
                                                      <div className="bloc-counter">
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        decrementCounter
                                                                  }
                                                            >
                                                                  -
                                                            </span>
                                                            <span className="counter-number">
                                                                  {counter}
                                                            </span>
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        incrementCounter
                                                                  }
                                                            >
                                                                  +
                                                            </span>
                                                      </div>
                                                      <button className="validation-panier">
                                                            valider
                                                      </button>
                                                </div>
                                          )}
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
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
                                   
                              <div className="main-article-section1-one-article" key={index}>
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={handleEtat}
                                          className={currentIndex2 === index + currentIndex2 && "image-sent"}/>
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
                                          {etat && (
                                                <div className="handle-article">
                                                      <span className="tiltle-panier">
                                                            {" "}
                                                            zara de chivenchy
                                                      </span>
                                                      <div className="total-qte-price">
                                                            <span className="price">
                                                                  25000xaf x{" "}
                                                                  {counter}
                                                            </span>
                                                            <span>
                                                                  {`${eval(
                                                                        25000 *
                                                                              counter
                                                                  )}`}
                                                                  XAF
                                                            </span>
                                                      </div>
                                                      <div className="bloc-counter">
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        decrementCounter
                                                                  }
                                                            >
                                                                  -
                                                            </span>
                                                            <span className="counter-number">
                                                                  {counter}
                                                            </span>
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        incrementCounter
                                                                  }
                                                            >
                                                                  +
                                                            </span>
                                                      </div>
                                                      <button className="validation-panier">
                                                            valider
                                                      </button>
                                                </div>
                                          )}
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
                                   
                              <div className="main-article-section1-one-article">
                                    <img
                                          src={require(`../../../images/${tendances.image}`)}
                                          alt=""
                                          onClick={handleEtat}
                                          className={currentIndex2 === index + currentIndex2 && "image-sent"}/>
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
                                          {etat && (
                                                <div className="handle-article">
                                                      <span className="tiltle-panier">
                                                            {" "}
                                                            zara de chivenchy
                                                      </span>
                                                      <div className="total-qte-price">
                                                            <span className="price">
                                                                  25000xaf x{" "}
                                                                  {counter}
                                                            </span>
                                                            <span>
                                                                  {`${eval(
                                                                        25000 *
                                                                              counter
                                                                  )}`}
                                                                  XAF
                                                            </span>
                                                      </div>
                                                      <div className="bloc-counter">
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        decrementCounter
                                                                  }
                                                            >
                                                                  -
                                                            </span>
                                                            <span className="counter-number">
                                                                  {counter}
                                                            </span>
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        incrementCounter
                                                                  }
                                                            >
                                                                  +
                                                            </span>
                                                      </div>
                                                      <button className="validation-panier">
                                                            valider
                                                      </button>
                                                </div>
                                          )}
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
                  
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
                                          {etat && (
                                                <div className="handle-article">
                                                      <span className="tiltle-panier">
                                                            {" "}
                                                            zara de chivenchy
                                                      </span>
                                                      <div className="total-qte-price">
                                                            <span className="price">
                                                                  25000xaf x{" "}
                                                                  {counter}
                                                            </span>
                                                            <span>
                                                                  {`${eval(
                                                                        25000 *
                                                                              counter
                                                                  )}`}
                                                                  XAF
                                                            </span>
                                                      </div>
                                                      <div className="bloc-counter">
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        decrementCounter
                                                                  }
                                                            >
                                                                  -
                                                            </span>
                                                            <span className="counter-number">
                                                                  {counter}
                                                            </span>
                                                            <span
                                                                  className="counter-decrement"
                                                                  onClick={
                                                                        incrementCounter
                                                                  }
                                                            >
                                                                  +
                                                            </span>
                                                      </div>
                                                      <button className="validation-panier">
                                                            valider
                                                      </button>
                                                </div>
                                          )}
                                    </div>
                              </div>
                                 
                             
                                   
                                )
                          
                              })}
                          
                              </div>
                          
                  </div>}
                  {/*<div className="main-article-section1-all-pictures">
                        <img
                              src={arrowLeft}
                              alt=""
                              className="arrow-top-articles-left"
                        />
                        <img
                              src={arrowRight}
                              alt=""
                              className="arrow-top-articles-right"
                        />
                        <div className="main-article-section1-top-articles">
                              <div className="main-article-section1-one-article-favoris">
                                    <span className="name-produits-favoris-left">
                                          Sunglass
                                    </span>
                                    <span className="name-produits-favoris-right">
                                          3k orders this week
                                    </span>
                                    <NavLink to="/pageoneproduct">
                                          <img src={montre} alt="" />
                                    </NavLink>
                              </div>
                              <div className="main-article-section1-one-article-favoris">
                                    <span className="name-produits-favoris-left">
                                          Headphone
                                    </span>
                                    <span className="name-produits-favoris-right">
                                          3k orders this week
                                    </span>
                                    <NavLink to="/tele">
                                          <img src={montre} alt="" />
                                    </NavLink>
                              </div>
                              <div className="main-article-section1-one-article-favoris">
                                    <span className="name-produits-favoris-left">
                                          Watch
                                    </span>
                                    <span className="name-produits-favoris-right">
                                          3k orders this week
                                    </span>
                                    <img src={montre} alt="" />
                              </div>
                              <div className="main-article-section1-one-article-favoris">
                                    <span className="name-produits-favoris">
                                          Sunglass
                                    </span>
                                    <img src={casque} alt="" />
                              </div>
                              <div className="main-article-section1-one-article-favoris">
                                    <img src={casque} alt="" />
                              </div>
                        </div>
                  </div>
                  <div className="main-article-section1-title">
                        <div className="main-article-section1-title-left">
                              <img src={thunder} alt="" />
                              <h2>{h5}</h2>
                        </div>
                        <div className="main-article-section1-title-right">
                              <span>view all</span>
                              <img src={rightMain} alt="" />
                        </div>
                  </div>
                  <div className="main-article-section1-all-pictures">
                        <img src={arrowLeft} alt="" className="arrow-left" />
                        <img src={arrowRight} alt="" className="arrow-right" />
                        <div className="main-article-section1-all-articles">
                              <div className="main-article-section1-one-article">
                                    <img src={montre} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>MONTRE DE LUXE</h4>
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
                                                      zara de chivenchy
                                                </span>
                                                <span className="price">
                                                      25000xaf
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
                                                <span className="counterLikes">
                                                      {counterLikes}
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
                                    <img src={nivea} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>LAIT DE BEBE</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
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
                                                      creme nivea
                                                </span>
                                                <span className="price">
                                                      35000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>CASQUES</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>*/}
            </div>
      );
};
/*<div className="main-article-section1-one-article">
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
                                                <span className="counterLikes">
                                                      {counterLikes}
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
                                    <img src={nivea} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>LAIT DE BEBE</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img
                                                            src={starNoColor}
                                                            alt=""
                                                      />
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
                                                      creme nivea
                                                </span>
                                                <span className="price">
                                                      35000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <div className="parent-hearth">
                                                <h4>CASQUES</h4>
                                                <img src={hearth} alt="" />
                                          </div>
                                          <div className="parent-all-star">
                                                <div className="all-star">
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                      <img src={star} alt="" />
                                                </div>
                                                <span className="counterLikes">
                                                      {counterLikes}
                                                </span>
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <h4>Casque</h4>
                                          <div className="all-star">
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <h4>Casque</h4>
                                          <div className="all-star">
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <h4>Casque</h4>
                                          <div className="all-star">
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <h4>Casque</h4>
                                          <div className="all-star">
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="main-article-section1-one-article">
                                    <img src={casque} alt="" />
                                    <div className="main-article-section1-one-article-detail">
                                          <h4>Casque</h4>
                                          <div className="all-star">
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                                <img src={star} alt="" />
                                          </div>

                                          <div className="main-article-section1-one-article-price">
                                                <span className="title-price">
                                                      casque de edge
                                                </span>
                                                <span className="price">
                                                      90000xaf
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>*/
