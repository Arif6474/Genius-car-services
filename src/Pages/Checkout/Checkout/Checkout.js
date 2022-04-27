
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useService from '../../../hooks/useServices/useService';


const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useService(serviceId)
    const [user] = useAuthState(auth);

    if(user) {
        console.log(user);
    }
    // const [user, setUser] = useState({
    //     name: 'Shahid Islam',
    //     email: 'shahid@gmail.com',
    //     address: 'hathazari',
    //     phone:' 0142655663'
    // })
    // const handleAddress =(event) => {
    //     console.log(event.target.value);
    //     const { address, ...rest} =user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest}
    //     setUser(newUser)
    // }
    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
             email : user.email,
             service : service.name,
             serviceId : serviceId,
             address: event.target.address.value,
             phone: event.target.phone.value
        }
        axios.post('https://guarded-springs-93140.herokuapp.com/order', order)
            .then(response => {
                const {data} = response;
                if(data.insertedId){
                    toast('Your order has been booked')
                    event.target.reset()
                }
            })
        
    }
    return (
        <div className="w-50 mx-auto border rounded my-4 p-4">
            <h3>Please order: {service.name}</h3>
            <form onSubmit={handlePlaceOrder} >
                <input className="w-100 mb-2 " type="text" value={user.displayName} name="name" placeholder="name" readOnly/>
                <br /> 
                <input className="w-100 mb-2" type="text" value={user.email} name="email"  placeholder="email" readOnly disabled/>
                <br /> 
                <input className="w-100 mb-2" type="text"  value={service.name} name="service" placeholder="service" readOnly/>
                <br /> 
                <input className="w-100 mb-2" type="text" name="address" placeholder="address" autoComplete='off'/>
                <br /> 
                <input className="w-100 mb-2" type="text"  name="phone" placeholder="phone" required />
                <br /> 
               
                <input className="w-100 btn btn-primary" type="submit" value="Place order"  required />
                <br />
            </form>
        </div>
    );
};

export default Checkout;