import React from "react"

function Display(pros) {

    const {userpros,passwordpros} = pros
    return(
        <>
        <div className="head">
            <h1>{userpros}</h1>
            <h1>{passwordpros}</h1>
        </div>
        </>
    )
}
export default Display