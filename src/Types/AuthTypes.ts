// import { Employee } from "../Interfaces/ResponseEmployeesInterface";

export type AuthAction =
  | { type: "signIn" }
  | { type: "getEmployees"; payload: any }
  | { type: "setEmployee" }
  | { type: "createNewEmployee" }
  | { type: "setImages"; payload: [] };
