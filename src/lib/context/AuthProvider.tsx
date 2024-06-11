/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

type Props = { children: React.ReactNode };

const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
