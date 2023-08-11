import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route } from  "react-router-dom"
import Home from './Search2/Home';
import App from './Search/App';
import Product from './Search/Product';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/Product/:id' element={<Product/>}></Route>
    </Routes>
  </BrowserRouter>
 <ToastContainer/>
  </>
);
