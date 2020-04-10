import React from 'react'
import {connect} from 'react-redux'
import {startUpdateCategory} from '../../actions/categoriesAction'
import CategoryForm from './Form'

//material-ui
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function CategoryEdit(props){
    
    const handleSubmit=(formData)=>{
      const id=props.match.params.id
      const redirect=()=>props.history.push('/categories')
      props.dispatch(startUpdateCategory(formData,id,redirect))
    }
    return (
       <div>
           <Card style={{width : "800px",margin : "0 auto",border : "1px"}}>
             <CardContent>
                 {/* Category Edit Label */}
                <Typography variant="h6" component="h6" style={{textAlign : "center"}}>
                     EDIT CATEGORY
                </Typography>

            {/*CategoryForm Component  */}
            <CategoryForm handleSubmit={handleSubmit}/>
       </CardContent>
       </Card>
    </div>
    )
}
export default connect()(CategoryEdit)