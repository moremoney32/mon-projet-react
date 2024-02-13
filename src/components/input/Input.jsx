import React from 'react'
import "./input.css"
import bar from "../../icons/bar.svg"

export const Input = ({close,title,closeGetPanier}) => {

  function stockRecettes(){
    
   
    let input = document.querySelector(".quantity")
    let inputPanier = document.querySelector(".input-panier")
    let objectRecettesPanier = JSON.parse(localStorage.getItem("objectPlats"))
    console.log(objectRecettesPanier)
   
    let arrayRecettesPanier = JSON.parse(localStorage.getItem("produitRecette"))
    console.log(arrayRecettesPanier)
    let TotalQuantityPanier = JSON.parse(localStorage.getItem("quantityPanier"))
   
    
    if(input.value> 0){
      let objectRecettesQuantity =  Object.assign({},objectRecettesPanier , {quantity:parseInt(`${input.value}`)}); 
      console.log(objectRecettesQuantity)
      if(arrayRecettesPanier === null){
        arrayRecettesPanier = []
        TotalQuantityPanier = parseInt(input.value)
        arrayRecettesPanier.push(objectRecettesQuantity)
        console.log(arrayRecettesPanier)
        console.log(TotalQuantityPanier)
        localStorage.setItem("produitRecette", JSON.stringify(arrayRecettesPanier))
        localStorage.setItem("quantityPanier", JSON.stringify(TotalQuantityPanier))
        return arrayRecettesPanier = JSON.parse(localStorage.getItem("produitRecette")),alert("plats envoye au panier"),closeGetPanier(), TotalQuantityPanier = JSON.parse(localStorage.getItem("quantity"))
      }
      
      else if(arrayRecettesPanier !== null){
        
        for(let i =0 ; i<arrayRecettesPanier.length ;i++){
          if(arrayRecettesPanier[i].id === objectRecettesQuantity.id){
      
            console.log("true")

            arrayRecettesPanier[i].quantity += parseInt(input.value)
            TotalQuantityPanier += parseInt(input.value)
            localStorage.setItem("produitRecette", JSON.stringify(arrayRecettesPanier))
            localStorage.setItem("quantityPanier", JSON.stringify(TotalQuantityPanier))
      
            return arrayRecettesPanier = JSON.parse(localStorage.getItem("produitRecette")),alert("il ya deja ce produit dans le panier vous venez dajouter sa quantite"),closeGetPanier(),TotalQuantityPanier = JSON.parse(localStorage.getItem("quantity"))
          }
        }
        for(let i =0 ; i<arrayRecettesPanier.length ;i++){
         
          if(arrayRecettesPanier[i].id !== objectRecettesQuantity.id ){
             arrayRecettesPanier.push(objectRecettesQuantity)
             TotalQuantityPanier += parseInt(input.value)
             console.log( arrayRecettesPanier)
             localStorage.setItem("produitRecette", JSON.stringify(arrayRecettesPanier))
             localStorage.setItem("quantityPanier", JSON.stringify(TotalQuantityPanier))

             return arrayRecettesPanier = JSON.parse(localStorage.getItem("produitRecette")),alert("produit envoye au panier"),closeGetPanier(),TotalQuantityPanier = JSON.parse(localStorage.getItem("quantity"))


          }
      
 }
      }

    }
    else{


      return alert("choisir une quantite positive")
   }
    
  }
 
 
  return (
  
    
    <div className='input-panier' id='input'>
        <div className='label-input'>
            <label htmlFor='itemQuantity'>Nombre de plats:</label>
            <span className='title'>{title}</span>
            <img src={bar} alt="" onClick={close}/>
        
            <input type="number" name="itemQuantity" min="0" max="100" className='quantity'/>  
               
        </div>
        <button className='button' onClick={stockRecettes}>Ajouter</button>    
    </div>
    
  )
}

export default Input