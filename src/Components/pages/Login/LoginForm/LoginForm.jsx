import React from "react";
import cl from "./LoginForm.module.css";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {

  return (
    <form className={cl.form} onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={cl.login__input}
          name="Login"
          component="input"
          type="text"
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          className={cl.login__input}
          name="Password"
          component="input"
          type="text"
          placeholder={"Password"}
        />
      </div>
      <div className={cl.checkbox__wrapper}>
        <label htmlFor="rememberMe">Remember me</label>
        <Field
          component="input"
          name="rememberMe"
          type="checkbox"
        />
      </div>
      <div>
        <button className={cl.login__btn}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm