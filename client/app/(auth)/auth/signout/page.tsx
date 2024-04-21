"use client";
import { useEffect } from "react";

import React from "react";
import { useRouter } from "next/navigation";

const Signout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      const response = await fetch("/api/users/signout", { method: "POST" });
      router.push("/");
    };

    logout();
  });

  async function logout() {}

  return <div>Signout</div>;
};

export default Signout;
