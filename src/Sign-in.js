function Signin() {
    return(
        <>
        <h1>Signup</h1>
        <form className="form2">
            <div>
                <input className="text1" type="text" placeholder="New Id"/>
            </div>
            <div>
                <input className="text1" type="password" placeholder="New Password"/>
            </div>
            <div>
                <input className="text1" type="password" placeholder="Re-enter Password"/>
            </div>
            <div>
                <button className="btn2" type="button">Sign-in</button>
            </div>
        </form>
        </>
    )
}
export default Signin