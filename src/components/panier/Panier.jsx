
import "./panier.css";
export const Panier = ()=>{
    return(
        <div className="bloc-panier">
            <div className="sous-panier">
                <div className="sous-panier-header">
                    <h4>Recapitulatif</h4>
                    <span>estimation</span>
                </div>
                <div className="sous-panier-main">
                    <span className="sous-panier-main-span1">Sous-total:</span>
                    <span className="sous-panier-main-span">0.00XAF</span>
                </div>
                <div className="sous-panier-main">
                <span className="sous-panier-main-span1">Expedition:</span>
                    <span className="sous-panier-main-span">-</span>
                </div>
                <div className="sous-panier-main">
                <span className="sous-panier-main-span1">Taxes:</span>
                    <span className="sous-panier-main-span">0XAF</span>
                </div>
                <div className="sous-panier-main">
                <span className="sous-panier-main-span1">Reduction:</span>
                    <span className="sous-panier-main-span">-</span>
                </div>
                <div className="sous-panier-footer">
                <span></span>
                    <span>0.00XAF</span>
                </div>

            </div>
            <button className="panier-achats">Continuer Les Achats</button>
            <button className="panier-fourniseurs">Rechercher Les Fournisseurs</button>
            
        

        </div>
    )
}