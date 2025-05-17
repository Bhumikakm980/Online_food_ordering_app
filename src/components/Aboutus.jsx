
import { Component } from "react";

class User extends Component{

    constructor(props){
        super(props)
        this.state={
            userDetail:{
                name:null,
                location:null
            }
        }
      
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/Bhumikakm980");
        const userData=await data.json();

        this.setState({
            userDetail:{
                name:userData.name,
                location:userData.location
            }
        })

    }
   
    render(){
        return(
            <div>
            {/* <h1>{this.props.userName}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>click</button>
            <p>{this.state.count}</p> */}
            <h1>Employer Details</h1>
            <div className="useDetails">
            <h5>{this.state.userDetail.name}</h5>
            <h5>{this.state.userDetail.location}</h5>
            </div>
            </div>
        )
    }

}

export default User;