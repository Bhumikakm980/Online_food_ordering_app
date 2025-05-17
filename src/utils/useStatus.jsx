import { useEffect, useState } from "react";

function useStatus(){

  const[onlineCheck,setOnlinecheck]=useState(true);

  useEffect(()=>{

    window.addEventListener("offline",()=>{
        return setOnlinecheck(false);
    });

    window.addEventListener("online",()=>{
        return setOnlinecheck(true);
    })
  },[])
       
    return onlineCheck;
}

export default useStatus;