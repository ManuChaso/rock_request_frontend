import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/prueba"
          element={
            <ProtectedRoute>
              <p>Protected</p>
            </ProtectedRoute>
          }
        />
        {/*TODO Not found component */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
