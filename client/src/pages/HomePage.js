import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import SearchInput from "../components/Form/SearchInput";

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout title={"PawTales"}>
      <div className="home">
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>

        <SearchInput />
      </div>
    </Layout>
  );
};

export default HomePage;
