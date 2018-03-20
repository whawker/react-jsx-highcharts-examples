import React from 'react';
import { Link } from 'react-router-dom';

const Example = ({ children }) => (
  <div className="container">
    <div className="row">
      <Link to="/" className="btn link btn-lg">Back to examples</Link>
    </div>
    <main className="row">
      {children}
    </main>
  </div>
);

export default Example;