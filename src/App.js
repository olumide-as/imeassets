import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BackTop } from "antd";
import {
  Home,
  NoPage,
  Contact,
  Career,
  Sustainability,
  Projects,
  Sectors,
  Information,
  Belief,
  Team,
  Governance,
  Csr,
  Articles,
  News,
  Post1,
  Post2,
  Post3,
  Post6,
  Post5,
  Post4,
  Article1
} from "./Pages";
import { Navbar, Footer } from "./Components";




const App = () => {

  return (
    <div className="font-manrope">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/information" element={<Information />} />
          <Route path="/belief" element={<Belief />} />
          <Route path="/team" element={<Team />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/edo-public-building-maintenance-agency-bill" element={<Post1 />} />
          <Route path="/news/lagos-state-maintenance-cultured-initiative" element={<Post2 />} />
          <Route path="/news/managing-public-facilities-The-Edo-approach" element={<Post3 />} />
          <Route path="/news/2019-world-facility-management-day" element={<Post4 />} />
          <Route path="/news/LASTVEB-graduation-ceremony-2019" element={<Post5 />} />
          <Route path="/news/value-of-facility-management" element={<Post6 />} />
          <Route path="/articles/the-dichotomy-between-physical-and-human-infrastructure" element={<Article1 />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <BackTop />
    </div>
  );
};

export default App;
