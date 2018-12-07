import React, {Component} from 'react';

class Posts extends Component {
    render(){
        return(
            <div>
                
                <div class="container" id="intro">
                    <h1>Mircea's Blog</h1>
                    <h2>Awesome Ideas</h2>
                </div>

                <div class="container content">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="jumbotron">
                                <h1 class="display-4">A blog post</h1>    
                                <hr class="my-4"/>
                                <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat deleniti adipisci mollitia dolores ratione, eum esse eveniet cumque vitae, explicabo omnis, quo debitis maiores? Iste ratione tempore exercitationem accusamus harum.</p>
                                <a class="btn btn-primary btn-lg" href="post.html" role="button">Read more</a>
                            </div>
                            <div class="jumbotron">
                                <h1 class="display-4">Another blog post</h1>
                                <hr class="my-4"/>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est corporis nostrum autem odio sed nesciunt suscipit aperiam debitis quidem aliquam recusandae nobis quaerat, eius placeat cupiditate obcaecati non ullam?</p>
                                <a class="btn btn-primary btn-lg" href="post.html" role="button">Read more</a>
                            </div>
                            <div class="jumbotron">
                                <h1 class="display-4">Yet another one!</h1>
                                <hr class="my-4"/>
                                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure ipsa possimus blanditiis provident, dolorum quisquam quos iste quam vitae aliquam nostrum, laboriosam sed modi aliquid adipisci corporis expedita debitis.</p>
                                <a class="btn btn-primary btn-lg" href="post.html" role="button">Read more</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="http://via.placeholder.com/268x180" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="post.html" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                            <br/>
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="http://via.placeholder.com/268x180" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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