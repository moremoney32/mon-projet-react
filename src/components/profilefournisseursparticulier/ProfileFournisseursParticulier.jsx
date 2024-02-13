import { LeftCategories } from "../LeftCategories";
import "../profileparticulier/profileparticulier.css";
import "../profilecommande/profilecommande.css";
import { HeaderCommande } from "../HeaderCommande";
import { MainCommandeParticulier } from "../MainCommandeParticulier";
import { useState } from "react";
export const ProfileFournisseursParticulier = ()=>{
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
  
      const sousBlocProfile = {
            width: "20%",
            background: "white",
            paddingLeft: "20px",
            paddingtop: "15px",
            paddingBottom: "30px",
            paddingRight: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            borderRadius: "15px",
      };
    return(
        <>
        
        <div className="bloc-profile">
                  <LeftCategories sousBlocProfile={sousBlocProfile} />

                  <div className="sous-bloc-profile2">
                        <HeaderCommande title="Reponses des fournisseurs"/>
                        <MainCommandeParticulier title1="Contacter" title2="Fournisseur" title3="Horaires" title4="% articles" title5="Prix sans livraison" title6="Prix avec livraison" title7="situe a"/>
                  </div>
            </div>
             <div  className={`sous-bloc-profile2-commande ${background ? "black-mobile-commande" : ""}`} onClick={handleClickOutside}>
                  <HeaderCommande handleCategories={handleCategories} title="Reponses des fournisseurs"/>
                  <MainCommandeParticulier title1="Contacter" title2="Fournisseur" title3="Horaires" title4="% articles" title5="Prix sans livraison" title6="Prix avec livraison" title7="situe a"/>
            </div>
            {blocCategories && (
                    <LeftCategories sousBlocProfile={sousBlocProfileMobile}/>
            )}
        </>
    )
}