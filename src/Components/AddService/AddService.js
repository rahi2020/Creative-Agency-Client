import React from 'react';
const addService = {
    backgroundColor:"rgba(122, 178, 89, 1))",
    height:"100%"
}

const AddService = () => {
    return (
        <div style={addService}>
        <div className="col-md-4" style={{padding:'50px'}}>
            <form className="form-container">
                <div class="form-group">
                    <h5>Service Title</h5>
                    <input placeholder="Enter title" type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <h5>Description</h5>
                    <textarea placeholder=" Enter Designation" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
     </div>
    );
};

export default AddService;