import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Home = () =>{
const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();


    const Login = (data) => {
        if(data.Username === "test@yopmail.com" && data.password === "123456"){
            let token = '12sdf25dfsdSDf54fd';
            localStorage.setItem("logintoken",JSON.stringify(token));
            toast.success('Login Successfully',
                {position: toast.POSITION.TOP_LEFT,className: 'success',})
                window.location.href='/articlelist'
        }else{
                toast.error('Invalid Username or Password',
                {position: toast.POSITION.TOP_LEFT})
              }
    };

    return(
        <div className="login-page">
            <h1>Login</h1>
            <div className="login-form-section">
                <div className="login-form">
                    <div className="login-form-inner">
                        <form onSubmit={handleSubmit(Login)}>
                            <div className="form-field">
                                <input type="text"
                                 placeholder="Username"
                                 {...register("Username", {
                                    required: true,
                                  })}
                                 />
                                 {errors?.Username?.type === "required" && <p className="error">Username required *</p>}
                            </div>
                            <div className="form-field">
                                <input type="password"
                                 placeholder="password"
                                 {...register("password", {
                                    required: true,
                                  })}
                                 />
                                 {errors?.password?.type === "required" && <p className="error">Password required *</p>}
                            </div>
                            <div className="form-field">
                                <button className="login-button" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;