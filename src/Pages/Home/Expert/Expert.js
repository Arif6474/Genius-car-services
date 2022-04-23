import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Expert = ({nature}) => {
    const{name , picture} = nature;
    return (
        <div className="col-sm-12 gx-5 col-md-6 col-lg-4 mx-auto my-4">
          <PageTitle title="Expert"></PageTitle>
          <div className="card " style={{width: "22rem"}}>
  <img src={picture} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button href="#" className="btn btn-primary">Go somewhere</button>
  </div>
</div>

        </div>
       
    );
};

export default Expert;