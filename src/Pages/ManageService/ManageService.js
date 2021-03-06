import React from 'react';
import useServices from '../../hooks/useServices/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();
const handleDelete = (id) => {
 const proceed = window.confirm('Are you sure you want to delete?')
 if(proceed){
     const url = `https://guarded-springs-93140.herokuapp.com/service/${id}`
     fetch(url, {
         method: 'DELETE',

     }).then(res => res.json())
     .then(data => {
         console.log(data);
         const remaining = services.filter(service => service._id !== id);
         setServices(remaining)
     })
 }
}
    return (
        <div>
            <h3> Manage service</h3>
          {
             services.map(service => <div key = {service._id}>
                    <h3>{service.name} <button onClick={() =>handleDelete(service._id)} >X</button></h3>
             </div>)
          }
        </div>
    );
};

export default ManageService;