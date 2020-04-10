// import React from 'react' 
// import axios from 'axios'

// class NotesList extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             notes: []
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:3040/notes')
//             .then((response) => {
//                 const notes=response.data
//                 this.setState({notes})
//                 // console.log(response.data)
//             })

//             // axios.get('http://localhost:3040/notes/:id')
//             // .then((response) => {
//             //     const notes=response.data
//             //     this.setState({notes})
//             //     // console.log(response.data)
//             // })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Listing Notes-{this.state.notes.length}</h1> 
//                 <ul>
//                     {
//                         this.state.notes.map(note=>{
//                             return <li key={note._id}>{note.title}-{note.body}</li>
//                         })
//                     }
//                 </ul>
//             </div> 
//         )
//     }
// }

// export default NotesList