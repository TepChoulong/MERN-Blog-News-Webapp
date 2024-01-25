import { Routes, Route } from "react-router-dom";
import "./styles/app.css";

import Layout from "./Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          \
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
