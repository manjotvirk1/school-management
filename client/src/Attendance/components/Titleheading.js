import React from 'react';

const Titleheading = ({title}) => {
    return (
        <div className="bg-dark">
           <h4 style={{marginTop:"15px",fontSize:"30px",color:'white'}} className='text-center'>{title}</h4>
      </div>
    );
};

export default Titleheading;