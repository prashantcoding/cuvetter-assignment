import { Layout } from "./component/Layout";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"; // Ensure you're importing from 'react-router-dom'
import Notes from "./pages/Notes";

const App = () => {
  return (
   <Routes >
     <Route path="/" element={<Layout ><Home/></Layout>}></Route>
     <Route path="/notes/:id" element={<Layout><Notes/></Layout>}></Route>
   </Routes>
  );
};

export default App;
