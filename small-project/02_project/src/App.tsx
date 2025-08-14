import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import Portfolio from "./pages/Portfolio";
import Guestbook from "./pages/Guestbook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="guestbook" element={<Guestbook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
