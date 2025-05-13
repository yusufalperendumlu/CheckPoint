import axios from "axios";

const getCocktailList = async () => {
    try {
        const data = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")

    
        return data.data;

    } catch (err) {
        throw new Error("Error fetching data");
        
    }
}

export {getCocktailList}