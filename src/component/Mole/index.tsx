import React from 'react';

const Mole = ({onClick}) => {
    return (
     
            <button data-testid='mole'
             onClick={onClick} 
             className="w-16 h-16 bg-brown-500 rounded-full shadow-md hover:bg-brown-700 transition duration-300">
            </button>
        

    )
}
export default Mole;
