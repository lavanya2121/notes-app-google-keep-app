import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import { startSetUser } from './actions/userAction';
import {startSetCategories} from './actions/categoriesAction'
import {startSetNotes} from './actions/notesAction'

const store=configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//To handle all page reloads
if(localStorage.getItem('authToken')){
   store.dispatch(startSetUser())
   store.dispatch(startSetCategories())
   store.dispatch(startSetNotes())
   
}
const jsx=(
    <Provider store={store}>
       <App/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))


