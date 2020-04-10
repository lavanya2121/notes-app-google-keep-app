import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from './Form'
import {startAddCategory} from '../../actions/categoriesAction'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function CategoryNew(props){

    const handleSubmit=(formData)=>{
        const redirect=()=>props.history.push('/categories')
        props.dispatch(startAddCategory(formData,redirect))
    }

    return(
       <div>
           <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
            <CardContent>
                {/* Add Category Label */}
                <Typography variant="h6" component="h6" style={{textAlign : "center"}}>
                     ADD CATEGORY
                </Typography>

            {/*CategoryForm Component  */}
           <CategoryForm handleSubmit={handleSubmit}/>
            </CardContent>
          </Card>
        </div>
    )
}
export default connect()(CategoryNew)