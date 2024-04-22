"use client";

import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
  value: string;
}

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [currentUser, setCurrentUser] = useState("");

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
