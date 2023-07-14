function Login() {
    return(
        <>
        <h1>Login</h1>
        <form className="form1">
            <div >
                <input className="text1" type="text" placeholder="UserID"/>
            </div>
            <div>
                <input className="text1" type="password" placeholder="Password"/>
            </div>
            <div >
                <button className="btn1" type="button">Login</button>
            </div>
        </form>
        </>
    )
}

export default Login