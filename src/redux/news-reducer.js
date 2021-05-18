const ADD_CATS = "ADD-CATS"

let initialState = {
    catsData: [],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATS:
            console.log(action.src)
            let newCat = {
                id: 4,
                imgSrc: action.src,
            };
            return {...state, imgSrc: action.src,catsData: [...state.catsData, newCat]}
        default:
            return state;
    }
}
export const addCatsPostCreator = (src) => ({type: ADD_CATS, src})

export default newsReducer;