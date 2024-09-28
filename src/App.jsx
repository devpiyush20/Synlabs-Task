import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";

export default function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userdetail/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
