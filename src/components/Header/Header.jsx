import React from "react";
import './Header.css';



function Header({valor, onchange}) {
    
    return (
        <header className="header">
            <div className="container_menu">
                <img className="logo" src="kimaster.png" alt="logo" />
                <div className="input_search">
                    <div className="search">
                        <input 
                        type="search" 
                        id="default-search" 
                        className="busca" 
                        placeholder="Pesquisar Produtos..." 
                        value={valor} 
                        onChange={onchange}
                        />
                        <div className="icon-search">
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                    </div>

                </div>
                <div className="container_button">
                    
                </div>
            </div>
        </header>
        
    );
}

export default Header;