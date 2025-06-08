import { CDN_URL } from "../utils/constants";


const Restocard=(restoProp)=>{
console.log("resto"+restoProp)
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=restoProp.restoProp.data?restoProp.restoProp.data:restoProp.restoProp.info;
    return(
      <div className='resto-card'>
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
      <h1>Recommended</h1>
      <Restocard {...restoProp}></Restocard>
      </>
      )
    }
  }

  export default Restocard;