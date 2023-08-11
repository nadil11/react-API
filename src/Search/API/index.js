import { API_start } from "./start";
import { categories,filtered,random } from "./endpoint";

export const getCategories = ()=>{
    let response = fetch(`${API_start}/${filtered}`)
    return response;
}

export const searchCategories = (item)=>{
    let response = fetch(`${API_start}/search.php?s=${item}`)
    return response;
}
