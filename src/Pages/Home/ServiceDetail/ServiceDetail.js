
import { Link, useParams } from "react-router-dom";
import useService from "../../../hooks/useServices/useService";

const ServiceDetail = () => {
   const {serviceId} = useParams();
   const [service] = useService(serviceId);


  return (
    <div>
      <h2> You are about to book: {service.name}</h2>
      <div className="text-center my-4">
    <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
