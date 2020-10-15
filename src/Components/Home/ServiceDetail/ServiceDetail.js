import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <a href="/login"><img style={{height:'50px'}} src={service.img} alt=""/></a>
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    );
};

export default ServiceDetail;