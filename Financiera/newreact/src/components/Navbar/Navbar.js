import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoStyles = {
    width: 'auto',
    height: 'auto'
  };

  const [isPrestamosOpen, setIsPrestamosOpen] = useState(false);
  const [isClientesOpen, setIsClientesOpen] = useState(false);

  const handlePrestamosToggle = () => {
    setIsPrestamosOpen(!isPrestamosOpen);
  };

  const handleClientesToggle = () => {
    setIsClientesOpen(!isClientesOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".nav-item.dropdown")) {
        setIsPrestamosOpen(false);
        setIsClientesOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#F6E9CA" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./Logo.png" alt="Logo" style={logoStyles} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isPrestamosOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handlePrestamosToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isPrestamosOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/empleadoList">
                Lista Empleado
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/renobarFrom">
                lol
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/referenciaList">
                Referencia
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" onClick={handlePrestamosToggle}>
                Prestamos
              </div>
              <ul className={`dropdown-menu ${isPrestamosOpen ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" to="/empleadoForm">Renovar</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/prestamoList">Ver Prestamos</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/prestamoForm">Situacion Prestamos</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" onClick={handleClientesToggle}>
                Clientes
              </div>
              <ul className={`dropdown-menu ${isClientesOpen ? "show" : ""}`}>
                <li>
                  <Link className="dropdown-item" to="/">Lista Clientes</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/clienteForm">Registrar Cliente</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












// import { Link } from "react-router-dom";

// const Navbar=()=>{
//   const logoStyles = {
//     width: 'auto',
//     height: 'auto'
//   };

//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary"style={{ backgroundColor: "#F6E9CA" }}>
//      <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//         <img src="./Logo.png" alt="Logo" style={logoStyles} />
//         </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Lista Clientes</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/empleadoList">Lista Empleado</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/prestamoList">Prestamos</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/clienteForm">Registrar Cliente</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/empleadoForm">Registrar Empleado</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/prestamoForm">Situacion Prestamos</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/renobarFrom"></Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     )
// };

// export default Navbar;