import Restocard from "./Restocard";
import {restoList} from '../utils/mockData';
import { useState } from "react";
import { useEffect } from "react";



const Body=()=>{

    const[topRated,setTopRated]=useState(restoList);

    function topRatedResto(){
        const List=restoList.filter((item)=> {
            if(item.rating>=4.8){
                return true;
            }
        })
        setTopRated(()=>List);
    }

    useEffect(()=>{
        name();
    },[])

    const name=async() =>{
        const response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const mod= await response.json();
    console.log(mod);
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