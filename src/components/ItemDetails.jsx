import { CDN_URL } from "../utils/constants";

const ItemDetails=({item})=>{
    return(
          <div className="m-10 border-b-1 flex  justify-between">
            <div className="">
                       <h1>{item.card.info.name}</h1>
                       <h1>₹.{item.card.info.defaultPrice/100}</h1>
                       <p className="text-xs text-left">{item.card.info.description}</p>
                       <h1>{item.card.info.ratings.aggregatedRating.rating} ⭐</h1>
            </div>
            <img src={CDN_URL+item.card.info.imageId} className="h-48 w-48 shadow-lg justify-end"></img>
        </div>
    )
}

export default ItemDetails;


