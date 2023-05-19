import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./views/layout";
import appContext from "./context/appContext";
import Dramatic from "./views/dramatic";
import Home from "./views/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dramatic" element={<Dramatic />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default appContext(App);