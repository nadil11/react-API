import React,{useState} from "react";
import "./States.css"
import Login from "./Login"
import Signin from "./Sign-in";



function State() {
    const [State,setState] = useState(true)
    return(
        <>
            <div className="main1">
        <button className="btntop1"
        onClick={
            function name(params) {
                console.log('button clicked')
                // setState(State+1) 
                setState(true)
                 
            }
        }      
        >
            Login</button>

            <button className="btntop2" 
        onClick={
            function name(params) {
                console.log('button clicked')
                // setState(State-1) 
                setState(false)   
            }
        }      
        >
            Sign-in</button>
            {/* <h1>{State}</h1> */}
            {State ? <Login/> : <Signin/>}
    </div>
        </>
        
    )
}

export default State