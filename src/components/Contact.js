import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                
                <div className="container" id="intro">
                    <h1>Mircea's Blog</h1>
                    <h2>Awesome Ideas</h2>
                </div>

                <div className="container content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="jumbotron">
                                <h1 className="display-4">Contact me</h1>
                                <hr className="my-4"/>
                                <form>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control" placeholder="name@example.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Your message</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-4">
                                <div className="card" style="width: 18rem;">
                                    <img className="card-img-top" src="http://via.placeholder.com/268x180" alt="Card image cap"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="post.html" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <br></br>
                                <div className="card" style="width: 18rem;">
                                    <img className="card-img-top" src="http://via.placeholder.com/268x180" alt="Card image cap"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;