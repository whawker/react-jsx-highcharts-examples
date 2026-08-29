import React from 'react';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

export default ({ name, children }) => (
  <div>
    <a className="github-fork-ribbon right-top"
       href={`https://stackblitz.com/github/whawker/react-jsx-highcharts-examples?file=src%2F${name}%2F${name}.js`}
       data-ribbon="Edit on StackBlitz"
       title="Edit on StackBlitz">Edit on StackBlitz</a>
    <SyntaxHighlighter language="jsx">{children}</SyntaxHighlighter>
    <a href={`https://stackblitz.com/github/whawker/react-jsx-highcharts-examples?file=src%2F${name}%2F${name}.js`}
       className="btn btn-link">See full example code</a>
  </div>
);
