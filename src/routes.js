import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
