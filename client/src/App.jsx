import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Browse = lazy(() => import("./pages/Browse"));
const NewItem = lazy(() => import("./pages/NewItem"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Admin = lazy(() => import("./pages/Admin"));

function Private({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function AdminOnly({ children }) {
  const { user } = useAuth();
  return user?.role === "admin" ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Browse />} />
            <Route
              path="/items/new"
              element={
                <Private>
                  <NewItem />
                </Private>
              }
            />
            <Route path="/items/:id" element={<ItemDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <AdminOnly>
                  <Admin />
                </AdminOnly>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}
