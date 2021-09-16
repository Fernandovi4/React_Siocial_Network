import React from "react";
import cl from './Login.module.css'
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = () => {

  const onSubmit = (loginData) => {
    console.log(loginData)
  }



  return (
    <div className={cl.login__wrapper}>
      <h1 className={cl.form__title} >Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
}

export default Login