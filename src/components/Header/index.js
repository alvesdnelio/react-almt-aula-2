import React from 'react';
import { Link } from 'react-router-dom';

function Header()
{
    return (
        <div className="App-Header-col-menu">
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/contato"> Contato </Link>
                </li>
                <li>
                    <Link to="/produtos"> Produtos </Link>
                </li>
                <li>
                    <Link to="/github"> Github </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;