import React, { useState } from 'react';
import './WorkList.css';
import carousel1 from '../../../images/carousel-1.png';
import number from '../../../images/carousel-5.png';
import carousel3 from '../../../images/carousel-3.png';

const WorkList = () => {


    return (
        <div className="work-container">
             <div className="heading">
                <h3><span style={{color: 'white'}}>Here are some of</span> <span style={{color: 'rgba(122, 178, 89, 1)'}}>our work</span></h3>
            </div>

        <div className="carousel-container">
            <div className="pictures" style={{width: '400px',}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src={carousel3} alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={carousel1} alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={number} alt="Third slide"/>
            </div>
            </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        </div>
       

        
    );
};

export default WorkList;