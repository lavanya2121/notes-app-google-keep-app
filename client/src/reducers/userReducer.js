const userInitialState={}

const userReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case 'SET_USER':{
            return {...action.payload}
        }
        case 'REMOVE_USER':{
            return userInitialState
            //return {}
        }
        default:{
            return {...state}
        }
    }
}
export default userReducer