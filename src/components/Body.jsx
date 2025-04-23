import Restocard from "./Restocard";
import {restoList} from '../utils/mockData';
import { useState } from "react";



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
    function showall(){
        setTopRated(()=>restoList);
    }
    return(
      <>
      {/* <div className='search'>Search</div> */}
      <button onClick={topRatedResto}>Top rated resto</button>
      <button onClick={showall}>all resto</button>
      <div className='resto-container'>
      {topRated.map((item)=>{
        return <Restocard restoProp={item}></Restocard>
        })}
       
      </div>
      </>
    )
  }

  export default Body;