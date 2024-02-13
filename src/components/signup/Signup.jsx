 import { useState } from "react";
import "./signup.css";
import eyes from "../../icons/eyes.svg";
import eyesLock from "../../icons/eyesLock.svg";
import { NavLink, Navigate } from "react-router-dom";
import { PhoneInformation } from "../PhoneInformation";
import {fetchData} from "../helpers/fetchData"
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { snackbar } from "../helpers/snacbar";

export const Signup = () => {
  const [userType, setUserType] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [connect, setConnect] = useState(true);
  const { register, handleSubmit, formState: { errors,isValid }, watch } = useForm();
  const phoneInformationRef = useRef();
  const navigate = useNavigate();
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePassword = () => {
    setPasswordToggle(!passwordToggle);
  };

  const onSubmit = (data) => {
    
    const message1 ="inscription reussie"
    data.phone = phoneInformationRef.current?.value;
    console.log(data);  
    setLoading(true);
    setConnect(false)
    const user = {
      phone:data.phone,
      emailAddress:data.emailAddress,
      username:data.username
    }
    fetchData("https://marketplace-service-7y10.onrender.com/api/auth/register ",data).then((result)=>{
      console.log(result)
     /* Votre compte utilisateur a été créé avec succès, seulement ce dernier doit être validé via l'OTP pour y avoir accès à nos services*/
      
            
             if(result.status === 200){
              localStorage.setItem('phone', JSON.stringify(user));
              return alert("inscription reussie"),navigate("/forgetPassword");
             }
            
            
           }).catch((error) => {
            return console.log(error),
             alert("echec connexion veuillez reessayez");
            
           })
            .finally(() => {
             setLoading(false);
             setConnect(true)
             
            })
    
  };

  return (
    <div className="parent-signup">
      <div className="sous-parent-signup">
        <div className="sous-parent-signup-header">
          <h3>Créer votre Compte</h3>
          <span>VEUILLEZ VOUS INSCRIRE</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-signup">
          <div className="space-signup">
            <input
              type="text"
              placeholder="Prenom(s)"
              {...register("firstName", { required: "Veuillez entrer votre prénom" })}
            />
            {errors.firstName && <span className="error">{errors.firstName.message}</span>}
            
            <input
              type="text"
              placeholder="Nom(s)"
              {...register("lastName", { required: "Veuillez entrer votre nom" })}
            />
            {errors.lastName && <span className="error">{errors.lastName.message}</span>}
            
          </div>
          <div className="space-signup">
            <input
              type="text"
              placeholder="Nom d utilisateur"
              {...register("username", { required: "Veuillez entrer votre nom d'utilisateur" })}
            />
            {errors.username && <span className="error">{errors.username.message}</span>}
            <input
              type="text"
              placeholder="Email"
              {...register("emailAddress", {
                required: "Veuillez entrer votre adresse e-mail",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Mauvaise syntaxe d'email",
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          <div className="parent-phone-select">
            <PhoneInformation className="phone"  ref={phoneInformationRef} error={errors.phone}/>
            {/* {errors.phone && <span className="error">Veuillez remplir le téléphone</span>} */}
            <select
              className="user-type-select"
              
              {...register("role", { required: "Veuillez sélectionner votre type d'utilisateur" })}
            >
              <option value="" disabled>
                Vous êtes
              </option>
              <option value="CLIENT">CLIENT</option>
              <option value="livreur">Livreur</option>
              <option value="MERCHAND">MERCHAND</option>
            </select>
            {errors.userType && <span className="error">{errors.userType.message}</span>}
          </div>
          <div className="space-signup">
            <div>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="password"
                className="input"
                {...register("password", {
                  required: "Veuillez entrer votre mot de passe",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,15}$/,
                    message: "miniscule,majuscule,chiffre,caractere special,au moins 8 lettres",
                  },
                })}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
              <img
                src={eyes}
                onClick={togglePasswordVisibility}
                className={passwordVisible ? "" : "hidden"}
                alt=""
              />
              <img
                src={eyesLock}
                onClick={togglePasswordVisibility}
                className={passwordVisible ? "hidden" : ""}
                alt=""
              />
            </div>
            <div>
              <input
                type={passwordToggle ? "text" : "password"}
                placeholder="confirmation password"
                className="input"
                {...register("confirmPassword", {
                  required: "Veuillez confirmer votre mot de passe",
                  validate: (value) =>
                    value === watch("password")  || "Les mots de passe ne correspondent pas",
                })}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
              <img
                src={eyes}
                onClick={togglePassword}
                className={passwordToggle ? "" : "hidden"}
                alt=""
              />
              <img
                src={eyesLock}
                onClick={togglePassword}
                className={passwordToggle ? "hidden" : ""}
                alt=""
              />
            </div>
          </div>
          <div className="information-condition">
            <input type="checkbox" {...register("acceptTerms", { required: "Veuillez accepter les termes et conditions" })} />
            <span>
              En vous inscrivant, vous acceptez nos
              <span className="conditions">Termes et conditions</span>
            </span>
            {errors.acceptTerms && <span className="error">{errors.acceptTerms.message}</span>}
          </div>
          {connect &&
          <button type="submit" className={`button-signup ${isValid ? 'valid-form' : ''}`}>Creer un compte</button>}
          {loading &&
          <button type="submit" className={`button-signup ${isValid ? 'valid-form' : ''}`}>VEUILLEZ PATIENTER ...</button>}
        </form>
        <div className="question-user">
          <span>Vous avez un compte?</span>
          <NavLink to="/login" className="nav-link"> <span>Connexion</span> </NavLink>
        </div>
        <div className="sous-parent-logout-signup">
          <span>Mot de passe oublié?</span>
          <NavLink to="/forgetPassword" className="nav-link">
            <span className="forget-password-signup">Réinitialisez-le</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
