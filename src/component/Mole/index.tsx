import React from 'react';



const Mole = ({ onClick }:MoleProps) => {
  return (
    <img
      src="https://via.placeholder.com/50" 
      alt="mole"
      data-testid="mole"
      className="w-12 h-12 cursor-pointer"
      onClick={onClick}
    />
  );
};

export default Mole;
