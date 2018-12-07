import React, {Component} from 'react';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html">Mircea's Blog</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <div className="btn btn-primary">Posts</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <div className="btn btn-primary">About</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <div className="btn btn-primary">Contact</div>
                            </a>
                        </li>
                    </ul>
                    
                    </div>
                </nav>
            </div>
        );
    }

}

export default Navbar;