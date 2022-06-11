import { ArgEmployeesApi } from "./ResponseEmployeesInterface";

export interface AuthState {
  isLoggedIn: boolean;
  activeEmployees?: boolean;
  userName?: string;
  employees?: any;
  newEmployee?: boolean;
  images: [];
}

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  getEmployees: (howName: string) => void;
  setEmployee: (argEmployeeApi: ArgEmployeesApi) => void;
  createNewEmployee: () => void;
  uploadImage: (image: any) => void;
}

export interface LoginInterfaces {
  email: string;
  password: string;
}
