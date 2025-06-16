import { CDN_URL } from "../utils/constants";


const Restocard=(restoProp)=>{
console.log("resto"+restoProp)
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=restoProp.restoProp.data?restoProp.restoProp.data:restoProp.restoProp.info;
    return(
      <div className='resto-card hover:shadow-lg'>
        <img src={CDN_URL+cloudinaryImageId} alt="Resto img" />
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        {/* <h4>Delivery time : {sla.slaString}</h4> */}
        <span>{costForTwo}</span>
        <h4>Rating : {avgRating}</h4>
      </div>
    )
  }


  // Higher order component

  export const recommendedResto=(Restocard)=>{
    return(restoProp)=>{
      return (
        <>
      <span className="text-xs absolute m-1 border border-black bg-black text-white">Recommended</span>
      <Restocard {...restoProp}></Restocard>
      </>
      )
    }
  }

  export default Restocard;