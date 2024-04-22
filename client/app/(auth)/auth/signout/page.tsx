"use client";
import { useEffect } from "react";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthProvider";

const Signout = () => {
  const router = useRouter();
  const { currentUser, setCurrentUser } = useAuthContext();

  useEffect(() => {
    logout();
  });

  const logout = async () => {
    const response = await fetch("/api/users/signout", { method: "POST" });
    await setCurrentUser("");
    router.push("/");
  };

  return <div>Signout</div>;
};

export default Signout;
