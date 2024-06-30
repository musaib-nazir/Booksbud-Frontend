import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./sharedcomponents/Navbar";
import Home from "./maincomponent/Home";
import Footer from "./sharedcomponents/Footer";
import NoPageFound from "./sharedcomponents/NoPageFound";
import Register from "./Usercomponents/Register";
import Items from "./maincomponent/Items/Items";
import Adminpanel from "./admincomponents/Adminpanel";
import Adminproducts from "./admincomponents/Adminproducts";
import Adminusers from "./admincomponents/Adminusers";
import Dashboard from "./admincomponents/Dashboard";
import Graph from "./sharedcomponents/Graph";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="*" element={<NoPageFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/buy/books" element={<Items />} />
          <Route path="/register" element={<Register />} />
          <Route path="/graph" element={<Graph />}/>

          <Route path="/admin" element={<Adminpanel />}>

 

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Adminproducts />} />
            <Route path="users" element={<Adminusers />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
