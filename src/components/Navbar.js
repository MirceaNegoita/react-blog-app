import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Mircea's Blog
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <div className="btn btn-primary btn-lg">Posts</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <div className="btn btn-primary btn-lg">About</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                <div className="btn btn-primary btn-lg">Contact</div>
                            </Link>
                        </li>
                    </ul>
                    
                    </div>
                </nav>
            </div>
        );
    }

}

export default Navbar;