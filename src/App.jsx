import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </Suspense>
  );
};

export default App;
