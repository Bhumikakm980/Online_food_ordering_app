import { useSelector } from "react-redux";
import ItemDetails from "./itemDetails";

const Cart=()=>{

    // subscribing to store

    const items=useSelector((store)=>store.cart.items);


    return(
        <>
       <h1 className="text-center text-2xl font-bold mt-2">Cart</h1>
        {items.length==0?<h1 className=" text-center font-bold">Your cart is empty</h1>:items.map((i)=> <ItemDetails item={i}></ItemDetails>)}
       {/* {items.map((i)=> <ItemDetails item={i}></ItemDetails>)} */}
      
        </>
    )
}

export default Cart;