import React,{useState} from "react";
import "./form.css";

function Form(pros) {
    console.log(pros);

    const{myfun}=pros;


    let [user,setuser] = useState('');
    let [pwd,setpwd] = useState('');

    function Submit(params) {
        params.preventDefault()
        myfun(user,pwd)
    }
    function Username(params) {
        // console.log('username');
        // console.log(params.target.value);
        setuser(params.target.value)
    }
    function Password(params) {
        // console.log('password');
        // console.log(params.target.value);
        setpwd(params.target.value)
    }

    console.log(user,'userstate');
    console.log(pwd,'password');



    return(
        <>
        <form className="f1" onSubmit={Submit}>
            <div className="inputs">
            <input className="text" onChange={Username} type="email" placeholder="Enter email"/>
            {
                user.length===0?<span style={{color:"red"}}>Field is null</span>:""
            }
            <input className="text" onChange={Password} type="password" placeholder="Enter password"/>
            {
                pwd.length===0?<span style={{color:"red"}}>Field is null</span>:""
            }
            </div>
            <div className="btn">
                <button className="btn1">Submit</button>
            </div>
            

        </form>

        {/* <div className="">{user}</div> */}
        {/* <div className="">{pwd}</div> */}
        </>
        
    )
}

export default Form