import React from "react";
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <React.Fragment>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pagina1">Página 1</Link></li>
                <li><Link to="/pagina2">Página 2</Link></li>
                <li><Link to="/pagina3">Página 3</Link></li>
            </nav>
            <Outlet/>
        </React.Fragment>
    )
};

export default Layout;