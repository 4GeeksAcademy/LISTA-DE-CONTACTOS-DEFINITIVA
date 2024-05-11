import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-primary  navbars">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <p className="navbar-brand mb-0 h1 text-light  "  ><i className="far fa-address-book mx-2" style={{color: "#5BBCFF", fontSize : 24}}></i>Lista de Contactos</p>
            </Link>
            <div className="ml-auto">
                <Link to="/AddContact">
                    <button className="btn" style={{backgroundColor: '#5BBCFF', color: '#fff'}}>Agregar Contacto</button>
                </Link>
            </div>
        </nav>
    );
};
