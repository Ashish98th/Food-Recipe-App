import {useState } from 'react';
import './App.css';
import "./Key"
import Axios from "axios";
import RecipeTile from './RecipeTile';
import "./RecipeTile.css";
function App() {

  const[query,setquery]=useState("")
  const[recipes,setrecipes]=useState([])
  const[healthLabels,sethealthLabels]=useState("vegan")


  const YOUR_APP_ID="8148e1d8";
  const YOUR_APP_KEY="5074de19091337f198ae54454bb52469";

  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}`

async function getReceipes(){
  var result=await Axios.get(url);
  setrecipes(result.data.hits)
  console.log(result.data.hits)
}

const submithandle=(e)=>{
  e.preventDefault();
  getReceipes();
}
  return (
    <div className="app">
   <h1>Food Recipe Plaza 🍔</h1>
   <form className="search_form" onSubmit={submithandle}>
    <input type="text" value={query} className="app_input" placeholder="enter ingredient" onChange={(e)=>setquery(e.target.value)} />

    <input type="submit" className='app_submit' value="Search" />

    <select className='app_healthlabels'  >
    <option onClick={()=>sethealthLabels("vegan")}>Vegan</option>
    <option onClick={()=>sethealthLabels("Vegetarian")}>Vegetarian</option>
    <option onClick={()=>sethealthLabels("Pescatarian")}>Pescatarian</option>
    <option onClick={()=>sethealthLabels("Dairy-free")}>Dairy-free</option>
    <option onClick={()=>sethealthLabels("Wheat-Free")}>Wheat-Free</option>
    <option onClick={()=>sethealthLabels("Alcohol-Free")}>Alcohol-Free</option>
   </select>

   </form>



   <div className='app_recipes' >
   {recipes.map((recipe)=>{
    return <RecipeTile recipe={recipe} />
   })}
   </div>

   
    </div>
  );
}

export default App;
