import { Routes, Route } from "react-router-dom";
import { Products } from "../pages/Products/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
