import Restocard from "./Restocard";
import {restoList} from '../utils/mockData';
import { useState } from "react";
import { useEffect } from "react";



const Body=()=>{

    const[topRated,setTopRated]=useState(restoList);

    function topRatedResto(){
        const List=topRated.filter((item)=> {
            if(item.info.avgRating>=4.6){
                return true;
            }
        })
        setTopRated(()=>List);
    }

    useEffect(()=>{
        name();
    },[])

    const name=async() =>{
        // const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                                    
    const jsonVal= await response.json();
   
    setTopRated(jsonVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    return(
      <>
      {/* <div className='search'>Search</div> */}
      <button onClick={topRatedResto}>Top rated resto</button>

      <div className='resto-container'>
      {topRated.map((item)=>{
        return <Restocard restoProp={item}></Restocard>
        })}
       
      </div>
      </>
    )
  }

  export default Body;