import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Getting things started with react babel webpack';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
);

module.hot.accept();