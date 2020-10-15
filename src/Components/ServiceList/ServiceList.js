import React from 'react';
import serviceOne from './service1.png'
import serviceTwo from './service3.png'
import './ServiceList.css';

const ServiceList = () => {
    return (
        <div className="row margin">
            <div col-md-4>
                <a style={{color: 'black'}} href="/addService">Add Service</a>
                <br/>
                <a style={{color: 'black'}}  href="/admin">Make Admin</a>
                <br/>
            </div>
            <div className="col-md-4 ">
                <div className="card">
                    <img style={{height:'50px', width:'50px'}} src={serviceOne} alt=""/>
                    <h5 className="mt-3 mb-3">Web & Mobile design</h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img style={{height:'50px', width:'50px'}} src={serviceTwo} alt=""/>
                    <h5 className="mt-3 mb-3">Graphic design</h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;