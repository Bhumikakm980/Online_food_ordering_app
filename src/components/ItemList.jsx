import { useState } from "react";
import ItemDetails from "./itemDetails";

const ItemList=({i})=>{

const[openAccordian,setAccordian]=useState(false);


function showRecommended(){
    setAccordian(preState=>!preState);
}



    return(
                <div className="text-left">
                    {/* <h6 className="font-bold text-2xl my-5">{restoitems.cards[0].card.card.text}</h6> */}
                    <div className="w-6/12 m-auto bg-gray-50 shadow-lg my-4 py-2">
                    <div className="flex justify-between cursor-pointer" onClick={showRecommended}>
                    <span className="font-bold text-2xs">{i.card.card.title}({i.card.card.itemCards?.length})</span>
                    <span>🡇</span>
                    </div>
                    <div>
                    {openAccordian && i.card.card.itemCards?.map((item)=>{
                  return <ItemDetails item={item} key={item.card.info.name}></ItemDetails>
                   })}
                    </div>
                   </div>
                </div>
                
            )
        
    
}









export default ItemList;