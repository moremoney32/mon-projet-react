import "./profileparticulier.css";
import people from "../../icons/people.svg";
import bar from "../../icons/bar.svg";
import { ProfileParticulierMobile } from "../profileParticulierMobile/ProfileParticulierMobile";
import { LeftCategories } from "../LeftCategories";
export const ProfileParticulier = ()=>{
    const sousBlocProfile ={
        width: "20%",
        background:"white",
        paddingLeft: "20px",
        paddingtop: "15px",
        paddingBottom: "30px",
        paddingRight: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        borderRadius: "15px"
    }
    return(
        <>
          <div className="profile-particulier-mobile"> 
         <ProfileParticulierMobile/>
             </div> 
        <div className="bloc-profile">
            <LeftCategories sousBlocProfile={sousBlocProfile}/>
           
            <div className="sous-bloc-profile2">
                <div className="sous-bloc-profile2-1">
                    <div>
                        <img src={people} alt="" className="profil-img"/>
                        <h3>Mon profil</h3>
                    </div>
                    <span>Editer Le profil</span>
                    <img src={bar} alt="" className="bar-profile"/>
                </div>
                <div className="sous-bloc-profile2-2">
                    <div className="parent-profil-child-bloc1">
                        <div>
                            <img src={people} alt="" />
                            <div>
                                <span>kychas kychas</span>
                                <span>+237693332788</span>
                            </div>
                        </div>
                        <span>Particulier</span>
                    </div>
                    <div className="parent-profil-child-bloc2">
                        <div className="profil-child-bloc">
                            <span className="profil-child-bloc-span1">16</span>
                            <span className="profil-child-bloc-span2">Commandes livrees</span>
                        </div>
                        <div className="profil-child-bloc">
                            <span className="profil-child-bloc-span1">02</span>
                            <span className="profil-child-bloc-span2">Paiements en attente</span>
                        </div>
                        <div className="profil-child-bloc">
                            <span className="profil-child-bloc-span1">00</span>
                            <span className="profil-child-bloc-span2">Expeditions en attente</span>
                        </div>
                        <div className="profil-child-bloc">
                            <span className="profil-child-bloc-span1">01</span>
                            <span className="profil-child-bloc-span2">Livraisons en attente</span>
                        </div>
                        
                    </div>

                </div>
                <div className="sous-bloc-profile2-3">
                    <div className="sous-bloc-profile2-3-detail">
                        <span>Prénom</span>
                        <span>Kychas</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail">
                        <span>Nom</span>
                        <span>Kychas</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail">
                        <span>Email</span>
                        <span>jivec77332@rentaen.com</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail">
                        <span>telephone</span>
                        <span>+237655290813</span>
                    </div>
                    <div className="sous-bloc-profile2-3-detail">
                        <span>Adresse</span>
                        <span>Cameroon</span>
                    </div>

                </div>
            </div>
        </div>
        </>

    )
}