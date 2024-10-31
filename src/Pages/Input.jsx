import React from "react";

export default function Input({value,onChange}){
    return(
        <div>
            <form>
                <input type="text" value={value} onChange={onChange} />
            </form>
        </div>
    )
}