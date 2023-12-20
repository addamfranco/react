import React from "react";
import CartWidget from '../CartWidget';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_bran">
                    <a className="nav_link" href="#">marca</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Inicio</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">categoria</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Blog<CartWidget/></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

// export default NavBar;

// export default function NavBar() {
//   return (
//     <div>NavBar</div>
//   )
// }
