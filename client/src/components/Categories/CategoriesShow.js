import React from 'react'
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {findCategory} from '../../selectors/categoriesSelector'

function CategoryShow(props){
    const {_id,name}=props.category || {}
    return(
        <div>
            {
                props.category?(
                <div>        
                    <h2>Category Show Page:</h2>
                    <h2>Category ID-{_id}</h2>
                    <p>Category Name-{name}</p>
                    <Link to={`/categories/edit/${_id}`}>edit</Link><br/>
                    <Link to='/categories'>back</Link></div>
                    ):(
                        <div>loading...</div>
                    )
            }
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        category:findCategory(state.categories,id)
}
}
export default connect(mapStateToProps)(CategoryShow)

