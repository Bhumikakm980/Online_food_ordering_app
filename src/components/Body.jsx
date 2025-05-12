import Restocard from "./Restocard";
import {restoList} from '../utils/mockData';
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body=()=>{

    const[RestoList,setRestoList]=useState([]);

    const[searchResto,setSearchResto]=useState("");

    const[filetredRestorants,setFilteredRestorants]=useState([]);

   
  
    function topRatedResto(){
        const List=RestoList.filter((item)=> {
            if(item.info.avgRating>=4.6){
                return true;
            }
        })
        setRestoList(()=>List);
    }

    useEffect(()=>{
        name();
    },[])

    const name=async() =>{
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                                    
    const jsonVal= await response.json();
    console.log(jsonVal);
   
    setRestoList(jsonVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestorants(jsonVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    function onInputChanged(e){
      const searchVal=  RestoList.filter((item)=>{
            if(item.info.name.toLowerCase().includes(searchResto.toLowerCase()))
            return true;
        else
        return false;
        })
        setFilteredRestorants(searchVal);
    }
    
    if(RestoList.length===0){
        // return <h1>Loading,Please wait...</h1>
        return <Shimmer></Shimmer>
    }
     

    
    return(
      <>
      {/* <div className='search'>Search</div> */}
      <div className="filter-button">
      <div>
      <input placeholder="Search by restorant name" id="search-resto" value={searchResto} onChange={(e)=>{setSearchResto(e.target.value)
        onInputChanged(e)}
      }></input>
      <button onClick={onInputChanged}>Search</button>
      </div>
      <button onClick={topRatedResto}>Top rated resto</button>
      </div>

      <div className='resto-container'>
      {/* {RestoList.map((item)=>{
        return <Restocard restoProp={item}></Restocard>
        })} */}
       {filetredRestorants.map((item)=>{
        return <Link key={item.info.id} to={"/restomenu/"+item.info.id}><Restocard restoProp={item}></Restocard></Link>
        })}
      </div>
      </>
    )
  }

  export default Body;