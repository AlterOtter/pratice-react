import React from "react";
import Recipe from "./Recipe";

function Menu({recipes}){
    return (
        <articel>
            <header>
                <h1>맛있는 조리방법</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe,i)=>(
                    <Recipe key={i} {...recipe}></Recipe>
                ))}
            </div>
        </articel>
    )
}

export default Menu;