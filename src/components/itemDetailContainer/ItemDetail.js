import Item from "../ItemList/Item";
import { useState } from "react";

const ItemDetail = ({product}) => {

    const [count,setCount]= useState(0);
    const handleClick=(value)=>{
        setCount(value);
    };
    return (
        <> 
        < Item product ={product}/>
        <button onClick = {()=> handleClick(count-1)}>-</button>
        <h4> cantidad de clicks {count}</h4>
        <button onClick={()=> handleClick (count +1)} >+</button>
        </>
        );
}
 
export default ItemDetail;

