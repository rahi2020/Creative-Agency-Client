import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
    {
        img: service1,
        title:'Web & Mobile design',
    },
    {
        img: service2,
        title:'Graphics design',
    },
    {
        img: service3,
        title:'Web development',
    }
]

const Services = () => {
    return (
        <div>
            <section className="services-container">
                <div className="text-center mt-5">
                    <h2>Provide awesome <span style={{color: 'rgba(122, 178, 89, 1)'}}>Services</span></h2>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 ">
                { 
                       serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;