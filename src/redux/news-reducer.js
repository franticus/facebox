const ADD_CATS = "ADD-CATS"
const url = "https://aws.random.cat/meow"

let initialState = {
    catsData: []
}

async function fetchHandler() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        let newPostCats = {
            id: 7,
            imgSrc: data.file
        }
        initialState.catsData.push(newPostCats);
    } catch (e) {
        console.error(e)
    }
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATS:
            fetchHandler()
            return state;
        default:
            return state;
    }
}
export const addCatsPostCreator = () => ({
    type: ADD_CATS
})

export default newsReducer;