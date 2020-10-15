import React from 'react';
import customarOne from '../../../images/customer-1.png';
import customarTwo from '../../../images/customer-2.png';
import customarThree from '../../../images/customer-3.png';
import Post from '../Post/Post';


const blogData = [
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Nash Patrik',
        authorImg : customarOne,
        identity:'CEO Manpol'
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Miriam Barron',
        authorImg : customarTwo,
        identity:'CEO Manpol'
    },
    {
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Bria Malone',
        authorImg : customarThree,
        identity:'CEO Manpol'
    },
]

const Blog = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Clients <span style={{color: 'rgba(122, 178, 89, 1)'}}>feedback</span></h2>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <Post blog={blog} key={blog.title}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;