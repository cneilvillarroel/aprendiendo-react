import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="text-white">
                    Tareas 
                                    
                    <span className="badge badge-pill badge-light ml-2">
                    { this.props.cantidadTareas }
                    </span>
                </a>
                <a href="#" className="text-white">
                    Otros 
                </a>
            </nav>
        );
    }
}

export default Navbar;

