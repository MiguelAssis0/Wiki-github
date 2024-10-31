import React from "react";

export default function Button({onClick}){
    return(
        <button className="button" onClick={onClick}>
            Buscar
        </button>
    )
}