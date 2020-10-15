import React from 'react';
import './Company.css';

const Company = () => {
    return (
        // <div className="display">
        //     <h4 className="gap">slack</h4>
        //     <h4 className="gap">Google</h4>
        //     <h4 className="gap">Uber</h4>
        //     <h4 className="gap">Netflix</h4>
        //     <h4 className="gap">airbnb</h4>
        // </div>
        <div className="row margin">
            <div className="col-md-3">
                <h4>Google</h4>
            </div>
            <div className="col-md-3">
                <h4>Uber</h4>
            </div>
            <div className="col-md-3">
                <h4>Netflix</h4>
            </div>
            <div className="col-md-3">
                <h4>airbnb</h4>
            </div>
        </div>
    );
};

export default Company;