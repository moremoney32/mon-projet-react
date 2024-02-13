
import { NavLink } from "react-router-dom";
import "./login.css";
import eyes from "../../icons/eyes.svg";
import eyesLock from "../../icons/eyesLock.svg";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { PhoneInformation } from "../PhoneInformation";



export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    // Vous pouvez traiter les données ici
    console.log(data);
  };

  return (
    <div className="parent-login">
      <div className="sous-parent-login">
        <div className="sous-parent-login-header">
          <h3>Pategou Ecommerce</h3>
          <span>Connectez-vous avec votre email et votre mot de passe.</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          
            <PhoneInformation />
         

          <div className="space">
            <label htmlFor="password">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              {...register("password", {
                required: "Veuillez remplir le champ mot de passe",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,15}$/,
                  message: "Mauvaise syntaxe de mot de passe",
                },
              })}
            />
            <div className="password-hint">
              {/* Affiche le message d'aide avant que l'utilisateur commence à remplir */}
              {errors.password ? (
                <span className="error">{errors.password.message}</span>
              ) : (
                <span>
                  Le mot de passe doit contenir au moins une minuscule, une
                  majuscule, un caractère spécial et un chiffre, et doit avoir une
                  longueur minimale de 8 caractères.
                </span>
              )}
            </div>
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
          <button type="submit"><NavLink to ="/profilhome" className="nav-panier">Connexion</NavLink></button>
        </form>

        <div className="sous-parent-login-signup">
          <span>Vous n'avez pas de compte ?</span>
          <NavLink to="/signup" className="nav-link">
            <span className="signup">Inscrivez-vous</span>
          </NavLink>
        </div>
        <div className="sous-parent-logout">
          <span>Mot de passe oublié?</span>
          <NavLink to="/forgetPassword" className="nav-link">
            <span className="forget-password">Réinitialisez-le</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

