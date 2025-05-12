import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestoMenu=()=>{

    const[restoDetail,setRestodetail]=useState(null);

    const {restoid}=useParams();
    // console.log(idds);

    useEffect(()=>{
        restoMenu()
    },[])
    const restoMenu=async ()=>{
        const data=await fetch(MENU_URL+restoid);
        const json=await data.json();
        console.log(json);
        setRestodetail(json.data);
    }

    if(restoDetail==null){
        return <Shimmer></Shimmer>
    }

   

const {name,cuisines,costForTwoMessage,avgRating}=restoDetail.cards[2].card.card.info;
const menu=restoDetail?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
console.log(menu);

    return(
        <>
        <h1>{name}</h1>
        <h1>{cuisines.join(",")}</h1>
        <h1>{costForTwoMessage}</h1>
        <h1>{avgRating}</h1>
        <ul>
        {menu.map(item=>{
           return <li>{item.card.info.name}</li>
        })}
        </ul>
        </>
    )
}

export default RestoMenu;