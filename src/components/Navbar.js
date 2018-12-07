import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/">
                        <a className="navbar-brand">Mircea's Blog</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <div className="btn btn-primary">Posts</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <div className="btn btn-primary">About</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                <div className="btn btn-primary">Contact</div>
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