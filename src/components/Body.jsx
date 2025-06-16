import Restocard,{recommendedResto}  from "./Restocard";
// import {restoList} from '../utils/mockData';
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatus from '../utils/useStatus';
import userContext from "../utils/userContext";


const Body=()=>{

    const[RestoList,setRestoList]=useState([]);

    const[searchResto,setSearchResto]=useState("");

    const[filetredRestorants,setFilteredRestorants]=useState([]);

    const internetStatus=useStatus();
    
    // const welcomeUser=useContext(userContext);

    const {name,setUsername}=useContext(userContext);

    const RecommendedComponent=recommendedResto(Restocard);
  
 
    function topRatedResto(){
        const List=RestoList.filter((item)=> {
            if(item.info.avgRating>=4.5){
                return true;
            }
        })
        setFilteredRestorants(()=>List);
    }

    useEffect(()=>{
        nameVal();
    },[])

    const nameVal=async() =>{
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                                    
    const jsonVal= await response.json();
    console.log(jsonVal);
   
    setRestoList(jsonVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestorants(jsonVal?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    function onInputChanged(e){
      const searchVal=  RestoList.filter((item)=>{
            if(item.info.nameVal.toLowerCase().includes(searchResto.toLowerCase()))
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
     

    if(internetStatus===false){
      return <h1>It's looks like you are offline</h1>
    }
    
    return(
      <>
      {/* <div className='search'>Search</div> */}
      
      <div className="filter-button">
      <div>
      <input placeholder="Search by restorant name" id="search-resto" className="border border-black rounded-b-sm w-xl p-0.5 mx-3" value={searchResto} onChange={(e)=>{setSearchResto(e.target.value)
        onInputChanged(e)}
      }></input>
      {/* <button onClick={onInputChanged}>Search</button> */}
      </div>
      <button onClick={topRatedResto} className=" border border-black rounded-l px-1  h-7 mt-1.5 cursor-pointer">Get Top rated resto</button>
      
      <h1 className="mt-1.5 mx-40 text-xl">Welcome {name}</h1>
      <label className="mt-3 px-0.5">change name</label>
      <input className="border border-black h-8 mt-3 mr-3 text-center" 
      // value={name} 
      onChange={(e)=> setUsername(e.target.value)}
      ></input>
      </div>
      
      <div className='resto-container'>
      {/* {RestoList.map((item)=>{
        return <Restocard restoProp={item}></Restocard>
        })} */}
        
       {filetredRestorants.map((item)=>{
      
        return <Link className="link-id" key={item.info.id} to={"/restomenu/"+item.info.id}>
          {item.info.avgRatingString>4.5?
            <RecommendedComponent restoProp={item}></RecommendedComponent>: 
          
          <Restocard restoProp={item}></Restocard>}

          </Link>
       
        })}
      </div>
      </>
    )
  }

  export default Body;