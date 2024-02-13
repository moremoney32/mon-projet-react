import honey from "./../icons/honey.svg";
import panier from "./../icons/panier.svg";
import down from "./../icons/down.svg";
import bag from "./../icons/bag.svg";
import hearth from "./../icons/hearth.svg";
import people from "./../icons/people.svg";
import { NavLink } from "react-router-dom";
export const LeftCategories = ({sousBlocProfile})=>{
    return(
        <div style={sousBlocProfile}>
                <div className="sous-bloc-profile1-mon-compte">
                    <h3>MON COMPTE</h3>
                    <div>
                        <img src={bag} alt="" />
                        <span><NavLink to="/profilcommande"  className={
                           window.location.pathname === "/profilcommande"
                                 ? "red"
                                 : "nav-link-categories"
                     }>Commandes</NavLink></span>
                    </div>
                    {/*<div>
                    <img src={hearth} alt="" />
                        <span><NavLink className="nav-link-categories">Favoris</NavLink></span>
                    </div>*/}
                    <div>
                    <img src={bag} alt="" />
                        <span><NavLink  to="/profilfournisseur" className="nav-link-categories">Reponses des fournisseurs</NavLink></span>
                    </div>
                    {/*<div>
                    <img src={panier} alt="" />
                        <span><NavLink className="nav-link-categories">Avis</NavLink></span>
                </div>*/}
                    <div>
                    <img src={panier} alt="" />
                        <span><NavLink to = "/profilnotification" className="nav-link-categories">Notifications</NavLink></span>
                    </div>
                </div>
                <div className="sous-bloc-profile1-mes-parametres">
                {/*<h3>PARAMETRES</h3>*/}
                    <div>
                    <img src={people} alt="" />
                        <span><NavLink to ="/profilparticulier" className={
                           window.location.pathname === "/profilparticulier"
                                 ? "red"
                                 : "nav-link-categories"
                     } >Profil</NavLink></span>
                    </div>
                    <div>
                    <img src={down} alt="" />
                        <span><NavLink className="nav-link-categories">Adresse</NavLink></span>
                    </div>
                    <div>
                    <img src={honey} alt="" />
                        <span><NavLink className="nav-link-categories">Moyen de paiement</NavLink></span>
                    </div>
                </div>
            </div>
    )
}