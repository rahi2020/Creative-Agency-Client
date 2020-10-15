import React from 'react';
import Blog from '../Blog/Blog';
import Company from '../Company/Company';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorkList from '../Worklist/WorkList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Company></Company>
            <Services></Services>
            <WorkList></WorkList>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;