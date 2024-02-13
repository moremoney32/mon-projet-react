import "./profileparticuliermobile.css";
import "../profileparticulier/profileparticulier.css";
import bar from "../../icons/bar.svg";
import people from "../../icons/people.svg";
import React, { useState } from "react";
import { LeftCategories } from "../LeftCategories";
export const ProfileParticulierMobile = ()=>{
    const [blocCategories, setBlocCategories] = useState(false);
    const [background, setBackground] = useState(false);
    const sousBlocProfileMobile ={
        width: "70% ",
        background: "white",
        paddingLeft: "20px",
        paddingTop: "15px",
        paddingBottom: "30px",
        paddingRight: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1000",
        height: "100vh"
     }
    const handleCategories =()=>{
        setBlocCategories(!blocCategories)
        setBackground(!background)

      }
      const handleClickOutside = (event) => {
        // Cacher le bloc des catégories et le filtre lorsque l'utilisateur clique en dehors
        if (blocCategories && !event.target.closest('.categories-mobile')) {
          setBlocCategories(false);
          setBackground(false)
        }
      };
    return(
        <div>
            <div className={`sous-bloc-profile2-mobile ${background ? "black-mobile" : ""}`} onClick={handleClickOutside}>
                <div className="sous-bloc-profile2-1-mobile">
                    <div>
                        <img src={people} alt="" className="profil-img-mobile"/>
                        <h3>Mon profil</h3>
                    </div>
                    <span>Editer Le profil</span>
                    <img src={bar} alt="" className="bar-profile-mobile" onClick={handleCategories}/>
                </div>
                <div className="sous-bloc-profile2-2-mobile">
                    <div className="parent-profil-child-bloc1-mobile">
                        <div>
                            <img src={people} alt="" />
                            <div>
                                <span>kychas kychas</span>
                                <span>+237693332788</span>
                            </div>
                        </div>
                        <span className="particulier">Particulier</span>
                    </div>
                    <div className="parent-profil-child-bloc2-mobile">
                        <div className="profil-child-bloc-mobile">
                            <span className="profil-child-bloc-mobile-span1">16</span>
                            <span className="profil-child-bloc-mobile-span2">Commandes livrees</span>
                        </div>
                        <div className="profil-child-bloc-mobile">
                            <span className="profil-child-bloc-mobile-span1">02</span>
                            <span className="profil-child-bloc-mobile-span2">Paiements en attente</span>
                        </div>
                         <div className="profil-child-bloc-mobile">
                            <span className="profil-child-bloc-mobile-span1">00</span>
                            <span className="profil-child-bloc-mobile-span2">Expeditions en attente</span>
                        </div>
                        <div className="profil-child-bloc-mobile">
                            <span className="profil-child-bloc-mobile-span1">01</span>
                            <span className="profil-child-bloc-mobile-span2">Livraisons en attente</span>
                        </div>
                        
                    </div>

                </div>
                <div className="sous-bloc-profile2-3-mobile">
                    <div className="sous-bloc-profile2-3-detail-mobile">
                        <span>Prénom</span>
                        <span>Nom</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail-mobile">
                        <span>Kychas</span>
                        <span>Kychas</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail-mobile-flex-direction">
                        <span>Email</span>
                        <span>jivec77332@rentaen.com</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail-mobile">
                        <span>telephone</span>
                        <span>Adresse</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail-mobile">
                        <span>+237655290813</span>
                        <span>Cameroon</span>
                    </div>

                </div>
                {blocCategories && (
                    <LeftCategories sousBlocProfile={sousBlocProfileMobile}/>
            )}
           
            </div>
        </div>
    )
}