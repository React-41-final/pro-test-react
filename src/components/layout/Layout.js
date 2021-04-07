import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main> {children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
