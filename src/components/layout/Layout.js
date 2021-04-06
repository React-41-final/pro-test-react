import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h2>headre</h2>
      </header>

      <main> {children}</main>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  );
};

export default Layout;
