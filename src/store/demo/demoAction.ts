export interface DemoData {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

 const getDemoData = () => {
    return {
        type: "GET_COCKTAIL_REQUEST",
    };
};

 const getDemoDataSuccess = (data: DemoData[]) => {
    return {
        type: "GET_COCKTAIL_REQUEST_SUCCESS",
        data
    }
    
}

export {
    getDemoData,
    getDemoDataSuccess
}