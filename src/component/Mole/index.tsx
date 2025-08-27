import React from 'react';
import { MoleProps } from '@/utils/types';


const Mole = ({onClick}:MoleProps) => {
    return (
     
           <img data-testid="mole"
            src="/mole.png"
             alt="m" 
             onClick={onClick} 
            className="w-16 h-16 cursor-pointer" />
    );      
}

export default Mole;
