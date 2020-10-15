import React from 'react';
import { useHistory } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {

    const history = useHistory()
    const handleProceedCheckout = () => {
        history.push('/dashboard');
    }

    return (
       <main style={{height: '500px'}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
                <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aut perspiciatis fugiat ullam blanditiis. Totam!</p>
                <button onClick={handleProceedCheckout} class="btn btn-dark">Hire us</button>
           </div>
           <div className="col-md-6">
               <img src={frame} alt="" className="img-fluid"/>
           </div>
       </main>
    );
};

export default HeaderMain;