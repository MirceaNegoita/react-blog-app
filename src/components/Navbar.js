import React, {Component} from 'react';

class Navbar extends Component{

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="index.html">Mircea's Blog</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                <div class="btn btn-primary">Posts</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                <div class="btn btn-primary">About</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">
                                <div class="btn btn-primary">Contact</div>
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