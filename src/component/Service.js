import React from "react";
const ArrayService = [
  {
    img: "img/product-1.jpg",
    name: "Solar System",
  },
  {
    img: "img/product-2.jpg",
    name: "Wind Turbine",
  },
  {
    img: "img/product-3.jpg",
    name: "Wind Generator",
  },
];
function Service() {
  return (
    <div className="container-fluid py-5" id="service">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: 3 }}
          >
            Services
          </h6>
          <h1 className="font-secondary display-4">What We Cover</h1>
        </div>
        <div className="row">
          {ArrayService.map((product) => (
            <div className="product-item mb-2">
              <div className="product-img">
                <img className="img-fluid" src={product.img} alt="" />
                <a
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  <i className="fa fa-2x fa-plus text-white" />
                </a>
              </div>
              <div className="bg-secondary text-center p-4">
                <h3 className="m-0">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
