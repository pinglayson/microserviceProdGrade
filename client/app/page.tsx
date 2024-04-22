"use client";

import { useAuthContext } from "@/providers/AuthProvider";

const Home = () => {
  const { currentUser } = useAuthContext();

  return (
    <>
      {currentUser ? (
        <h1>You are signed IN</h1>
      ) : (
        <h1>You are NOT signed in</h1>
      )}
    </>
  );
};

export default Home;
