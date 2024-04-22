"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/shared/Nav";
// import { AuthProvider } from "@/providers/AuthProvider";
import { buildClient } from "@/utils/build-client";
import { headers } from "next/headers";
import { useAuthContext } from "@/providers/AuthProvider";

const App = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: string;
}) => {
  const { currentUser, setCurrentUser } = useAuthContext();

  useEffect(() => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(user);
    }
  }, [currentUser, user, setCurrentUser]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        {children}
      </main>
    </>
  );
};

export default App;
