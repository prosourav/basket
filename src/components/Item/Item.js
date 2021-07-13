import React, { useState } from 'react';
import {  faMinusSquare,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  
const Item = ({delet,index,prd}) => {
   const [cut,setCut] = useState(false);

   const deleteIT=()=>{
      setCut(!cut);
   }
   return (
      <div>
      <div className='item'>
      <h3 style={{ color:cut && 'red'}}><FontAwesomeIcon onClick={()=>deleteIT()} icon={faMinusSquare} color='grey'/> {prd.Num}{prd.Name} </h3>
      </div>
      </div>
   );
};

export default Item;