import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestomenu from "../utils/useRestomenu";
import ItemDetails from "./itemDetails";
import ItemList from "./ItemList";



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

    

    /** filtering data for accordian */


    const ItemCategory=restoitems&&restoitems.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((i)=>{
                    if(i.card.card['@type'].includes("ItemCategory")){
                    return true;
                    }
    });
    
    console.log(ItemCategory);




    if(restoitems==null){
        return <Shimmer></Shimmer>
    }
    else{
    return(
        
              ItemCategory &&  ItemCategory.map((item)=>{
                return(
                    <ItemList i={item}></ItemList>
                )
            }
        
        )


        )
    }

   


}

export default RestoMenu;