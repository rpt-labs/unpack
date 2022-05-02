import React from 'react';

import './image.css';

const Image = () => {
  return (
    <div className='game'>
      <iframe
        src="https://www.lexaloffle.com/bbs/widget.php?pid=desertball1"
        allowFullScreen
        width="568"
        height="533"
        style={{ border: 'none', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default Image;
