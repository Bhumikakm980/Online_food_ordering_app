


const Restocard=(restoProp)=>{

    const{img,name,cuisine,rating}=restoProp.restoProp;
    return(
      <div className='resto-card'>
        <img src="https://th.bing.com/th/id/OIP.I4QREA0ajgHs6wF7NnhC8QHaEK?w=333&h=187&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=3.1&rm=2" alt="Resto img" />
        <h3>{name}</h3>
        <h4>{cuisine.join(",")}</h4>
        <h4>Delivery time : {restoProp.restoProp.delivery_time.max}</h4>
        <h4>Rating : {rating}</h4>
       
      </div>
    )
  }

  export default Restocard;