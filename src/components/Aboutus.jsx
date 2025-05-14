// functional based component
// import { User } from "./User";

// const Aboutus=()=>{
//     return(
//         <>
//         <h1>hi this is about me!</h1>
//         <User></User>
//         </>
//     )
// }

// export default Aboutus;

import { Component } from "react";

class User extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }
      
    }

   
    render(){
        return(
            <div>
            <h1>{this.props.userName}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>click</button>
            <p>{this.state.count}</p>
            </div>
        )
    }

}

export default User;