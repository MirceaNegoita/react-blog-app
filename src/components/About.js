import React, {Component} from 'react';

class About extends Component{
    render(){
        return(
            <div>
                
                <div className="container" id="intro">
                    <h1>Mircea's Blog</h1>
                    <h2>Awesome Ideas</h2>
                </div>

                <div classNameName="container content">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="jumbotron">
                                <h1 className="display-4">About me</h1>
                                <hr className="my-4"/>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat deleniti adipisci mollitia dolores ratione, eum esse eveniet cumque vitae, explicabo omnis, quo debitis maiores? Iste ratione tempore exercitationem accusamus harum.</p>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat deleniti adipisci mollitia dolores ratione, eum esse eveniet cumque vitae, explicabo omnis, quo debitis maiores? Iste ratione tempore exercitationem accusamus harum.</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ea voluptatem, sequi atque, quaerat voluptatum neque ipsam facere ut, officia expedita voluptate. Modi voluptatum eaque quasi odio, hic expedita ullam eos reiciendis, itaque nulla deleniti facilis, iusto illum autem veritatis. Dolorem delectus nihil, quaerat praesentium officia illum laboriosam? Voluptatibus dolores ipsam nam ea enim porro accusamus iste, impedit, autem exercitationem voluptatum sint magni sed molestias. Nemo mollitia adipisci illo eos? Aut maiores iure qui nesciunt dolore voluptatem totam quasi et molestias similique. Ipsa dolor quae possimus natus, veritatis, rem enim assumenda quis unde totam voluptatum? Deserunt sit assumenda dicta provident?</p>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati corrupti unde laboriosam! Praesentium veniam sit doloribus tempora, dignissimos natus, ducimus consequatur ut recusandae saepe consequuntur perspiciatis, aperiam atque fuga? Quaerat consequuntur ullam in repudiandae, sint quod nulla assumenda optio eveniet ut quo facere corporis molestias ad dolores amet sapiente!</p>   
                            </div>
                        </div>
                        <div className="col-md-4">
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


            </div>
        );
    }
}

export default About;