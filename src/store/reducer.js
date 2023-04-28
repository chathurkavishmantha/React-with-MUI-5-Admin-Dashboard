

const initialState = {
    amount: 10000,
};

export const reducer = (state = initialState, action) =>{
    const newState = {...state};

    switch(action.type) {
        case "INCREMENTS":
            newState.amount += action.value;
            break;
        case "DECREMENTS":
            newState.amount -= action.value;
            break;
        default:
            break;
    }
console.log("im value state",newState);
    return newState;
};

