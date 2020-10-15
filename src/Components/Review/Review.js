import React from 'react';

const reviewDesign = {
    backgroundColor:"rgba(251, 208, 98, 1)",
    height:"100%"
}

const Review = () => {
    return (
     <div style={reviewDesign}>
        <div className="col-md-4" style={{padding:'50px'}}>
            <form className="form-container">
                <div class="form-group">
                    <input placeholder="Your name" type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <input placeholder="Company's name Designation" type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                    <textarea placeholder="Description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-dark">Submit</button>
            </form>
        </div>
     </div>
    );
};

export default Review;