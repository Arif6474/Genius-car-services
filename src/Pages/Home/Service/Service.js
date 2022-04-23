import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name , img, price, description} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail =(id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className="service-container">
            <img src={img}  alt="" />
            <div className="service">
            <h2 className="service-title">{name}</h2>
            <p className="service-price">Price: ${price}</p>
            <p className="service-description">Description{description}</p>
           
            </div>
            <button  onClick={() => navigateToServiceDetail (_id)} className="service-btn">Book: {name}</button>
        </div>
    );
};

export default Service;


