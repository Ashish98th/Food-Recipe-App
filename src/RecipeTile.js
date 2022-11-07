import React from "react";

function RecipeTile({recipe}){
    return(
        <div className="REcipeTile" >
        <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
        <img className="recipeTile_img"  onClick={()=>window.open(recipe["recipe"]["url"])}  src={recipe["recipe"]["image"]}/>
        </div>
    )
}
export default RecipeTile;