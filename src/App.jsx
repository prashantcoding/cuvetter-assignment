import React from "react";
import { Layout } from "./component/Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";

const App = () => {
  return <Layout>
      <Notes/>
  </Layout>;
};

export default App;
