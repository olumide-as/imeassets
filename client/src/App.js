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
  CreatePost,
  UserSettings,
  Login,
  SignUp,
  Perspective,
} from "./Pages";
import { Navbar, Footer, SinglePost } from "./Components";
import { Context } from "./Pages/Context/Context";
import { useContext } from "react";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);



const App = () => {

  const { user } = useContext(Context);

  return (
    <div className="font-manrope">
      <BrowserRouter>
        <Navbar />
        <Routes>
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
          <Route path="/perspective" element={<Perspective />} />
          <Route path="/createpost"  element={user ? <CreatePost /> : <Login />}          />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/userSettings" element={<UserSettings />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/signUp" element={user ? <Home /> : <SignUp />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <BackTop />
    </div>
  );
};

export default App;
