import React from 'react';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import { PrismCode } from 'react-prism';
import 'prismjs/themes/prism.css';

export default ({ name, children }) => (
  <div>
    <pre>
      <PrismCode className="language-jsx">{children}</PrismCode>
    </pre>
    <a href={`https://github.com/whawker/react-jsx-highcharts-examples/blob/master/src/${name}/${name}.js`} className="btn btn-link">See full example code</a>
  </div>
);
