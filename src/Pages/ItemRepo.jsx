import React from "react";

export default function ItemRepo({repo,removeRepo})
{

    return(
        <div className="ItemRepo">
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank">Ver Repositório</a>
            <a href="#" className="remover" onClick={() => removeRepo(repo.id)}>Remover</a>
            <hr />
        </div>
    )
}