import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/items" style={{ marginRight: "10px" }}>Browse</Link>

      {user && (
        <Link to="/items/new" style={{ marginRight: "10px" }}>
          New Item
        </Link>
      )}

      {user?.role === "admin" && (
        <Link to="/admin" style={{ marginRight: "10px" }}>
          Admin
        </Link>
      )}

      {!user ? (
        <>
          <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout ({user.name})
        </button>
      )}
    </nav>
  );
}
