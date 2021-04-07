import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h2>Headre</h2>
      </header>

      <main> {children}</main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default Layout;
