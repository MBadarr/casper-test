// Layout.js
// import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
