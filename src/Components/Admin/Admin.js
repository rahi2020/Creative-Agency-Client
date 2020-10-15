import React from 'react';



const Admin = () => {
    return (
        <div className="col-md-4" style={{padding:'50px'}}>
            <form className="form-container">
                <div class="form-group">
                    <h6>Email</h6>
                    <input placeholder="rahi@gmail.com" type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Admin;