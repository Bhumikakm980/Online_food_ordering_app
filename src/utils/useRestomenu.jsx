import { useState,useEffect } from "react"
import { MENU_URL } from "../utils/constants";


const useRestomenu=(restoid)=>{

    const[restoDetail,setRestodetail]=useState(null);

    useEffect(()=>{
            restoMenu()
        },[])
        const restoMenu=async ()=>{
            const data=await fetch(MENU_URL+restoid);
            const json=await data.json();
            console.log(json);
            setRestodetail(json.data);
        }

        return restoDetail;
}

export default useRestomenu;