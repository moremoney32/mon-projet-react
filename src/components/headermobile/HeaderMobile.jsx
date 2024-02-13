import { useState } from "react";
import "./headermobile.css";
import downMobile from "../../icons/downMobile.svg"
import search from "../../icons/search.svg"
import down from "../../icons/down.svg"
import bar from "../../icons/bar.svg"

import { NavLink } from 'react-router-dom'
export const HeaderMobile = ()=>{
    const [visible,setVisible]= useState(false)
    const [optionLangue,setOptionLangue]= useState("")
    const [clicked, setClicked] = useState(false)
   const handleLanguage =()=>{
    setVisible(!visible)
   }
  const handleClick = (value)=>{
    setOptionLangue(value)
    setVisible(!visible)
   }
   function leftCategories(){
    const leftCategories = document.querySelector(".leftCategories")
    const homeMain = document.querySelector(".main-article-section1-responsive")
    if(clicked){
        leftCategories.style.display = "block"
    leftCategories.style.zIndex = 2
    homeMain.style.zIndex = 1
    homeMain.style.opacity = 0.5
    homeMain.style.background ="rgba(128, 128, 128, 0.5)"
        
    }else{
        leftCategories.style.display = "none"
        homeMain.style.zIndex = 1
        homeMain.style.opacity = 1
        homeMain.style.background ="#F6F9FC"

    }
    setClicked(!clicked)
    
   }
 
    return (
        
        <div className="parent-bloc-header-mobile">
            <div className="parent-bloc-header-header">
                <span className="logo-bazaars">bazaars</span>
                <div className="parent-bloc-header-search">
                    <span>{optionLangue || "Fr"}</span>
                    <img src={downMobile} alt="" onClick={handleLanguage}/>
                    {visible && (
                         <div className="language">
                         <span onClick={()=> handleClick("Fr")}>Fr</span>
                         <span onClick={()=> handleClick("En")}>En</span>
                     </div>
                    

                    )}
                   
                </div>
            </div>
            <div className="parent-bloc-header-search-allCategories">
                <div className="parent-bloc-header-search-allCategories-left">
                                <input
                                    type="text"
                                    className="parent-bloc-header-search-left"
                                    placeholder="Que rechercher vous"
                                />
                              <img src={search} alt="" className="search-input-left"/>
                                    <input
                                        type="text"
                                        className="parent-bloc-header-search-right"
                                        placeholder="Toutes les categories"
                                    />
                              <img src={down} alt="" className="down-input-right"/>

                </div>
                <div className="parent-bloc-header-search-allCategories-right">
                    <img src={bar} alt="" className="bar" onClick={leftCategories}/>
                </div>

            </div>
        </div>
         
   
    )
}