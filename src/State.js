import React,{useState} from "react";
import "./State.css"



function State() {
    const [State,setState] = useState(0)
    return(
        <>
            <div className="main1">
        <button className="btntop1"
        onClick={
            function name(params) {
                console.log('button clicked')
                setState(State+1)   
                 
            }
        }      
        >
            +</button>

            <button className="btntop2" 
        onClick={
            function name(params) {
                console.log('button clicked')
                setState(State-1)    
            }
        }      
        >
            -</button>
            <h1>{State}</h1>
    </div>
        </>
        
    )
}

export default State