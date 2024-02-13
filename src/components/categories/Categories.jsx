import "./categories.css";
export const Categories =  () => {
    return (
        <div className="bloc-categories">
            <h1>Categories Recommandees</h1>
            <div className="sous-bloc-categories">
                <div className="sous-bloc-categories-child">
                    <span>Belt</span>
                    <span>Hat</span>
                    <span>Watches</span>
                </div>
                <div className="sous-bloc-categories-child">
                    <span>Sunglasses</span>
                    <span>Sneakers</span>
                    <span>Sandals</span>
                </div>
                <div className="sous-bloc-categories-child">
                    <span>Formal</span>
                    <span>Casual</span>
                </div>

            </div>
        </div>
    )
};