import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
          <div className="sizing">
            <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <h1>Let us handle your <br/> project, professionally</h1>
                        <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quidem necessitatibus dolor veritatis rerum!</p>
                    </div>
                    <div className="col-md-6">
                        <form className="form-container">
                            <div class="form-group">
                                <input placeholder="Your email address" type="email" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="form-group">
                                <input placeholder="Your name/company's name" type="email" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Your message" class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                            <button type="button" class="btn btn-dark">Send</button>
                        </form>
                    </div>
                </div>
                <p className="copyright">copyright: Razmik Khan Rahi {(new Date().getFullYear())}</p>
          </div>
        </div>
    );
};

export default Footer;