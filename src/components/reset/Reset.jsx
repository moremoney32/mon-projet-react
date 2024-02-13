import { useState } from "react";
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import "./reset.css";
import "../signup/signup.css";
import { fetchData } from "../helpers/fetchData";
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhoneInformation } from "../PhoneInformation";

export const Reset = ()=>{
    const [loading, setLoading] = useState(false);
    const [connect, setConnect] = useState(true);
   const [valid, setValid] = useState(true);
   const [check, setCheck] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const phoneInformationRef = useRef();
    const onSubmit = (data)=>{
        console.log(data); 
        const phone = JSON.parse(localStorage.getItem('phone'))
        data.phone = phone.phone
        console.log(data)
        setLoading(true);
        setConnect(false)
        fetchData("https://marketplace-service-7y10.onrender.com/api/auth/validateOtp?otpCode=12&phone=223",data).then((result)=>{
            console.log(result)
           /* Votre compte utilisateur a été créé avec succès, seulement ce dernier doit être validé via l'OTP pour y avoir accès à nos services*/
            
                  
                  /* if(result.status === 200){
                    localStorage.setItem('phone', JSON.stringify(data.phone));
                    return alert("inscription reussie"),navigate("/forgetPassword");
                   }*/
                  
                  
                 }).catch((error) => {
                  return console.log(error),
                   alert("echec connexion veuillez reessayez");
                  
                 })
                  .finally(() => {
                   setLoading(false);
                   setConnect(true)
                   
                  })
    }
    const handleSubmitPhone = ()=>{
        
        const phone = phoneInformationRef.current?.value;
        console.log(phone)
        fetchData("https://marketplace-service-7y10.onrender.com/api/auth/generateOtp?phone=23",phone).then((result)=>{
            console.log(result)
           /* Votre compte utilisateur a été créé avec succès, seulement ce dernier doit être validé via l'OTP pour y avoir accès à nos services*/
            
                  
                  /* if(result.status === 200){
                    localStorage.setItem('phone', JSON.stringify(data.phone));
                    return alert("inscription reussie"),navigate("/forgetPassword");
                   }*/
                  
                  
                 }).catch((error) => {
                  return console.log(error),
                   alert("echec connexion veuillez reessayez");
                  
                 })
                  .finally(() => {
                   setLoading(false);
                   setConnect(true)
                   
                  })
    }

    return(<div>
        <Header/>
        <div className="parent-reset">
            <div className="sous-parent-reset">
                <div className="sous-parent-reset-header">
                    <h3>VERIFICATION PROFIL</h3>
                    <span className="sous-parent-reset-header-span">veuillez mettre le code recu dans votre adresse email.</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="367806"
                {...register("otpCode", { required: "Veuillez entrer le code" })}/>
                {errors.otpCode && <span className="error">{errors.otpCode.message}</span>}
                
                {connect &&<button>Envoyer</button>}
                {loading &&<button>Veuillez patienter ...</button>}
                </form>

            </div>
            <div className="sous-parent-reset">
                <div className="sous-parent-reset-header">
                    <span className="sous-parent-reset-header-span">si vous n avez pas recu de code entrer vos telephone et valider</span>
                </div>
                <PhoneInformation ref={phoneInformationRef}/>
                {valid &&<button onClick={handleSubmitPhone}>Valider</button>}
                {check &&<button>Veuillez patienter ...</button>}
               

            </div>
        </div> 
        <Footer/>
    </div>)
}