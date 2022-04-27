import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://guarded-springs-93140.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <PageTitle title="Services"></PageTitle>
            <h2 className="title"> Our Services</h2>
          <div id="services" className="services-container">
          {
               services.map(service => <Service key={service._id} service={service}></Service>)
           }
          </div>
        </div>
    );
};

export default Services;