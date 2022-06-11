import { AuthState } from "../Interfaces/LoginInterfaces";
import { AuthAction } from "../Types/AuthTypes";

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "signIn":
      return { ...state, isLoggedIn: true, userName: "no-username-yet" };
    case "getEmployees":
      return { ...state, employees: action.payload, activeEmployees: true };
    case "setEmployee":
      return { ...state, newEmployee: false };
    case "createNewEmployee":
      return { ...state, newEmployee: true };
    case "setImages":
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
