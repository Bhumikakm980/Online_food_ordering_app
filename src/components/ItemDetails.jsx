import { CDN_URL } from "../utils/constants";

const ItemDetails=({item})=>{
    return(
          <div className="m-10 border-b-1 p-3 flex justify-between">
            <div className="w-9/12">
                       <h1>{item.card.info.name}</h1>
                       <h1>₹{item.card.info.defaultPrice?item.card.info.defaultPrice/100:item.card.info.price/100}</h1>
                       <p className="text-xs text-left">{item.card.info.description}</p>
                       <h1>{item.card.info.ratings.aggregatedRating.rating} ⭐</h1>
            </div>
            <div className="w-4/12 justify-end">
            <img src={CDN_URL+item.card.info.imageId} className="h-48"></img>
            <div className="relative">
            <button className=" rounded-l bg-black text-white p-1 m-auto absolute bottom-0.5">Add +</button>
            </div>
            </div>
        </div>
    )
}

export default ItemDetails;


