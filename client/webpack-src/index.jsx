import React from 'react';
import reactDom from 'react-dom';
import Image from './Image.jsx';

const App = () => {
  return (
    <>
      <Image />
    </>
  );
};

reactDom.render(<App />, document.getElementById('webpack-inner'));
