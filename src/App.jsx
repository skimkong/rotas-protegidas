import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Transacoes from "./pages/Transacoes";
import PrivateRoute from "./componets/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/transacoes"
          element={
            <PrivateRoute>
              <Transacoes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
