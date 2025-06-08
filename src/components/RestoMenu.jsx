import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestomenu from "../utils/useRestomenu";
import ItemDetails from "./itemDetails";



const RestoMenu=()=>{

    // const[restoDetail,setRestodetail]=useState(null);

    const {restoid}=useParams();
    // console.log(idds);

    // custom hook to call details api
    const restoitems=useRestomenu(restoid);

    // useEffect(()=>{
    //     restoMenu()
    // },[])
    // const restoMenu=async ()=>{
    //     const data=await fetch(MENU_URL+restoid);
    //     const json=await data.json();
    //     console.log(json);
    //     setRestodetail(json.data);
    // }

    const[showRecommened,setRecommended]=useState(true);

    /** filtering data for accordian */


    const ItemCategory=restoitems&&restoitems.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((i)=>{
                    if(i.card.card['@type'].includes("ItemCategory")){
                    return true;
                    }
    });
    
    console.log(ItemCategory);


    function showRecommended(){
        setRecommended(preVal=>!preVal)
    }

    if(restoitems==null){
        return <Shimmer></Shimmer>
    }
    else{
    return(
        
              ItemCategory &&  ItemCategory.map((i)=>{
                return(
                    
                <div className="text-left" onClick={showRecommended}>
                    {/* <h6 className="font-bold text-2xl my-5">{restoitems.cards[0].card.card.text}</h6> */}
                    <div className="w-6/12 m-auto bg-gray-50 shadow-lg my-4 py-2">
                    <div className="flex justify-between">
                    <span className="font-bold text-2xs">{i.card.card.title}({i.card.card.itemCards?.length})</span>
                    <span>🡇</span>
                    </div>
                    <div>
                    {showRecommened && i.card.card.itemCards?.map((item)=>{
                  return <ItemDetails item={item} key={item.card.info.name}></ItemDetails>
                   })}
                    </div>
                   </div>
                </div>)
            }
        
        )


        )
    }

   


}

export default RestoMenu;