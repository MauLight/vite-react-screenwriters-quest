import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./views/layout";
import appContext from "./context/appContext";
import Dramatic from "./views/dramatic";
import Home from "./views/home";
import Dramatic2 from "./views/dramatic2";
import Dramatic3 from "./views/dramatic3";
import Dramatic4 from "./views/dramatic4";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dramatic" element={<Dramatic />} />
          <Route path="/dramatic2" element={<Dramatic2 />} />
          <Route path="/dramatic3" element={<Dramatic3 />} />
          <Route path="/dramatic4" element={<Dramatic4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default appContext(App);