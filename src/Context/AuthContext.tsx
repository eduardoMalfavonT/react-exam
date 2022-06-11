import React, { createContext, useReducer } from "react";
import ExamApi from "../Api/ExamApi";

import { AuthContextProps, AuthState } from "../Interfaces/LoginInterfaces";
import {
  ArgEmployeesApi,
  GetResponseEmployees,
} from "../Interfaces/ResponseEmployeesInterface";
import { SetEmployeeInterface } from "../Interfaces/SetEmployeeInterface";

import { authReducer } from "./AuthReeducer";

const data = {
  columns: [
    {
      label: "Id",
      field: "id",
      sort: "asc",
      width: 150,
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 150,
    },
    { label: "Last Name", field: "last_name", sort: "asc", width: 150 },
  ],
  rows: [],
};

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  activeEmployees: false,
  newEmployee: false,
  images: [],
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: "signIn" });
  };

  const getEmployees = async (howName: string) => {
    const employees = await ExamApi.get<GetResponseEmployees>(`/:${howName}`);
    data.rows = employees.data.data.employees as [];
    dispatch({ type: "getEmployees", payload: data });
  };

  const setEmployee = async (argEmployeesApi: ArgEmployeesApi) => {
    const employeeResponse = await ExamApi.post<SetEmployeeInterface>(
      "/:eduardo_malfavon",
      argEmployeesApi
    );
    if (employeeResponse.data.success) {
      getEmployees("eduardo_malfavon");
      setTimeout(() => {
        dispatch({ type: "setEmployee" });
      }, 1000);
    }
  };

  const createNewEmployee = () => {
    dispatch({ type: "createNewEmployee" });
  };

  const uploadImage = (images: any) => {
    dispatch({ type: "setImages", payload: images });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        getEmployees,
        setEmployee,
        createNewEmployee,
        uploadImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
