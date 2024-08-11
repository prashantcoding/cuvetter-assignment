import { Layout } from "./component/Layout";
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"; // Ensure you're importing from 'react-router-dom'
import Notes from "./pages/Notes";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition= {Bounce}
/>
   <Routes >
     <Route path="/" element={<Layout ><Home/></Layout>}></Route>
     <Route path="/notes/:groupId" element={<Layout><Notes/></Layout>}></Route>
   </Routes></>
  );
};

export default App;
