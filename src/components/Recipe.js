import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

export default function Recipe({name, ingredients,steps}){
    return(
        <section id={name.toLowerCase().replace(/ /g,"-")}>
            <li>{name}</li>
            <IngredientsList list={ingredients}></IngredientsList>
            <Instructions title="조리절차" steps={steps}></Instructions>
        </section>
    )
}