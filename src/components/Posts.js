import React, {Component} from 'react';

class Posts extends Component {
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
                                <h1 className="display-4">A blog post</h1>    
                                <hr className="my-4"/>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat deleniti adipisci mollitia dolores ratione, eum esse eveniet cumque vitae, explicabo omnis, quo debitis maiores? Iste ratione tempore exercitationem accusamus harum.</p>
                                <a className="btn btn-primary btn-lg" href="post.html" role="button">Read more</a>
                            </div>
                            <div className="jumbotron">
                                <h1 className="display-4">Another blog post</h1>
                                <hr className="my-4"/>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est corporis nostrum autem odio sed nesciunt suscipit aperiam debitis quidem aliquam recusandae nobis quaerat, eius placeat cupiditate obcaecati non ullam?</p>
                                <a className="btn btn-primary btn-lg" href="post.html" role="button">Read more</a>
                            </div>
                            <div className="jumbotron">
                                <h1 className="display-4">Yet another one!</h1>
                                <hr className="my-4"/>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure ipsa possimus blanditiis provident, dolorum quisquam quos iste quam vitae aliquam nostrum, laboriosam sed modi aliquid adipisci corporis expedita debitis.</p>
                                <a className="btn btn-primary btn-lg" href="post.html" role="button">Read more</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style="width: 18rem;">
                                <img className="card-img-top" src="http://via.placeholder.com/268x180" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="post.html" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <br/>
                            <div className="card" style="width: 18rem;">
                                <img className="card-img-top" src="http://via.placeholder.com/268x180" alt="Card image cap"/>
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
        );
    }
}

export default Posts;