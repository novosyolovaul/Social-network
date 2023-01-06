import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../Redux/Auth-reducer"
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import s from './Login.module.css';


let LoginForm = (props) => {
    let onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
    } = useForm({
        mode: "onChange",
    });
    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} >
            <input
                className={s.formInput}
                {...register("email", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    },
                })}
                placeholder="Email"
            />
            <div className={s.errorMessage} >
                {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
            </div>

            <input
                className={s.formInput}
                type="password"
                {...register("password", {
                    required: "Поле обязательно к заполнению",
                })}
                placeholder="Password"
            />
            <div className={s.errorMessage} >
                {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
            </div>
            <input className={s.checkbox} {...register("rememberMe", {
                required: false,
            })} type='checkbox' />
            <span className={s.rememberMe} >remember me</span>
            <div className={s.errorMessage} >{props.errorMessage}</div>
            <div>
                <input className={s.button} type="submit" disabled={!isValid} />
            </div>
        </form>
    )
}

let Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/content'} />
    }

    return <div className={s.loginWrapper} >
        <h1 className={s.title} >login</h1>
        <LoginForm loginThunk={props.loginThunk} errorMessage={props.errorMessage} />
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorMessage: state.auth.errorMessage,
})

export default connect(mapStateToProps, { loginThunk })(Login);