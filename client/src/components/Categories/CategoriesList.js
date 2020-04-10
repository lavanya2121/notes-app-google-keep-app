import React from 'react' 
import  {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startSetCategories,startRemoveCategory} from '../../actions/categoriesAction'
import Swal from 'sweetalert2'
import { MDBDataTable } from 'mdbreact'

//material-ui
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import {Button} from '@material-ui/core'
import {Typography} from '@material-ui/core'

function CategoriesList(props){
    
    // Handle remove eventhandler
    const handleRemove = (id) => {
        //const confirmRemove = window.confirm("Are you sure?")
        //if(confirmRemove){
           // props.dispatch(startRemoveCustomer(id))
        //}
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              props.dispatch(startRemoveCategory(id))
            }
            
          })
    }
    if(props.categories.length == 0){
        props.dispatch(startSetCategories())
    }

//     const data = {
//         columns: [
//             {
//                 label: 'Name',
//                 field: 'name'
//             },
//             {
//                 label: 'Actions',
//                 field: 'actions'
//             }
//         ],
//         rows: props.categories.map(category => ({
//             name: <Link to={`/categories/${category._id}`}>{category.name}</Link>, 
//             actions: <div className="row">
//                         <div className="col-md-6 offset-md-2">
//                             <Link to={`/categories/edit/${category._id}`} 
//                                 className="btn btn-primary  btn-sm">
//                                   <button>EDIT</button>
//                             </Link>
//                          </div>
//                          <div className="col-md-6 ">
//                             <button className="btn btn-danger btn-sm" 
//                                 onClick={() => {
//                                 handleRemove(category._id)
//                             }}> Remove </button>
//                         </div>
//             </div>
            
            
//         }))
//     }
//     return (
//         <div className="container md-5">
//             <div className="row">
//                 <div className="col-md-12">
//                 <h2>Listing categories - {props.categories.length} </h2>
                
//                 <MDBDataTable
//                     bordered
//                     striped
//                     fullWidth
//                    data={data}
//                 />
               
//                 <Link to="/categories/new" className="btn btn-primary">Add categories</Link>
//             </div>
//             </div>

           
//         </div> 
//     )
// }
    return(
        <div>
            <Card style={{width : "500px",margin : "0 auto"}}>
               <CardContent>
        
            {
                props.categories ? (
                    <div>
                        <h2 style={{textAlign:"center"}}>Listing Categories-{props.categories.length}</h2>

                        {/* <MDBDataTable 
                            striped 
                            bordered
                            data={data}
                        /> */}

            {/* Table */}
            <table border="1" align="center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action1</th>
                        <th>Action2</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.categories.map(category => {
                            return <tr key={category._id}>
                                 <td>{category.name}</td>
                               <td>
                               <Link to={`/categories/edit/${category._id}`}>
                                    <Button variant="contained"  color="primary">EDIT</Button></Link>
                                </td>
                                <td>
                                   {/* <button onClick={() => {
                                     handleRemove(category._id)
                                      }}>
                                          Remove
                                    </button> */}
                                    <Link to="/categories">
                                    <Button variant="contained" color="secondary" onClick={() => {
                                        handleRemove(category._id)
                                    }}>
                                        REMOVE
                                    </Button>
                                </Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <div align="center">
           <h2><Link to="/categories/new"><Button align="right" color="default" variant="contained" style={{margin: "auto"}}>ADD CATEGORIES</Button></Link></h2>
           </div>
           {/* <CategoryNew /> */}
            </div>
    
                ) :(
                    <div>
                        <p>loading....</p>
                    </div>
                )
            }
            </CardContent>
            </Card>
        </div>
        
    )
    }
    
 const mapStateToProps = (state) => {
     return {
        categories : state.categories
        }
 } 

export default connect(mapStateToProps)(CategoriesList)

