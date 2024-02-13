//****composant qui traite l entete du main l image babybio */
import "./main-header.css";
import babyBio1 from "../../../images/babyBio1.png";



export const MainHeader = () => {
      return (
            <div className="main-header">
                  <div className="main-header-title-img">
                        <div>
                              <h1>
                                    Jusqu a 50% de reduction sur votre premier
                                    achat
                              </h1>
                              <span>
                                    jusqu au 28/03/2024 profiter 50% de
                                    reduction sur votre premier achat
                              </span>
                              <button>En profiter</button>
                        </div>
                        <img src={babyBio1} alt="" className="babyBio1" />
                  </div>
                  <div className="input-radio">
                        <input type="radio" checked className="input-check" />
                        <input type="radio" />
                  </div>
            </div>
      );
};
