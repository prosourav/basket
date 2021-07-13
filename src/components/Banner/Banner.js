import React, { useState } from 'react';
import { faShoppingBasket, faPlusSquare, faLeaf, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Banner.css';
import Item from '../Item/Item';

const Banner = () => {
 const  products = ['Strawberry','Blueberry','Orange','Banana','Apple','Carrot','Celery','Mushroom','Green Pepper','Eggs','Cheese',
 'Butter','Chicken','Bread','Pork','Rice','Pasta'];
   const [cart,setCart] = useState([]);
   const [count,setCount] = useState(0);

   


   const addToCart=(prd)=>{
      
      console.log(prd);
     const exist =  cart.find(product=> product.Name===prd);

     if(exist){
       exist.Num++;
       const newcart = [...cart];
       setCart(newcart);
      // setCart(newcart);
   }
     else if(!exist){
      const cartItem={
         Name:prd,
         Num:1
      }
      const newCart = [...cart,cartItem]
      setCart(newCart);
     } 
   
   }
   const del=(x)=>{
      console.log({x});
      
   }
   return (
      <div>
         <div className='mainBanner' style={{height:'250px',background:'#2a2929',color:'white'}}>
         <div className='logo' style={{paddingTop:'40px',textAlign:'center'}}>
         <FontAwesomeIcon icon={faShoppingBasket} size = '8x'/>
         <h2>Hello, Basket!</h2>
         </div>
         </div>
         <div className='secondSection'>
         <div className='items'>
         <h3><FontAwesomeIcon icon={faLeaf} size = '2x'/> Groceries</h3>
          {products.map(prd=> <div className='item'><h3> <span onClick={()=>addToCart(prd)}><FontAwesomeIcon icon={faPlusSquare} color='grey'/> </span>{prd}</h3></div>)}
         </div>
         
         <div className='cart'>
         <div style={{display:'inline'}}><h3 style={{display:'inline'}}><FontAwesomeIcon icon={faShoppingBasket} size = '2x'/>Basket</h3> 
         <FontAwesomeIcon icon={faTrash} size = '2x'/>
         </div>
          
         {cart.map((prd,index)=> <Item  prd={prd} index={index} key={index} del={del()}></Item>)}
         </div>
         
         <button onClick={()=>setCount(count+1)}>increase</button>
         <h1>{count}</h1>
         </div>
      </div>
   );
};

export default Banner;