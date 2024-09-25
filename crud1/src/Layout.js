import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return (
        <>
            <h3>Menu</h3>
            <nav>
                <li><Link to="/alunos">Alunos</Link></li>
            </nav>
            <Outlet/>
        </>
    );
};

export default Layout;