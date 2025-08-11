import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        alert("Signed Out Successfully!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
