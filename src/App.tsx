import * as React from "react";
import { AuthProvider } from "./Context/AuthContext";
import { Navigation } from "./routes/Navigation";

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
