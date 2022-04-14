import React from "react";
import { Link } from "react-router-dom";

const ServiceDetail = () => {
  return (
    <div>
      <h2>This is a service detail page</h2>
      <div className="text-center my-4">
        <Link to="/checkout">
          <button className="btn btn-primary">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
