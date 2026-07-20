import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Clients from "@/pages/Clients";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Admin from "@/pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
