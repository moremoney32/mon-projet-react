import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { MainHeader } from "../components/main/mainheader/MainHeader"
import { MainSection } from "../components/main/mainsection1/MainSection1"

export const Home = ()=>{
    const mainArticle = {
    "background":"#F6F9FC",
    "paddingLeft":"150px",
    "paddingRight": "150px",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "display": "flex",
    "flex-direction": "column",
    "gap": "10px"
    // Media queries for smaller screens:
  
    }
    return (
        <>
        {/*<Header/>*/}
        {/*<MainHeader />*/}
        <MainSection mainArticle={mainArticle} h2="Articles Tendances" h3="Articles en Promotions" h4="Top Categories" h5="Articles préférées"/>
        <Footer/>
        </>
    )
}
/*import { useEffect, useState } from 'react';

export const Home = () => {
  const [hasCookies, setHasCookies] = useState(false);

  useEffect(() => {
    // Vérifier la présence de cookies
    const cookies = document.cookie;
    console.log(cookies)
    if (cookies.length > 0) {
      setHasCookies(true);
    }
  }, []);

  return (
    <>
      <Header />
      {hasCookies ? (
        <>
          <MainHeader />
          <MainSection />
        </>
      ) : null}
      <Footer />
    </>
  );
};*/