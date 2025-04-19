import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h>Home</h>} />
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
        <Route path="/*" element={<p>Not found</p>} />
      </Routes>
    </>
  );
}

export default App;
