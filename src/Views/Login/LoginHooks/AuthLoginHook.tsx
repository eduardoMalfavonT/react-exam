import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../../../Hooks/useForm";
import { LoginInterfaces } from "../../../Interfaces/LoginInterfaces";

import loginUsersTEST from "../../../data/loginUsersTest.json";
import loginUsersProduction from "../../../data/loginUsersProduction.json";

export const AuthLoginHook = () => {
  const { authState, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/employees");
    }
  }, [authState.isLoggedIn, navigate]);

  const { form, onChange } = useForm<LoginInterfaces>({
    email: "",
    password: "",
  });

  const login = (e: React.MouseEvent) => {
    e.preventDefault();
    const users =
      process.env.NODE_ENV !== "production"
        ? loginUsersTEST
        : loginUsersProduction;

    users.map((user: LoginInterfaces) => {
      if (user.email === form.email && user.password === form.password) {
        signIn();
      } else {
        alert("Please enter a valid email and password");
      }
    });
  };
    
    return { onChange, login, form };
};
