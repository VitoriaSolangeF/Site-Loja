import React from "react";

const Navbar = () => {
    return (
        <div className='sidenav active'>
            <img src="./iconekimaster.png" alt="logo" className="logo" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/">Cabo</a>
                </li>

                <li>
                    <a href="/">Fone</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;