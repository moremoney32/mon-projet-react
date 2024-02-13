import { Login } from "./components/login/Login";
import { Reset } from "./components/reset/Reset";
import { Signup } from "./components/signup/Signup";
import "./index.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOneProduct } from "./pages/PageOneProduct";
import { PagePanier } from "./pages/PagePanier";
import { PageCategories } from "./pages/PageCategories";
import { PageProfil } from "./pages/PageProfilParticulier";
import { PageProfilCommandeParticulier } from "./pages/PageProfilCommandeParticulier";
import { PageProfileFournisseursParticulier } from "./pages/PageProfileFournisseursParticulier";
import { PageCart } from "./pages/PageCart";
import { PageDeliverer } from "./pages/PageDeliverer";
import { PageHomeConnect } from "./pages/PageHomeConnect";
import { PageNotifications } from "./pages/PageNotifications";

function App() {
      /*path="/menu/:name"*/
      return (
            <BrowserRouter>
                  <div className="App">
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route
                                    path="/menu/:name"
                                    element={<PageOneProduct />}
                              />
                              <Route path="/login" element={<Login />} />
                              <Route path="/signup" element={<Signup />} />
                              <Route
                                    path="/forgetPassword"
                                    element={<Reset />}
                              />
                           {   /*<Route path="/panier" element={<PagePanier />} />*/}
                              <Route
                                    path="/categories"
                                    element={<PageCategories />}
                              />
                              <Route
                                    path="/profilparticulier"
                                    element={<PageProfil />}
                              />
                              <Route
                                    path="/profilcommande"
                                    element={<PageProfilCommandeParticulier />}
                              />
                              <Route
                                    path="/profilfournisseur"
                                    element={
                                          <PageProfileFournisseursParticulier />
                                    }
                              />
                              <Route
                                    path="/profilcart"
                                    element={<PageCart />}
                              />
                        <Route
                                    path="/profildeliverer"
                                    element={<PageDeliverer />}
                              />
                       
                        <Route
                                    path="/profilhome"
                                    element={<PageHomeConnect />}
                              />
                               <Route
                                    path="/profilnotification"
                                    element={<PageNotifications />}
                              />
                        </Routes>
                  </div>
            </BrowserRouter>
      );
}

export default App;
