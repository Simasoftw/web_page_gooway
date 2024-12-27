import React from "react";

const UserActionsHeader = () => {
  return (
    <div className="user-actions">
      <button onClick={() => (window.location.href = "/login")}>
        Iniciar sesión
      </button>
      <button onClick={() => (window.location.href = "/register")}>
        Registrarse
      </button>
    </div>
  );
};

export default UserActionsHeader;
