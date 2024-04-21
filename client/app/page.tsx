import { buildClient } from "@/utils/build-client";

const Home = async () => {
  const client = buildClient();
  const { data } = await client.get("/api/users/currentuser");

  return data.currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

export default Home;
