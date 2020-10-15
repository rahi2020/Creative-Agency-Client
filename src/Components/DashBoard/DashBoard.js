import React from 'react';
import { useForm } from 'react-hook-form';
import './DashBoard.css';



const containerStyle = {
    backgroundColor:"rgba(23, 17, 48, 1)",
    height:"100%"
}

const DashBoard = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {



        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if (res) {
                alert('Thanks for Order.');
            }
        })
    }
    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2">
                    <div className="group">
                        <a style={{color: 'white'}} href="/dashboard">Order</a>
                        <br/>
                        <a style={{color: 'white'}}  href="/service">Service list</a>
                        <br/>
                        <a style={{color: 'white'}}  href="/review">Review</a>
                    </div>
                </div>

            <div className="col-md-4">
                <div className="orderForm">
                    <div className="control">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="First Name"name="firstName" ref={register({ required: true, maxLength: 20 })} /> <br/><br/>
                            <input placeholder="Last Name" name="lastName" ref={register({ required: true, maxLength: 20 })} /> <br/><br/>
                            <input placeholder="Graphic Design"name="course" ref={register({ required: true, maxLength: 20 })} /> <br/><br/>
                            <input placeholder="Project detail"name="projectDetail" ref={register({ required: true, maxLength: 200 })} /> <br/><br/>
                            <input placeholder="Price" name="Price" type="number" ref={register({ min: 1, max: 9999999 })} /><br/><br/>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>

            </div>
        </section>
    );
};

export default DashBoard;