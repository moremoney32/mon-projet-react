/***composant qui traite l entete*/
import "./header.css";
import phone from "../../icons/phone.svg";
import message from "../../icons/message.svg";
import down from "../../icons/down.svg";
import search from "../../icons/search.svg";
import user from "../../icons/user.svg";
import panier from "../../icons/panier.svg";
import right from "../../icons/right.svg";
import bar from "../../icons/bar.svg";
import star from "../../icons/star.svg";
import starNoColor from "../../icons/starNoColor.svg";
import hearth from "../../icons/hearth.svg";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { HeaderMobile } from "../headermobile/HeaderMobile";

export const Header = ({ panierCounter }) => {
      
      
      const [showConnect, setShowConnect] = useState(false);
      const [blocCategories, setBlocCategories] = useState(false);
      const [panierVisible, setPanierVisible] = useState(false);
      const [background, setBackground] = useState(false);
      const [counterLikes, setCounterLikes] = useState(25);
      const [etatRecette,setEtatRecette]= useState([])

      const categories = useRef(null);
      const parentInput = useRef(null);
      let arrayRecettesPanier = JSON.parse(localStorage.getItem("produitRecette"))
      useEffect(() => {
            setEtatRecette(arrayRecettesPanier);
           
           
                
        }, []);
     
      const handleConnectToggle = () => {
            setShowConnect(!showConnect);
      };
      const handleCategories = () => {
            setBlocCategories(!blocCategories);
      };
      const handleVisible = () => {
            setPanierVisible(!panierVisible);
            setBackground(!background);
            parentInput.current.style.opacity = 0.5;
            categories.current.style.opacity = 0.5;
      };
      const handleClickOutside = (event) => {
            // Cacher le bloc des catégories et le filtre lorsque l'utilisateur clique en dehors
            if (
                  (blocCategories &&
                        !event.target.closest(".search-all-categories")) ||
                  (panierVisible && !event.target.closest(".panier-articles"))
            ) {
                  setBlocCategories(false);
                  setPanierVisible(false);
                  setBackground(false);
                  parentInput.current.style.opacity = 1;
                  categories.current.style.opacity = 1;
            }
      };
      function removeProduit(e){
            let arrayRecettesPanier =  JSON.parse(localStorage.getItem("produitRecette"))
            const blocCommandeElement = e.target.closest('.sous-panier-articles-item1');
            console.log(blocCommandeElement)
       console.log(parseInt(blocCommandeElement.dataset.id))

       const index = arrayRecettesPanier.findIndex((obj) => parseInt(obj.id) === parseInt(blocCommandeElement.dataset.id));
       if(index !==-1){
            arrayRecettesPanier.splice(index,1)
            console.log(arrayRecettesPanier)
             localStorage.setItem("produitRecette", JSON.stringify(arrayRecettesPanier))
             arrayRecettesPanier =  JSON.parse(localStorage.getItem("produitRecette"))
             setEtatRecette(arrayRecettesPanier)
             console.log(arrayRecettesPanier)
             let newQuantity = 0;

            /* for (const object of arrayRecettesPanier) {
                  newQuantity += object.quantity;
                }
                console.log(newQuantity)
                localStorage.setItem("quantityPanier", JSON.stringify(newQuantity))
                newQuantity=  JSON.parse(localStorage.getItem("quantityPanier"))
                setPanierC(newQuantity)p/
                
           /*return  totalArticlesPrix(arrayRecette).then((totalArticlesPrice)=>{
                 console.log(totalArticlesPrice)
                 setEtatObject(totalArticlesPrice)
                })*/
 
        }   
          
      }
     
      
          
          

      /* useEffect(()=>{
    if(TotalQuantityPanier){
      console.log(panier)
      setPanierCounter(TotalQuantityPanier)
    }   
    console.log(panier)
    
  },[TotalQuantityPanier])*/
      /*<div className="search-all-categories">
                                    <span>Franck</span>
                                    <span>Mon Profil</span>
                                    <span>Mes Commandes</span>
                                    <span>Mes bon plans</span>
                                    <span>Partager l application</span>
                                    <span>Deconnexion</span>
                                    </div><span className="button-on">se connecter</span>*/
      return (
            <>
                  <div className="view-mobile">
                        <HeaderMobile />
                  </div>
                  <div
                        className={`parent-header ${
                              background ? "black-panier" : ""
                        }`}
                        onClick={handleClickOutside}
                  >
                        <div className="sous-header-main">
                              {panierVisible &&
                                    (panierCounter ? (
                                          <div className="panier-articles">
                                                <div className="panier-articles-item1">
                                                      <img
                                                            src={panier}
                                                            alt=""
                                                      />
                                                      <span>
                                                            {" "}
                                                            {panierCounter} item
                                                      </span>
                                                </div>
                                                <div className="panier-articles-item3">
                                                      <div className="parent-articles-item3-div">
                                                           
                                                            {arrayRecettesPanier.map(
                                                                  (
                                                                        tendances,
                                                                        index
                                                                  ) => {
                                                                        return (
                                                                              <div className="sous-panier-articles-item1" data-id={tendances.id}>
                                                                                    <div
                                                                                          className="panier-article"
                                                                                          key={
                                                                                                index
                                                                                          }
                                                                                          data-id={
                                                                                                tendances.id
                                                                                          }
                                                                                    >
                                                                                          <img
                                                                                                src={require(`../../images/${tendances.image}`)}
                                                                                                alt=""
                                                                                                data-id={
                                                                                                      tendances.id
                                                                                                }
                                                                                          />
                                                                                          <div className="panier-article-detail">
                                                                                                <div className="parent-hearth">
                                                                                                      <h4 className="special-plats-title-panier">
                                                                                                            {
                                                                                                                  tendances.h2
                                                                                                            }
                                                                                                      </h4>
                                                                                                      <img
                                                                                                            src={
                                                                                                                  hearth
                                                                                                            }
                                                                                                            alt=""
                                                                                                      />
                                                                                                </div>
                                                                                                <div className="parent-all-star">
                                                                                                      <div className="all-star">
                                                                                                            <img
                                                                                                                  src={
                                                                                                                        star
                                                                                                                  }
                                                                                                                  alt=""
                                                                                                            />
                                                                                                            <img
                                                                                                                  src={
                                                                                                                        star
                                                                                                                  }
                                                                                                                  alt=""
                                                                                                            />
                                                                                                            <img
                                                                                                                  src={
                                                                                                                        star
                                                                                                                  }
                                                                                                                  alt=""
                                                                                                            />
                                                                                                            <img
                                                                                                                  src={
                                                                                                                        star
                                                                                                                  }
                                                                                                                  alt=""
                                                                                                            />
                                                                                                            <img
                                                                                                                  src={
                                                                                                                        starNoColor
                                                                                                                  }
                                                                                                                  alt=""
                                                                                                            />
                                                                                                      </div>
                                                                                                      <span className="counterLikes">
                                                                                                            {
                                                                                                                  counterLikes
                                                                                                            }
                                                                                                      </span>
                                                                                                </div>

                                                                                                <div className="main-article-section1-one-article-price">
                                                                                                      <span className="title-price">
                                                                                                            price
                                                                                                      </span>
                                                                                                      <span className="price">
                                                                                                            {
                                                                                                                  tendances.price
                                                                                                            }
                                                                                                            xaf
                                                                                                      </span>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="bloc-quantity">
                                                                                          <div className="parent-quantity">
                                                                                                <span>
                                                                                                      quantite:
                                                                                                </span>
                                                                                                <input
                                                                                                      type="number"
                                                                                                      className="quantitynumber"
                                                                                                      data-id={
                                                                                                            tendances.id
                                                                                                      }
                                                                                                      defaultValue={
                                                                                                            tendances.quantity
                                                                                                      }
                                                                                                      min="1"
                                                                                                />
                                                                                          </div>
                                                                                          <span
                                                                                                className="delete-recette"
                                                                                                data-id={
                                                                                                      tendances.id
                                                                                                }
                                                                                                onClick={removeProduit}>
                                                                                                supprimer
                                                                                          </span>
                                                                                    </div>
                                                                              </div>
                                                                        );
                                                                  }
                                                            )}
                                                            
                                                      </div>
                                                      <button className="button-all-panier">
                                                            <NavLink to="/profilcart" className="nav-panier">panier</NavLink>
                                                      </button>
                                                </div>
                                          </div>
                                    ) : (
                                          <div className="panier-articles">
                                                <div className="panier-articles-item1">
                                                      <img
                                                            src={panier}
                                                            alt=""
                                                      />
                                                      <span> 0 item</span>
                                                </div>
                                                <div className="panier-articles-item2">
                                                      <img
                                                            src={panier}
                                                            alt=""
                                                      />
                                                      <span>
                                                            Votre panier est
                                                            vide.
                                                      </span>
                                                      <span>
                                                            Commencer à
                                                            magasiner
                                                      </span>
                                                </div>
                                          </div>
                                    ))}
                              <div className="sous-header-main-title">
                                    P. Ecommerce
                              </div>
                              <div
                                    className="sous-header-main-parent-input"
                                    ref={parentInput}
                              >
                                    <input
                                          type="text"
                                          className="sous-header-main-input-left"
                                          placeholder="Que rechercher vous"
                                    />
                                    <img
                                          src={search}
                                          alt=""
                                          className="search"
                                    />
                                    <input
                                          type="text"
                                          className="sous-header-main-input-right"
                                          placeholder="Toutes les categories"
                                          onClick={handleCategories}
                                    />
                                    <img src={down} alt="" className="down" />
                                    {blocCategories && (
                                          <div className="search-all-categories">
                                                <span>PRODUITS LAITIERS</span>
                                                <span>
                                                      BOUCHERIE POISSON VOLAILLE
                                                </span>
                                                <span>BRASSERIE</span>
                                                <span>JUS</span>
                                                <span>JESE</span>
                                                <span>HYGIENE ET BEAUTE</span>
                                                <span>VOITURE</span>
                                                <span>ENTRETIEN MAISON</span>
                                                <span>ANIMALERIE</span>
                                                <span>JARDIN ET BRICOLAGE</span>
                                                <span>
                                                      TECHNOLOGIE ET POINTE
                                                </span>
                                          </div>
                                    )}
                              </div>
                              <div className="sous-header-main-right">
                                    <img
                                          src={user}
                                          alt=""
                                          className="user"
                                          onClick={handleConnectToggle}
                                    />
                                    {/*<img src={panier} alt="" className="panier" onClick={handleVisible}/>*/}
                                    <div className="parent-ri-shopping">
                                          <i class="ri-shopping-cart-line"></i>
                                          {panierCounter ? (
                                                <span
                                                      className="panierIncrement"
                                                      onClick={handleVisible}
                                                >
                                                      {panierCounter}
                                                </span>
                                          ) : (
                                                <span
                                                      className="panierIncrement"
                                                      onClick={handleVisible}
                                                >
                                                      0
                                                </span>
                                          )}
                                    </div>
                                    {showConnect ? (
                                          <NavLink to="/login">
                                                <span className="button-on">
                                                      se connecter
                                                </span>
                                          </NavLink>
                                    ) : (
                                          <span className="button-off"></span>
                                    )}
                              </div>
                        </div>
                        <div className="sous-header-footer">
                              <div
                                    className="sous-header-footer-left"
                                    ref={categories}
                              >
                                    <div className="sous-header-footer-categorie">
                                          <img
                                                src={bar}
                                                alt=""
                                                className="bar"
                                          />
                                          <span>categories</span>
                                    </div>
                                    <img src={right} alt="" className="right" />
                              </div>
                        </div>
                  </div>
            </>
      );
};
