import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./views/layout";
import appContext from "./context/appContext";
import Dramatic from "./views/dramatic";
import Home from "./views/home";
import Dramatic2 from "./views/dramatic2";
import Dramatic3 from "./views/dramatic3";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dramatic" element={<Dramatic />} />
          <Route path="/dramatic2" element={<Dramatic2 />} />
          <Route path="/dramatic3" element={<Dramatic3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default appContext(App);