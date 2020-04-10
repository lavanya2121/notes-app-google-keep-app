const categoriesInitialState = []

const categoriesReducer = (state = categoriesInitialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES': {//list categories
            return [...action.payload]
        }
        
        case 'ADD_CATEGORIES': {
            return [...state, action.payload]
        }

        case 'REMOVE_CATEGORIES': {
            return state.filter(category => category._id !== action.payload)
        }

        case 'UPDATE_CATEGORIES' : {
            return state.map(category=>{
                if(category._id == action.payload._id){
                    return action.payload
                }
                else{
                    return category
                }
            })
        }
        default: {
            return [...state]
        }

    }
}
export default categoriesReducer