import React from 'react';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import { PrismCode } from 'react-prism';
import 'prismjs/themes/prism.css';

export default ({ name, children }) => (
  <div>
    <a className="github-fork-ribbon right-top"
       href={`https://stackblitz.com/github/whawker/react-jsx-highcharts-examples?file=src%2F${name}%2F${name}.js`}
       data-ribbon="Edit on StackBlitz"
       title="Edit on StackBlitz">Edit on StackBlitz</a>
    <pre>
      <PrismCode className="language-jsx">{children}</PrismCode>
    </pre>
    <a href={`https://stackblitz.com/github/whawker/react-jsx-highcharts-examples?file=src%2F${name}%2F${name}.js`}
       className="btn btn-link">See full example code</a>
  </div>
);
