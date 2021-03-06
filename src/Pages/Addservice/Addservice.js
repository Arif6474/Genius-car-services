import React from 'react';
import { useForm } from "react-hook-form";

const Addservice = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
         console.log(data)
         const url = `https://guarded-springs-93140.herokuapp.com/service`
         fetch(url,{
             method: 'POST',
             headers: {'content-type' : 'application/json'},
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(result=> console.log(result))
        };
  
    
    return (
        <div className="w-50 mx-auto ">
            <h2 className="text-center">This is a service page</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-2 " placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
      <textarea className="mb-2 " placeholder="Description" {...register("description", { required: true})} />
      <input className="mb-2 " placeholder="price" type="number" {...register("price")} />
      <input className="mb-2 " placeholder="Photo url" type="text" {...register("img")} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Addservice;