import bar from "./../icons/bar.svg";
import bag from "./../icons/bag.svg";
export const HeaderCommande = ({handleCategories,title}) => {
      return (
            <div className="sous-bloc-profile2-bloc-header">
                  <div className="profile-commande-header">
                        <img src={bag} alt="" />
                        <h3>{title}</h3>
                  </div>
                  <img src={bar} alt="" className="bar-commande" onClick={handleCategories}/>
            </div>
      );
};
