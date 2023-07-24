import React,{useState} from "react";
import Form from "./Form";
import Display from "./Display";

function App1() {

    let [user,setuser]=useState()
    let [pwd,setpwd]=useState()

    const getValue=(Username,Password)=>{
        setuser(Username)
        setpwd(Password)
        console.log(`Username: ${Username} Password: ${Password}`);
    }

    console.log(user,pwd);

    return(
        <>
            <div>
                <Form myfun={getValue}/>
                <Display userpros={user} passwordpros={pwd} />
            </div>
        </>
    )
}
export default App1