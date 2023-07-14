import React,{useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./State.css"



function State() {
    const [State,setState] = useState(true)
    return(
        <>
            <div className="main1">
        {/* <h1>{State}</h1> */}
        <button className="btntop1"
        onClick={
            function name(params) {
                console.log('button clicked')
                // setState(State+1)   
                setState(true);
                 
            }
        }      
        >
            Sign-up</button>

            <button className="btntop2" 
        onClick={
            function name(params) {
                console.log('button clicked')
                // setState(State-1)    
                setState(false);
            }
        }      
        >
            Login</button>
            
            {State ? <Signup/> : <Login/>}
    </div>
        </>
        
    )
}

export default State