import { CDN_URL } from "../utils/constants";


const Restocard=(restoProp)=>{

    const{cloudinaryImageId,name,cuisines,sla,avgRating,costForTwo}=restoProp.restoProp.info?restoProp.restoProp.info:restoProp.restoProp;
    return(
      <div className='resto-card'>
        <img src={CDN_URL+cloudinaryImageId} alt="Resto img" />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>Delivery time : {sla.slaString}</h4>
        <span>{costForTwo}</span>
        <h4>Rating : {avgRating}</h4>
       
      </div>
    )
  }

  export default Restocard;